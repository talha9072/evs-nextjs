"use client";

import { useEffect } from "react";

export default function ServiceMarqueeAr({
 services = [
  "تفعيل ضمان إي في إس وفحص المركبة",
  "خدمة تكييف الهواء",
  "استبدال فلتر الهواء وفلتر المقصورة",
  "استبدال البطارية",
  "خدمة وإصلاح المكابح",
  "تغيير الزيت",
  "استبدال الإطارات وضبط المحاذاة",
  "البرمجة وخدمات الأنظمة والبرمجيات",
]
}) {
  useEffect(() => {
    let swiperInstance = null;

    const startSwiper = () => {
      // 1️⃣ trigger existing theme swiper init
      if (window?.initSwiper) {
        window.initSwiper();
      }

      // 2️⃣ find swiper instance
      setTimeout(() => {
        const el = document.querySelector(".swiper");
        if (el?.swiper) {
          swiperInstance = el.swiper;

          // 🔥 FORCE FIX
          swiperInstance.update();
          swiperInstance.autoplay?.start();
        }
      }, 100);
    };

    startSwiper();

    // 3️⃣ TAB SWITCH FIX (main reason of bug)
    const onVisibilityChange = () => {
      if (!document.hidden && swiperInstance) {
        swiperInstance.update();
        swiperInstance.autoplay?.start();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section className="snap-section pt-45px pb-40px border-color-medium-gray sm-pt-35px sm-pb-30px">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{ 
              "slidesPerView": "auto",
              "spaceBetween": 0,
              "centeredSlides": true,
              "speed": 12000,
              "loop": true,
              "allowTouchMove": false,
              "autoplay": { "delay": 1, "disableOnInteraction": false },
              "keyboard": { "enabled": true, "onlyInViewport": true },
              "effect": "slide"
            }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {services.map((service, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                    <h2 className="service-swiper">
                      <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                      {service}
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
