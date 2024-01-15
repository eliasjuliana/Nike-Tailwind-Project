const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:bg-scarlet
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-gray hover:text-white`
        : "bg-coral-red text-white border-coral-red"
    }
    ${fullWidth && 'w-full'}
    `}
    >
      {label}
      {iconURL && (
        <div className="relative">
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 transition-transform transform hover:translate-x-1"
        />
      </div>
      )}
    </button>
  );
};

export default Button;
