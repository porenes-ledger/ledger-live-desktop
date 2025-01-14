import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ShoppingBasketThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.08008 20.652H19.9201V9.61199H16.8001V8.00399C16.8001 6.99599 16.4641 6.05999 15.8881 5.29199C15.0001 4.11599 13.5601 3.34799 12.0001 3.34799C10.4401 3.34799 9.00008 4.11599 8.11208 5.29199C7.53608 6.05999 7.20008 6.99599 7.20008 8.00399V9.61199H4.08008V20.652ZM4.56008 20.172V10.092H7.20008V12.996H7.68008V10.092H16.3201V12.996H16.8001V10.092H19.4401V20.172H4.56008ZM7.68008 9.61199V8.00399C7.68008 5.62799 9.60008 3.82799 11.9761 3.82799H12.0241C14.4001 3.82799 16.3201 5.62799 16.3201 8.00399V9.61199H7.68008Z"
        fill={color}
      />
    </svg>
  );
}

export default ShoppingBasketThin;
