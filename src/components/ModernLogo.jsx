import React from "react";

const Logo = () => {
  return (
    <svg
      width="160"
      height="40"
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      {/* Geometrik şekil sol tarafta */}
      <g>
        <path
          d="M8 12C8 10.8954 8.89543 10 10 10H14C15.1046 10 16 10.8954 16 12V16C16 17.1046 15.1046 18 14 18H10C8.89543 18 8 17.1046 8 16V12Z"
          fill="currentColor"
          className="opacity-90"
        />
        <path
          d="M16 20C16 18.8954 16.8954 18 18 18H22C23.1046 18 24 18.8954 24 20V24C24 25.1046 23.1046 26 22 26H18C16.8954 26 16 25.1046 16 24V20Z"
          fill="currentColor"
          className="opacity-80"
        />
        <path
          d="M12 24C12 22.8954 12.8954 22 14 22H18C19.1046 22 20 22.8954 20 24V28C20 29.1046 19.1046 30 18 30H14C12.8954 30 12 29.1046 12 28V24Z"
          fill="currentColor"
          className="opacity-70"
        />
      </g>

      {/* Kesif yazısı - modern font stilinde */}
      <path
        d="M40 28L45 12H48L43 28H40ZM50 28V12H53V28H50ZM55 28L60 12H63L58 28H55ZM65 28V12H68V28H65Z"
        fill="currentColor"
      />

      {/* Özel tasarlanmış Plus işareti */}
      <g className="translate-x-4">
        <path
          d="M95 15H90V13H95V8H97V13H102V15H97V20H95V15Z"
          fill="currentColor"
          className="opacity-90"
        />
        <path
          d="M90 22H102V24H90V22Z"
          fill="currentColor"
          className="opacity-90"
        />
      </g>
    </svg>
  );
};

export default Logo;
