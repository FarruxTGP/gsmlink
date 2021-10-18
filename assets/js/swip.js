var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

AOS.init(1000);

$(".tab-link").click(function () {
  var tabID = $(this).attr("data-tab");

  $(this).addClass("act").siblings().removeClass("act");

  $("#tab-" + tabID)
    .addClass("activec")
    .siblings()
    .removeClass("activec");
});
document.querySelectorAll(".tab-link")[0].classList.add("act");
