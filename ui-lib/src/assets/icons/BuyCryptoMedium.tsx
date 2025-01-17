import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BuyCryptoMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63993 12H4.46393V7.00795H19.1519C18.6959 7.41595 18.2639 7.79995 17.8559 8.20795L16.7999 9.28795L17.9759 10.464L22.3199 6.09595L17.9759 1.75195L16.7999 2.95195L17.8559 4.00795C18.2399 4.39195 18.6719 4.79995 19.1039 5.18395H2.63993V12ZM1.67993 17.904L6.02393 22.248L7.19993 21.048L6.14393 19.992C5.75993 19.608 5.32793 19.2 4.89593 18.816H21.3599V12H19.5359V16.992H4.84793C5.30393 16.584 5.73593 16.2 6.14393 15.792L7.19993 14.712L6.02393 13.536L1.67993 17.904Z"
        fill={color}
      />
    </svg>
  );
}

export default BuyCryptoMedium;
