import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "Aquarius",
      icons: true,
    },
    {
      _id: 991,
      title: "Aries",
    },
    {
      _id: 992,
      title: "Cancer",
      icons: true,
    },
    {
      _id: 993,
      title: "Capricorn",
    },
    {
      _id: 994,
      title: "Gemini",
    },
    {
      _id: 994,
      title: "Leo",
    },
    {
      _id: 994,
      title: "Libra",
    },
    {
      _id: 994,
      title: "Pisces",
    },
    {
      _id: 994,
      title: "Sagittarius",
    },
    {
      _id: 994,
      title: "Scorpio",
    },
    {
      _id: 994,
      title: "Taurus",
    },
    {
      _id: 994,
      title: "Virgo",
    },
  ];
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
            >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
