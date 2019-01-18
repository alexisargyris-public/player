"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var EditorController = (function () {
    function EditorController() {
        this.changesTotal = 0;
        this.changesCounter = 0;
        this.controlStates = {};
        this.settingsRespectTiming = true;
        this.settingsPlayDurationSecs = 10;
        this.settingsPlayDurationMSecs = this.settingsPlayDurationSecs * 1000;
        this.playDelay = 0;
        this.scale = 1;
    }
    EditorController.prototype.bind = function () {
        if (typeof this.changes !== 'undefined' && this.changes.length) {
            this.changesTotal = this.changes.length - 1;
            this.scale =
                (parseInt(this.changes[this.changesTotal].timestamp) -
                    parseInt(this.changes[0].timestamp)) /
                    this.settingsPlayDurationMSecs;
        }
    };
    EditorController.prototype.attached = function () {
        this.do(void 0, 'pause');
    };
    EditorController.prototype.do = function (event, action) {
        function idleState() {
            var canMoveForward = this.changesCounter < this.changesTotal;
            var canMoveBackward = this.changesCounter > 0;
            (this.controlStates.first = canMoveBackward),
                (this.controlStates.previous = canMoveBackward),
                (this.controlStates.rplay = canMoveBackward),
                (this.controlStates.pause = false),
                (this.controlStates.play = canMoveForward),
                (this.controlStates.next = canMoveForward),
                (this.controlStates.last = canMoveForward);
        }
        function busyState() {
            ;
            (this.controlStates.first = false),
                (this.controlStates.previous = false),
                (this.controlStates.rplay = false),
                (this.controlStates.pause = true),
                (this.controlStates.play = false),
                (this.controlStates.next = false),
                (this.controlStates.last = false);
        }
        function rplay() {
            this.doAction({ action: 'previous', counter: this.changesCounter });
            if (this.changesCounter > 0) {
                this.playDelay = this.settingsRespectTiming
                    ? Math.floor((parseInt(this.changes[this.changesCounter].timestamp) -
                        parseInt(this.changes[this.changesCounter - 1].timestamp)) /
                        this.scale)
                    : Math.floor(this.settingsPlayDurationMSecs / this.changesTotal);
                --this.changesCounter;
                this.timerId = setTimeout(rplay.bind(this), this.playDelay);
            }
            else {
                this.do(void 0, 'pause');
            }
        }
        function play() {
            this.doAction({ action: 'next', counter: this.changesCounter });
            if (this.changesCounter < this.changesTotal) {
                this.playDelay = this.settingsRespectTiming
                    ? Math.floor((parseInt(this.changes[this.changesCounter + 1].timestamp) -
                        parseInt(this.changes[this.changesCounter].timestamp)) /
                        this.scale)
                    : Math.floor(this.settingsPlayDurationMSecs / this.changesTotal);
                ++this.changesCounter;
                this.timerId = setTimeout(play.bind(this), this.playDelay);
            }
            else {
                this.do(void 0, 'pause');
            }
        }
        function pause() {
            clearTimeout(this.timerId);
        }
        var act = typeof event !== 'undefined' ? event.target.dataset.action : action;
        switch (act) {
            case 'first':
                busyState.call(this);
                this.doAction({ action: act, counter: this.changesCounter });
                this.changesCounter = 0;
                idleState.call(this);
                break;
            case 'previous':
                busyState.call(this);
                this.doAction({ action: act, counter: this.changesCounter });
                --this.changesCounter;
                idleState.call(this);
                break;
            case 'rplay':
                busyState.call(this);
                rplay.call(this);
                break;
            case 'pause':
                pause.call(this);
                idleState.call(this);
                break;
            case 'play':
                busyState.call(this);
                play.call(this);
                break;
            case 'next':
                busyState.call(this);
                this.doAction({ action: act, counter: this.changesCounter });
                ++this.changesCounter;
                idleState.call(this);
                break;
            default:
                break;
        }
    };
    EditorController.prototype.settingsPlayDurationSecsChanged = function (newValue, oldValue) {
        this.settingsPlayDurationMSecs = newValue * 1000;
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], EditorController.prototype, "doAction", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Array)
    ], EditorController.prototype, "changes", void 0);
    return EditorController;
}());
exports.EditorController = EditorController;
