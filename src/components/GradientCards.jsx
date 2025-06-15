import GCardData from "../data/GCardData";

export default function GradientCard() {
  return (
    <ul className="grid grid-cols-4 max-[1280px]:grid-cols-2 max-[960px]:grid-cols-1 mt-6 gap-4">
      {GCardData.map(({ heading, textContent, svg }) => {
        return (
          <li className="gradient-card relative rounded-2xl w-full">
            <div className="pt-8 pb-30 px-6 max-[1920px]:pb-24 -mt-6 min-[1920px]:-mt-4">
              <h2 className="text-2xl max-[1280px]:text-[20px] font-bold mt-4">
                {heading}
              </h2>
              <p className="text-[16px] opacity-70 mt-4">{textContent}</p>
            </div>
            <div className="absolute bottom-4 right-4">{svg}</div>
          </li>
        );
      })}
    </ul>
  );
}
