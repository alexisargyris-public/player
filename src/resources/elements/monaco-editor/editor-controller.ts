import { bindable, bindingMode } from 'aurelia-framework'

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
  public changes: any[]
  public changesTotal: number = 0
  public changesCounter: number = 0
  public controlStates: EditorControlState = {} as EditorControlState
  public settingsRespectTiming: boolean = true // take into account change timing info
  public settingsPlayDurationSecs: number = 10 // time duration for all changes to play
  public settingsPlayDurationMSecs: number =
    this.settingsPlayDurationSecs * 1000
  public playDelay: number = 0
  public timerId: number
  public scale: number = 1

  bind() {
    if (typeof this.changes !== 'undefined' && this.changes.length) {
      this.changesTotal = this.changes.length - 1
      this.scale =
        (parseInt(this.changes[this.changesTotal].timestamp) -
          parseInt(this.changes[0].timestamp)) /
        this.settingsPlayDurationMSecs
    }
  }
  attached() {
    this.do(void 0, 'pause')
  }
  public do(event?: any, action?: string) {
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
      this.doAction({ action: 'previous', counter: this.changesCounter })
      if (this.changesCounter > 0) {
        this.playDelay = this.settingsRespectTiming
          ? Math.floor(
              (parseInt(this.changes[this.changesCounter].timestamp) -
                parseInt(this.changes[this.changesCounter - 1].timestamp)) /
                this.scale
            )
          : Math.floor(this.settingsPlayDurationMSecs / this.changesTotal)
        --this.changesCounter
        this.timerId = setTimeout(rplay.bind(this), this.playDelay)
      } else {
        this.do(void 0, 'pause')
      }
    }
    function play() {
      // action 'play' is a series of 'next' actions
      this.doAction({ action: 'next', counter: this.changesCounter })
      if (this.changesCounter < this.changesTotal) {
        this.playDelay = this.settingsRespectTiming
          ? Math.floor(
              (parseInt(this.changes[this.changesCounter + 1].timestamp) -
                parseInt(this.changes[this.changesCounter].timestamp)) /
                this.scale
            )
          : Math.floor(this.settingsPlayDurationMSecs / this.changesTotal)
        ++this.changesCounter
        this.timerId = setTimeout(play.bind(this), this.playDelay)
      } else {
        this.do(void 0, 'pause')
      }
    }
    function pause() {
      clearTimeout(this.timerId)
    }

    // if an event was passed in then use its target, otherwise expect a string
    let act: string =
      typeof event !== 'undefined' ? event.target.dataset.action : action

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
  public settingsPlayDurationSecsChanged(newValue: number, oldValue: number) {
    this.settingsPlayDurationMSecs = newValue * 1000
  }
}
