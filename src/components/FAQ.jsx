import data from "../data/FAQdata";
import { useState } from "react";

export default function FAQ() {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };
  return (
    <ul className="mt-4">
      {data.map((card) => {
        return (
          <li className="relative mb-2">
            <button
              className="text-white bg-[#2d2d2d] hover:bg-[#404040] w-full font-medium p-6 text-2xl max-[960px]:text-lg text-center inline-flex items-center justify-between transition-colors ease-in-out duration-150 cursor-pointer"
              type="button"
              onClick={() => handleClick(card.key)}
            >
              {card.textContent}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 36 36"
                width="36"
                height="36"
                data-icon="PlusLarge"
                aria-hidden="true"
                className={activeKey === card.key ? "rotate-45" : ""}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div
              className={
                "-z-10 mt-[1px] text-white bg-[#2d2d2d] overflow-hidden shadow-sm w-full text-2xl max-[960px]:text-lg flex flex-col items-center transition-all ease-in-out duration-300" +
                (activeKey === card.key ? " max-h-[1000px]" : " max-h-0")
              }
            >
              <p className="px-6 pt-6 pb-6">{card.msg1}</p>
              {card.msg2 ? <p className="px-6 pb-6">{card.msg2}</p> : ""}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
