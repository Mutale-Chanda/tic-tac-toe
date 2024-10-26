export interface ButtonProps {
    value: string;
    onSquareClick(): void;
}

export interface BoardProps {
    xIsNext : boolean;
    squares : Array<string>;
    onPlay(array : Array<string>):void;
}