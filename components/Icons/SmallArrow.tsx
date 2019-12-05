export const SmallArrow = ({ up = true }: { up?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="7"
    viewBox="0 0 11 7"
  >
    {up ? (
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 6l4.375-5L9.75 6"
      />
    ) : (
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1l4.375 5L9.75 1"
      />
    )}
  </svg>
)
