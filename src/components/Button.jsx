export default function Button({ textContent, svg, small }) {
  return (
    <button
      type="submit"
      className={`text-white cursor-pointer font-bold flex items-center font-sans rounded-sm bg-red-600 hover:bg-red-700 transition-colors ease-in-out duration-300 ${
        small
          ? `justify-center focus:outline-none text-sm px-4 pt-1.5 pb-2`
          : `justify-between text-xl px-5 py-2.5 min-w-46 h-16 max-[600px]:h-12 sm:w-auto`
      }`}
    >
      {textContent}
      {svg ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          role="img"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          data-icon="ChevronRightStandard"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      ) : (
        ""
      )}
    </button>
  );
}
