import AnchorListData from "../data/AnchorListData";

export default function AnchorList() {
  return (
    <ul className="grid grid-cols-4 max-[1280px]:grid-cols-3 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1 gap-y-2 gap-x-12 mb-12">
      {AnchorListData.map(({ textContent, href }) => {
        return (
          <li>
            <a href={href} className="text-[14px] opacity-70 underline">
              {textContent}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
