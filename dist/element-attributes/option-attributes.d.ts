import ElementAttributes from "./el-attributes";
export default interface OptionAttributes extends ElementAttributes {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
}
