import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledInitRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3201 16.464H16.5601V15.096L12.1441 15.12V14.76L14.5681 13.176C16.0561 12.216 16.6321 11.304 16.6321 10.176C16.6321 8.37601 15.1921 7.34401 13.4161 7.34401C11.4481 7.34401 10.1281 8.66401 10.1281 10.176V10.464H11.6641V10.2C11.6641 9.24001 12.0961 8.71201 13.3441 8.71201H13.4641C14.5681 8.71201 15.0721 9.14401 15.0721 10.224C15.0721 10.968 14.8321 11.52 13.2241 12.552L10.3201 14.472V16.464ZM4.1521 12C4.1521 17.16 8.2321 21.24 13.3921 21.24H19.8481V19.68H13.3921C9.0961 19.68 5.7121 16.296 5.7121 12C5.7121 7.80001 9.0961 4.32001 13.3921 4.32001H19.8481V2.76001H13.3921C8.2081 2.76001 4.1521 6.96001 4.1521 12Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledInitRegular;
