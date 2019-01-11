import { bindable, bindingMode } from 'aurelia-framework'
import { EditorAction } from './monaco-editor'
import { bind } from 'bluebird'

interface EditorControlState {
  first: boolean
  previous: boolean
  rplay: boolean
  pause: boolean
  play: boolean
  next: boolean
  last: boolean
}
export class EditorController {
  @bindable public doAction: Function
  @bindable({ defaultBindingMode: bindingMode.oneTime })
  public changesTotal: number
  public changesCounter: number = 0
  public controlStates: EditorControlState = {} as EditorControlState
  public settingsTimely: boolean = true // take into account change timing info
  public settingsPlayLimit: number = 5 // in secs, how long changes will play
  public playTimeout: number
  public playInterval: any

  bind() {
    this.playTimeout = (this.settingsPlayLimit * 1000) / this.changesTotal
  }
  attached() {
    this.do('pause')
  }
  public do(param) {
    function idleState() {
      let canMoveForward = this.changesCounter < this.changesTotal
      let canMoveBackward = this.changesCounter > 0
      ;(this.controlStates.first = canMoveBackward),
        (this.controlStates.previous = canMoveBackward),
        (this.controlStates.rplay = canMoveBackward),
        (this.controlStates.pause = false),
        (this.controlStates.play = canMoveForward),
        (this.controlStates.next = canMoveForward),
        (this.controlStates.last = canMoveForward)
    }
    function busyState() {
      ;(this.controlStates.first = false),
        (this.controlStates.previous = false),
        (this.controlStates.rplay = false),
        (this.controlStates.pause = true),
        (this.controlStates.play = false),
        (this.controlStates.next = false),
        (this.controlStates.last = false)
    }
    function rplay() {
      // action 'reverse play (rplay)' is a series of 'previous' actions
      // set the interval, if necessary
      if (!this.playInterval) {
        this.playInterval = setInterval(rplay.bind(this), this.playTimeout)
      }
      // play a 'next' action until the beginning
      if (this.changesCounter > 0) {
        this.doAction({ action: 'previous', counter: this.changesCounter })
        --this.changesCounter
      } else {
        this.do('pause')
      }
    }
    function play() {
      // action 'play' is a series of 'next' actions
      // set the interval, if necessary
      if (!this.playInterval) {
        this.playInterval = setInterval(play.bind(this), this.playTimeout)
      }
      // play a 'next' action until the end
      if (this.changesCounter <= this.changesTotal - 1) {
        this.doAction({ action: 'next', counter: this.changesCounter })
        ++this.changesCounter
      } else {
        this.do('pause')
      }
    }
    function pause() {
      if (this.playInterval) {
        clearInterval(this.playInterval)
        this.playInterval = 0
      }
    }

    // param may be event or string
    let act: string =
      typeof param.target !== 'undefined' ? param.target.dataset.action : param

    switch (act) {
      case 'first':
        busyState.call(this)
        this.doAction({ action: act, counter: this.changesCounter })
        this.changesCounter = 0
        idleState.call(this)
        break
      case 'previous':
        busyState.call(this)
        this.doAction({ action: act, counter: this.changesCounter })
        --this.changesCounter
        idleState.call(this)
        break
      case 'rplay':
        busyState.call(this)
        rplay.call(this)
        break
      case 'pause':
        pause.call(this)
        idleState.call(this)
        break
      case 'play':
        busyState.call(this)
        play.call(this)
        break
      case 'next':
        busyState.call(this)
        this.doAction({ action: act, counter: this.changesCounter })
        ++this.changesCounter
        idleState.call(this)
        break
      default:
        break
    }
  }
}
