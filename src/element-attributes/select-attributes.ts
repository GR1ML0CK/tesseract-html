import ElementAttributes from "./el-attributes";

export default interface SelectAttributes extends ElementAttributes {
  disabled?: boolean;

  autocomplete?: string;

  multiple?: string;

  name?: string;

  required?: boolean;

  value?: string;
};
