export default interface ElementAttributes {
    accessKey?: string;
    className?: string;
    id?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    hideFocus?: boolean;
    textContent?: string;
    innerHTML?: string;
    innerText?: string;
    data?: {
        [key: string]: any;
    };
    aria?: {
        [key: string]: string;
    };
    attrs?: {
        [key: string]: string;
    };
}
