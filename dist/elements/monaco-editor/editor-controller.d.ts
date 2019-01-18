interface EditorControlState {
    first: boolean;
    previous: boolean;
    rplay: boolean;
    pause: boolean;
    play: boolean;
    next: boolean;
    last: boolean;
}
export declare class EditorController {
    doAction: Function;
    changes: any[];
    changesTotal: number;
    changesCounter: number;
    controlStates: EditorControlState;
    settingsRespectTiming: boolean;
    settingsPlayDurationSecs: number;
    settingsPlayDurationMSecs: number;
    playDelay: number;
    timerId: number;
    scale: number;
    bind(): void;
    attached(): void;
    do(event?: any, action?: string): void;
    settingsPlayDurationSecsChanged(newValue: number, oldValue: number): void;
}
export {};
