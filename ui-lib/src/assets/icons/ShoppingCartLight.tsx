import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ShoppingCartLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8759 16.968V15.84H8.79595L8.36395 13.704H19.8839L21.8519 4.82403L6.61195 4.80003L6.25195 2.95203H2.14795V4.10403H5.24395L7.78795 16.968H18.8759ZM6.82795 5.95203H20.3639L18.9239 12.576H8.14795L6.82795 5.95203ZM7.25995 19.68C7.25995 20.424 7.85995 21.048 8.60395 21.048C9.34795 21.048 9.94795 20.424 9.94795 19.68C9.94795 18.96 9.34795 18.336 8.60395 18.336C7.85995 18.336 7.25995 18.96 7.25995 19.68ZM16.5959 19.68C16.5959 20.424 17.1959 21.048 17.9399 21.048C18.6839 21.048 19.2839 20.424 19.2839 19.68C19.2839 18.96 18.6839 18.336 17.9399 18.336C17.1959 18.336 16.5959 18.96 16.5959 19.68Z"
        fill={color}
      />
    </svg>
  );
}

export default ShoppingCartLight;
