import ElementAttributes from "./el-attributes";

export default interface ImgAttributes extends ElementAttributes {
  src?: string;

  alt?: string;

  width?: string | number;

  height?: string | number;
};
