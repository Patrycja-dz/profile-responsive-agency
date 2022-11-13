const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    576: {
      slidesToShow: 2,
    },
    760: {
      arrows: true,
      slidesToShow: 4,
    },
  },
});

