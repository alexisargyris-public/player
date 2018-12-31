import { autoinject, bindable } from 'aurelia-framework'
import { EditorFactory } from './editor-factory'

@autoinject
export class MonacoEditor {
  public editorHost: HTMLElement
  private editorHostContainer: any
  private editorFactory: EditorFactory
  private editor: any
  private resizeTimer = null
  private readonly throttleLimit: number = 250
  public readonly paddingHeight: number = 32

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
        this.editorHostContainer = this.editorHost.parentNode.parentNode
        this.onResized()
        window.addEventListener('resize', this.onResized.bind(this))
      })
  }
  public onResized() {
    // adjust the editor's height to its container's height
    // use throttling (https://stackoverflow.com/questions/35937020/aurelia-resize-layout-change-event-for-view)
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      this.editorHost.style.height =
        (
          this.editorHostContainer.clientHeight - this.paddingHeight
        ).toString() + 'px'
      this.editor.layout()
    }, this.throttleLimit)
  }
}
