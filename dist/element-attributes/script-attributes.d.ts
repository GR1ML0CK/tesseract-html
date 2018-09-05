import ElementAttributes from "./el-attributes";
export default interface ScriptAttributes extends ElementAttributes {
    async?: boolean;
    crossorigin?: string;
    defer?: boolean;
    integrity?: string;
    nomodule?: string;
    nonce?: string;
    src?: string;
    text?: string;
    type?: string;
}
