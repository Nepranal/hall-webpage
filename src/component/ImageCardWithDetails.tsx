import placeholder from "../assets/placeholder.svg";

import type { ReactNode } from "react";

type ImageCardWithDetailsProps = {
  src?: string[];
  component?: ReactNode;
  imageCollator?: (src: string[]) => any;
};

const ImageCardWithDetails = ({
  src = [placeholder],
  component = <div>hello</div>,
  imageCollator = (src) =>
    src.map((s) => (
      <>
        <img src={s}></img>
      </>
    )),
}: ImageCardWithDetailsProps) => {
  return (
    <div>
      {imageCollator(src)}
      {component}
    </div>
  );
};

export default ImageCardWithDetails;
