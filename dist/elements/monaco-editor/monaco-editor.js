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
var editor_factory_1 = require("./editor-factory");
var MonacoEditor = (function () {
    function MonacoEditor(editorFactory) {
        this.resizeTimer = null;
        this.throttleLimit = 250;
        this.paddingHeight = 32;
        this.editorFactory = editorFactory;
    }
    MonacoEditor.prototype.attached = function () {
        var _this = this;
        this.editorFactory
            .createEditor(this.editorHostContainer, {
            language: 'plaintext',
            value: '',
            readOnly: false,
            theme: 'vs-dark',
            wordWrap: 'bounded',
            scrollBeyondLastLine: false
        })
            .then(function (ed) {
            _this.editor = ed;
            _this.editorModel = _this.editor.getModel();
            _this.editorParent = _this.editorHostContainer.parentElement;
            _this.onResized();
            window.addEventListener('resize', _this.onResized.bind(_this));
        });
    };
    MonacoEditor.prototype.onResized = function () {
        var _this = this;
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function () {
            _this.editorHostContainer.style.height =
                (_this.editorParent.clientHeight - _this.paddingHeight).toString() + 'px';
            _this.editor.layout();
        }, this.throttleLimit);
    };
    MonacoEditor.prototype.doAction = function (action, counter) {
        function reset() {
            this.editorModel.setValue('');
        }
        function previous() {
            this.editor.trigger('anmz', 'undo');
        }
        function next(counter) {
            this.editor.executeEdits('anmz', [this.changes[counter]]);
            this.editor.pushUndoStop();
            this.editor.revealLineInCenter(this.changes[counter].range.startLineNumber);
        }
        switch (action) {
            case 'first':
                reset.call(this);
                break;
            case 'previous':
                previous.call(this);
                break;
            case 'next':
                next.call(this, counter);
                break;
            default:
                break;
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Array)
    ], MonacoEditor.prototype, "changes", void 0);
    MonacoEditor = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [editor_factory_1.EditorFactory])
    ], MonacoEditor);
    return MonacoEditor;
}());
exports.MonacoEditor = MonacoEditor;
