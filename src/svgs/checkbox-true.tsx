const CheckboxTrue: React.FC = () => {
    return (
        <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <mask
          id="mask0_15_113"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={3}
          y={3}
          width={19}
          height={18}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.5 3H19.5C20.61 3 21.5 3.9 21.5 5V19C21.5 20.1 20.61 21 19.5 21H5.5C4.39 21 3.5 20.1 3.5 19V5C3.5 3.9 4.39 3 5.5 3ZM5.5 12L10.5 17L19.5 8L18.09 6.58L10.5 14.17L6.91 10.59L5.5 12Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_15_113)">
          <rect x="0.5" width={24} height={24} fill="#F60257" />
        </g>
      </svg>
    );
  };
  
  export default CheckboxTrue;