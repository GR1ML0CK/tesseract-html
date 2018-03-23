import ElementAttributes from "./el-attributes";
export default interface IframeAttributes extends ElementAttributes {
    border?: string | number;
    frameBorder?: string | number;
    frameSpacing?: string | number;
    height?: string | number;
    width?: string | number;
    marginHeight?: string | number;
    marginWidth?: string | number;
    src?: string;
    scrolling?: string;
}
