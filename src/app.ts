import { bindable, bindingMode } from 'aurelia-framework'
import 'bootstrap'

export class App {
  @bindable({ defaultBindingMode: bindingMode.oneTime })
  public changes: any[]
}
