import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12ZM8.904 10.464H9.72V10.224C9.72 9.024 10.44 8.112 11.976 8.112H12.048C13.32 8.112 14.184 8.76 14.184 10.104C14.184 10.992 13.824 11.64 12.24 12.768L9.096 15V16.464H15.096V15.696H10.008V15.264L12.864 13.224C14.472 12.072 15.024 11.208 15.024 10.104C15.024 8.304 13.632 7.344 12 7.344C10.08 7.344 8.904 8.688 8.904 10.224V10.464Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledUltraLight;
