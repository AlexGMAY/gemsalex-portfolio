"use client";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { recentProjects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h2 className="heading mb-8">
        The Inside <span className="text-lime-400">Scoop</span>
      </h2>
      <p className="text-lg text-center text-neutral-400 mb-10">
        Browse through some of my best SaaS apps and products in development.
      </p>

      <div className="relative mt-10 p-4">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-0 right-10 z-10 flex gap-3">
          <button className="swiper-button-prev-custom bg-black/60 p-3 rounded-full text-white hover:bg-white hover:text-black transition">
            <FaArrowLeft size={18} />
          </button>
          <button className="swiper-button-next-custom bg-black/60 p-3 rounded-full text-white hover:bg-white hover:text-black transition">
            <FaArrowRight size={18} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {recentProjects.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="relative lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <PinContainer title="RDCEMPLOIS.COM" href="#">
                  {/* Navigation Buttons inside each Card */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="swiper-button-prev-custom bg-white/20 p-2 rounded-full text-white hover:bg-white hover:text-black transition">
                      <FaArrowLeft size={14} />
                    </button>
                    <button className="swiper-button-next-custom bg-white/20 p-2 rounded-full text-white hover:bg-white hover:text-black transition">
                      <FaArrowRight size={14} />
                    </button>
                  </div>

                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img src="/bg.png" alt="bgimg" />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaArrowRight className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentProjects;
