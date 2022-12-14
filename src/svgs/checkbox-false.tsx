const CheckboxFalse: React.FC = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <mask
        id="mask0_16_130"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_16_130)">
        <rect width={24} height={24} fill="black" fillOpacity="0.6" />
      </g>
    </svg>
  );
};

export default CheckboxFalse;
