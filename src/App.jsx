import { Navbar } from "./components/Navbar";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { NavBarMobile } from "./components/NavBarMobile";

const App = () => {
  return (
    <>
      <Navbar />
      <menu className="w-full mt-6 bg-[#BDBDBD]">
        <div className="bg-white rounded-br-[40px] pb-6">
          <div className="w-full relative px-6">
            <input
              type="text"
              name="search"
              id="search"
              className="px-4 py-3 bg-zinc-100 rounded-lg text-neutral-500 text-sm font-medium font-['Cairo'] w-full focus-visible:outline-none"
              placeholder="ادخل كلمة البحث"
            />
            <img
              src="/icons/search.svg"
              alt="search"
              className="absolute top-1/2 left-10 -translate-y-1/2"
            />
          </div>
          <div className="mt-6 px-6">
            <img
              src="/images/banner.png"
              alt="banner"
              className="max-h-96 w-full object-contain"
            />
          </div>
          <div className="mt-6 px-6">
            <div className="flex justify-between">
              <h3 className="text-neutral-800 text-base font-bold font-['Cairo']">
                الألعاب الرائجة
              </h3>
              <a
                href="#"
                className="h-7 px-2 bg-amber-500 rounded-lg justify-start items-center gap-2.5 inline-flex"
              >
                <span className="text-right text-neutral-800 text-xs font-semibold font-['Cairo']">
                  عرض الكل
                </span>
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-5">
              {[...Array(8)].map((_, index) => (
                <div className="col-span-1" key={index}>
                  <div className="relative after:bg-[#007bbf] after:absolute after:bottom-0 after:left-0 after:w-full after:rounded-[17px] after:h-16 z-[1] after:z-[-1]">
                    <img
                      src="/images/pubg.svg"
                      alt="pubg"
                      className="w-full h-17 rounded-bl-[17px] rounded-br-[17px]"
                    />
                  </div>
                  <h5 className="text-center text-neutral-800 text-xs font-medium font-['Cairo'] mt-2">
                    ببجي موبايل
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 ps-6">
            <div className="flex justify-between">
              <h3 className="text-neutral-800 text-base font-bold font-['Cairo']">
                أكواد خصم شركائنا
              </h3>
            </div>
            <Swiper slidesPerView={3.3} spaceBetween={12} className="mt-5">
              {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="px-2 pt-2.5 pb-2 bg-gray-200 rounded-lg flex-col justify-end items-center gap-2.5 flex">
                    <img className="object-contain" src="/images/gucci.svg" />
                    <h5 className="offer text-xs font-bold font-['Cairo'] leading-none">
                      5% / 10%
                    </h5>
                    <a
                      href="#"
                      className="p-1 w-full bg-sky-600 rounded-lg flex justify-center mt-0.5"
                    >
                      <span className="text-center text-white text-[10px] font-normal font-['Cairo']">
                        عرض التفاصيل
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper slidesPerView={3.3} spaceBetween={12} className="mt-3">
              {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="px-2 pt-2.5 pb-2 bg-gray-200 rounded-lg flex-col justify-end items-center gap-2.5 flex h-[128px]">
                    <img className="object-contain" src="/images/noon.svg" />
                    <h5 className="offer text-xs font-bold font-['Cairo'] leading-none">
                      5% / 10%
                    </h5>
                    <a
                      href="#"
                      className="p-1 w-full bg-sky-600 rounded-lg flex justify-center mt-0.5"
                    >
                      <span className="text-center text-white text-[10px] font-normal font-['Cairo']">
                        عرض التفاصيل
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </menu>
      <footer className="bg-white">
        <div className="bg-[#BDBDBD] rounded-tl-[40px] h-80"></div>
      </footer>
      <NavBarMobile />
    </>
  );
};

export default App;
