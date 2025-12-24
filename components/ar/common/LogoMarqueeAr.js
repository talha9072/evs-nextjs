export default function LogoMarqueeAr() {
  const logos = [
    { src: "img/logo/tesla-logo.svg", alt: "شعار تسلا" },
    { src: "img/logo/byd-logo.svg", alt: "شعار بي واي دي" },
    { src: "img/logo/avatr-logo.svg", alt: "شعار أفاتر" },
    { src: "img/logo/rox-logo.svg", alt: "شعار روكس" },
    { src: "img/logo/zeekr-logo.svg", alt: "شعار زيكر" },
    { src: "img/logo/tesla-logo.svg", alt: "شعار تسلا" },
    { src: "img/logo/byd-logo.svg", alt: "شعار بي واي دي" },
    { src: "img/logo/avatr-logo.svg", alt: "شعار أفاتر" },
    { src: "img/logo/rox-logo.svg", alt: "شعار روكس" },
    { src: "img/logo/zeekr-logo.svg", alt: "شعار زيكر" },
  ];

  return (
    <section className="pt-20px pb-20px border-bottom border-color-medium-gray">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="col swiper text-center"
            data-slider-options='{ "slidesPerView": "auto", "spaceBetween": 0, "centeredSlides": true, "speed": 12000, "loop": true, "pagination": { "el": ".slider-four-slide-pagination-2", "clickable": false }, "allowTouchMove": false, "autoplay": { "delay": 1, "disableOnInteraction": false }, "navigation": { "nextEl": ".slider-four-slide-next-2", "prevEl": ".slider-four-slide-prev-2" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'
          >
            <div className="swiper-wrapper swiper-width-auto marquee-slide">
              {logos.map((logo, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="fs-22 sm-fs-20 fw-500 alt-font text-uppercase text-white">
                    <span className="w-10px h-10px border border-2 border-radius-100 border-color-base-color d-inline-block align-middle ms-45px me-45px md-ms-30px md-me-30px"></span>
                    <img
                      src={logo.src}
                      width="200"
                      height="75"
                      alt={logo.alt}
                    />
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
