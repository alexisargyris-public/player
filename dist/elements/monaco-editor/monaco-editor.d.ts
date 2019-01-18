import { EditorFactory } from './editor-factory';
export declare type EditorAction = 'first' | 'previous' | 'next';
export declare class MonacoEditor {
    changes: any[];
    editorHostContainer: HTMLElement;
    private editorParent;
    private editorFactory;
    private editor;
    private editorModel;
    private resizeTimer;
    private readonly throttleLimit;
    private readonly paddingHeight;
    constructor(editorFactory: EditorFactory);
    attached(): void;
    onResized(): void;
    doAction(action: string, counter: number): void;
}
