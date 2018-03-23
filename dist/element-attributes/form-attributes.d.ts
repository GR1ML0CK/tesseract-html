import ElementAttributes from "./el-attributes";
export default interface FormAttributes extends ElementAttributes {
    action?: string;
    autocomplete?: string;
    encoding?: string;
    enctype?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
}
