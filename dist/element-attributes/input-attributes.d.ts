import ElementAttributes from "./el-attributes";
export default interface InputAttributes extends ElementAttributes {
    alt?: string;
    autocomplete?: string;
    border?: string | number;
    checked?: boolean;
    disabled?: boolean;
    height?: string | number;
    max?: string | number;
    maxLength?: number;
    min?: string | number;
    minLength?: number;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: string;
    value?: string;
    width?: string | number;
}
