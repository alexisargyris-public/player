import { autoinject, bindable, bindingMode } from 'aurelia-framework'
import { EditorFactory } from './editor-factory'

export type EditorAction = 'first' | 'previous' | 'next'

@autoinject
export class MonacoEditor {
  @bindable({ defaultBindingMode: bindingMode.oneTime })
  public changes: any[]
  public editorHostContainer: HTMLElement
  public changesTotal: number
  private editorParent: HTMLElement
  private editorFactory: EditorFactory
  private editor: monaco.editor.IStandaloneCodeEditor
  private editorModel: monaco.editor.ITextModel
  private resizeTimer = null
  private readonly throttleLimit: number = 250
  private readonly paddingHeight: number = 32

  constructor(editorFactory: EditorFactory) {
    this.editorFactory = editorFactory
  }
  bind() {
    this.changesTotal = this.changes.length - 1
  }
  public attached() {
    this.editorFactory
      .createEditor(this.editorHostContainer, {
        language: 'plaintext',
        value: '',
        readOnly: false,
        theme: 'vs-dark',
        wordWrap: 'bounded',
        scrollBeyondLastLine: false
      })
      .then(ed => {
        this.editor = ed
        this.editorModel = this.editor.getModel()
        this.editorParent = this.editorHostContainer.parentElement
        this.onResized()
        window.addEventListener('resize', this.onResized.bind(this))
      })
  }
  public onResized() {
    // adjust the editor's height to its container's height
    // use throttling (https://stackoverflow.com/questions/35937020/aurelia-resize-layout-change-event-for-view)
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      this.editorHostContainer.style.height =
        (this.editorParent.clientHeight - this.paddingHeight).toString() + 'px'
      this.editor.layout()
    }, this.throttleLimit)
  }
  public doAction(action: string, counter: number) {
    function reset() {
      this.editorModel.setValue('')
    }
    function previous() {
      this.editor.trigger('anmz', 'undo')
    }
    function next(counter: number) {
      this.editor.executeEdits('anmz', [this.changes[counter]])
      this.editor.pushUndoStop()
      this.editor.revealLineInCenter(
        this.changes[counter].range.startLineNumber
      )
    }

    switch (action) {
      case 'first':
        reset.call(this)
        break
      case 'previous':
        previous.call(this)
        break
      case 'next':
        next.call(this, counter)
        break
      default:
        break
    }
  }
}
