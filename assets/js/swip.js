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



$(".qestion2").hide()
$(".qestion3").hide()
$(".qestion4").hide()
$(".qestion5").hide()


$("#submit1").click(function(){
  $(".qestion1").hide()
  $(".qestion2").show()
  $("#quiz1").hide()
  $("#submit1").hide()
  $("#quiz2").show()
  $("#submit2").show()
  $(".load").css('width', '20%')
  $("#schot").html('20%')
})


$("#submit2").click(function(){
  $(".qestion2").hide()
  $(".qestion3").show()
  $("#quiz2").hide()
  $("#submit2").hide()
  $("#quiz3").show()
  $("#submit3").show()
  $(".load").css('width', '40%')
  $("#schot").html('40%')
})

$("#submit3").click(function(){
  $(".qestion3").hide()
  $(".qestion4").show()
  $("#quiz3").hide()
  $("#submit3").hide()
  $("#quiz4").show()
  $("#submit4").show()
  $(".load").css('width', '60%')
  $("#schot").html('60%')
})


$("#submit4").click(function(){
  $(".qestion4").hide()
  $(".qestion5").show()
  $("#quiz4").hide()
  $("#submit4").hide()
  $("#quiz5").show()
  $("#submit5").show()
  $(".load").css('width', '80%')
  $("#schot").html('80%')
})


$("#submit5").click(function(){
  $(".qestion5").hide()
  $("#quiz5").hide()
  $("#submit5").hide()
  $(".quiz6").show()
  $(".load").css('width', '100%')
  $(".loader").css('width', '100%')
  $("#schot").html('100%')
})
document.querySelectorAll(".tab-link")[0].classList.add("act");
