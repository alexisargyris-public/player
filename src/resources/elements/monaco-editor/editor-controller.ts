import { bindable, bindingMode } from 'aurelia-framework'
import { EditorAction, EditorControlState } from './monaco-editor'

export class EditorController {
  @bindable public doAction: Function
  @bindable public changesCounter: Number
  @bindable({ defaultBindingMode: bindingMode.oneTime })
  public changesTotal: Number
  @bindable public settingsTimely: Boolean
  @bindable public settingsPlayLimit: Number
  @bindable public controlStates: EditorControlState

  public do(event) {
    this.doAction({ action: event.target.dataset.action as EditorAction })
  }
}
