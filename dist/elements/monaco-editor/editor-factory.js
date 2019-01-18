"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorFactory = (function () {
    function EditorFactory() {
    }
    EditorFactory.prototype.createEditor = function (domElement, options, services) {
        return new Promise(function (resolve, reject) {
            requirejs(['vs/editor/editor.main'], function (_) {
                resolve(monaco.editor.create(domElement, options, services));
            });
        });
    };
    return EditorFactory;
}());
exports.EditorFactory = EditorFactory;
