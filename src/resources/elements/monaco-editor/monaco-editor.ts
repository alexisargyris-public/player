import { autoinject, bindable } from 'aurelia-framework'
import { EditorFactory } from './editor-factory'

@autoinject
export class MonacoEditor {
  public editorHost: HTMLElement
  private editorFactory: EditorFactory
  private editor: any

  constructor(editorFactory: EditorFactory) {
    this.editorFactory = editorFactory
  }
  public attached() {
    this.editorFactory
      .createEditor(this.editorHost, {
        language: 'plaintext',
        value: 'hello world',
        readOnly: true,
        theme: 'vs-dark',
        wordWrap: 'bounded',
        scrollBeyondLastLine: false
      })
      .then(ed => {
        this.editor = ed
      })
  }
}
