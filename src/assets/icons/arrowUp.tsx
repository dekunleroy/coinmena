import * as React from 'react';

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 8l6 6H6z" fill="rgba(0,0,0,1)" />
  </svg>
  );
}

export default ArrowUpIcon;
