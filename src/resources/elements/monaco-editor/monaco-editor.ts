import { autoinject } from 'aurelia-framework'
import { EditorFactory } from './editor-factory'

export type EditorAction =
  | 'first'
  | 'previous'
  | 'rplay'
  | 'pause'
  | 'play'
  | 'next'
  | 'last'

export interface EditorControlState {
  first: Boolean
  previous: Boolean
  rplay: Boolean
  pause: Boolean
  play: Boolean
  next: Boolean
  last: Boolean
}

@autoinject
export class MonacoEditor {
  public editorHostContainer: HTMLElement
  public changesCounter: Number
  public changesTotal: Number
  public settingsTimely: Boolean // take into account change timing info
  public settingsPlayLimit: Number // duration of changes playing
  public controlStates: EditorControlState
  private editorParent: any
  private editorFactory: EditorFactory
  private editor: any
  private resizeTimer = null
  private readonly throttleLimit: Number = 250
  private readonly paddingHeight: Number = 32

  constructor(editorFactory: EditorFactory) {
    this.editorFactory = editorFactory
    this.changesCounter = 27
    this.changesTotal = 102
    this.settingsPlayLimit = 9
    this.settingsTimely = true
    this.controlStates = {
      first: false,
      previous: false,
      rplay: false,
      pause: false,
      play: true,
      next: true,
      last: true
    }
  }
  public attached() {
    this.editorFactory
      .createEditor(this.editorHostContainer, {
        language: 'plaintext',
        value: 'hello world',
        readOnly: true,
        theme: 'vs-dark',
        wordWrap: 'bounded',
        scrollBeyondLastLine: false
      })
      .then(ed => {
        this.editor = ed
        this.editorParent = this.editorHostContainer.parentNode
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
  public doAction(action: EditorAction) {
    console.log(action)
  }
}
