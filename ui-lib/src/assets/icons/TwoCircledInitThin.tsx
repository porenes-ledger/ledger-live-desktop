import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledInitThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.08 16.464H15.96V15.984H10.56V15.504L13.632 13.248C15.288 12.024 15.84 11.184 15.84 10.056C15.84 8.28 14.472 7.344 12.912 7.344C10.992 7.344 9.88798 8.712 9.88798 10.248V10.464H10.368V10.248C10.368 8.928 11.232 7.824 12.888 7.824H12.936C14.304 7.824 15.36 8.568 15.36 10.056C15.36 11.016 14.928 11.688 13.344 12.864L10.08 15.264V16.464ZM4.03198 12C4.03198 16.968 7.94398 20.88 12.912 20.88H19.968V20.4H12.912C8.20798 20.4 4.51198 16.704 4.51198 12C4.51198 7.416 8.20798 3.6 12.912 3.6H19.968V3.12H12.912C7.94398 3.12 4.03198 7.152 4.03198 12Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledInitThin;
