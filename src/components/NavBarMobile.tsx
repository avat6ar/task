import React from "react";
import "../assets/nav-mobile.css";

export const NavBarMobile = () => {
  return (
    <div className="relative">
      <ul className="flex items-center justify-center py-2.5 w-full bg-[#007bbf] *:flex-1">
        <li className="relative list-none w-14 z-10">
          <a href="#" className="flex items-center flex-col w-full h-full">
            <span className="relative transition duration-300 group-[.active]:-translate-y-6">
              <img src="/icons/cart.svg" alt="" />
            </span>
            <span className="text-white text-xs font-normal font-['Cairo'] mt-2">
              السلة
            </span>
          </a>
        </li>
        <li className="relative list-none w-14 z-10">
          <a href="#" className="flex items-center flex-col w-full h-full">
            <span className="relative transition duration-300 group-[.active]:-translate-y-6">
              <img src="/icons/orders.svg" alt="" />
            </span>
            <span className="text-white text-xs font-normal font-['Cairo'] mt-2">
              طلباتي
            </span>
          </a>
        </li>
        <li className="relative list-none w-14 z-10 active group">
          <a href="#" className="flex items-center flex-col w-full h-full">
            <span className="relative transition duration-300 group-[.active]:-translate-y-6">
              <img src="/icons/home.svg" alt="" />
            </span>
            <span className="text-amber-500 text-xs font-normal font-['Cairo'] mt-2">
              الرئيسية
            </span>
          </a>
        </li>
        <li className="relative list-none w-14 z-10">
          <a href="#" className="flex items-center flex-col w-full h-full">
            <span className="relative transition duration-300 group-[.active]:-translate-y-6">
              <img src="/icons/favorites.svg" alt="" />
            </span>
            <span className="text-white text-xs font-normal font-['Cairo'] mt-2">
              المفضلة
            </span>
          </a>
        </li>
        <li className="relative list-none w-14 z-10">
          <a href="#" className="flex items-center flex-col w-full h-full">
            <span className="relative transition duration-300 group-[.active]:-translate-y-6">
              <img src="/icons/profile.svg" alt="" />
            </span>
            <span className="text-white text-xs font-normal font-['Cairo'] mt-2">
              حسابي
            </span>
          </a>
        </li>
        <div className="point"></div>
      </ul>
    </div>
  );
};
