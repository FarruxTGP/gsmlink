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
$("#cost").click(function(){
  $("#sps__calc").show(300)
})
$(".closer").click(function(){
  $("#sps__calc").hide(300)
})
$("#sps__calc").hide()



// $("#quiz1").hide()
$("#quiz2").hide()
$("#quiz3").hide()
$("#quiz4").hide()
$("#quiz5").hide()
$(".quiz6").hide()

// $("#submit1").hide()
$("#submit2").hide()
$("#submit3").hide()
$("#submit4").hide()
$("#submit5").hide()


$("#submit1").click(function(){
  $("#quiz1").hide()
  $("#submit1").hide()
  $("#quiz2").show()
  $("#submit2").show()
})


$("#submit2").click(function(){
  $("#quiz2").hide()
  $("#submit2").hide()
  $("#quiz3").show()
  $("#submit3").show()
})

$("#submit3").click(function(){
  $("#quiz3").hide()
  $("#submit3").hide()
  $("#quiz4").show()
  $("#submit4").show()
})


$("#submit4").click(function(){
  $("#quiz4").hide()
  $("#submit4").hide()
  $("#quiz5").show()
  $("#submit5").show()
})


$("#submit5").click(function(){
  $("#quiz5").hide()
  $("#submit1").hide()
  $(".quiz6").show()
})
document.querySelectorAll(".tab-link")[0].classList.add("act");
