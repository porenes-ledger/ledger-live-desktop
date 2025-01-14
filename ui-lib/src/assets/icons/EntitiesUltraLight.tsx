import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function EntitiesUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.68018 21.36H7.68018V15.36H5.06418V12.384H11.6162V15.36H9.00018V21.36H15.0002V15.36H12.3842V12.384H18.9362V15.36H16.3202V21.36H22.3202V15.36H19.7042V11.616H12.3842V8.64H15.0002V2.64H9.00018V8.64H11.6162V11.616H4.29618V15.36H1.68018V21.36ZM2.47218 20.592V16.128H6.91218V20.592H2.47218ZM9.79218 20.592V16.128H14.2322V20.592H9.79218ZM9.79218 7.872V3.408H14.2322V7.872H9.79218ZM17.1122 20.592V16.128H21.5522V20.592H17.1122Z"
        fill={color}
      />
    </svg>
  );
}

export default EntitiesUltraLight;
