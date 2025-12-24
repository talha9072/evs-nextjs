"use client";

import { useEffect } from "react";

export default function ServiceMarquee() {
  useEffect(() => {
    // Wait for DOM + Swiper global
    const initSwiper = () => {
      if (typeof window !== "undefined" && window.Swiper) {
        document.querySelectorAll(".swiper").forEach((el) => {
          if (!el.swiper) {
            const options = JSON.parse(
              el.getAttribute("data-slider-options") || "{}"
            );
            new window.Swiper(el, options);
          }
        });
      }
    };

    // Delay ensures React render is finished
    const timer = setTimeout(initSwiper, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="snap-section pt-45px pb-40px border-color-medium-gray sm-pt-35px sm-pb-30px">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{ "slidesPerView":"auto","spaceBetween":0,"centeredSlides":true,"speed":12000,"loop":true,"allowTouchMove":false,"autoplay":{"delay":1,"disableOnInteraction":false},"keyboard":{"enabled":true},"effect":"slide" }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {[
                "EV Vehicle Health Check",
                "EV Repair",
                "High Voltage Battery Repair",
                "EV Drive Unit Repair",
                "EV Sim Card Installation",
                "Navigation System and Mapping",
                "EV Software Updates",
                "EV Body Repair",
                "EV Warranty Packages",
                "EV Roadside Assistance",
              ].map((text, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                    <h2 className="service-swiper">
                      <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                      {text}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
