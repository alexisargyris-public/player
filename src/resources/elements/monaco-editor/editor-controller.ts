import { bindable } from 'aurelia-framework'

export class EditorController {
  @bindable doAction: Function
  public changesCounter: Number = 25
  public changesTotal: Number = 100

  public do(event) {
    this.doAction({ action: event.target.dataset.action })
  }
}
