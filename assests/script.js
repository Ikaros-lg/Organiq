
/*-----------------------------------Tai trang web----------------------------------*/
var myVar;

function myFunction() {
  $("#webpage").css("display", "none");
  myVar = setTimeout(showPage, 800);
}

function showPage() {
  $("#loader").css("display", "none"), $("#webpage").fadeIn(800);
}






/*-----------------------------------Di chuyen len dau trang----------------------------------*/
$(document).ready(function () {
  $("#scroll").hide(),
    (window.onscroll = function () {
      if (
        document.body.scrollTop >= 20 ||
        document.documentElement.scrollTop >= 20
      ) {
        $("#header-nav").removeClass("top-fixed1").addClass("top-fixed2"),
          $("#scroll").fadeIn("fast"),
          $("#search-input")
            .removeClass("search-input-fixed1")
            .addClass("search-input-fixed2"),
          $("#search-submit")
            .removeClass("search-submit-fixed1")
            .addClass("search-submit-fixed2");
      } else if (
        document.body.scrollTop < 20 ||
        document.documentElement.scrollTop < 20
      ) {
        $("#header-nav").removeClass("top-fixed2").addClass("top-fixed1"),
          $("#scroll").hide(),
          $("#search-input")
            .removeClass("search-input-fixed2")
            .addClass("search-input-fixed1"),
          $("#search-submit")
            .removeClass("search-submit-fixed2")
            .addClass("search-submit-fixed1");
      }
    }),
    $("#scroll").click(function () {
      $("html,body").animate({ scrollTop: 0 }, "fast");
    }),
    $("#search-icon").click(function () {
      $(".search-icon1").toggle(),
        $(".search-icon2").toggle(),
        $("#search-form").toggle();
    });
});

// var scroll=function(){
//     document.addEventListener("click",function(){
//         document.body.scrollTop=0;
//         document.documentElement.scrollTop=0;
//     })
// }
// scroll();






/*-----------------------------------Banner index----------------------------------*/

$(document).ready(function () {
  $("#banner1").hide(),
    $("#banner2").hide(),
    $("#banner3").hide(),
    $("#banner4").hide(),
    $("#banner1").fadeIn(2500),
    $("#banner2").fadeIn(2500),
    $("#banner3").fadeIn(2500),
    $("#banner4").fadeIn(3000),
    $("#bannerText1").addClass("bannerText"),
    $("#bannerText1").fadeIn(0).animate({ left: "450px", opacity: "1" }, 2500);
});
var index = 0;
// var srcImg = [
//     { src1: "images/shape1.png", src2: "images/shape2.png", src3: "images/shape3.png", src4: "images/shape4.png" },
//     { src1: "images/shape5.png", src2: "images/shape6.png", src3: "images/shape7.png", src4: "images/shape8.png" },
//     { src1: "images/shape9.png", src2: "images/shape10.png", src3: "images/shape11.png", src4: "images/shape12.png" }
// ];
// var banner1 = document.getElementById("banner1");
// var banner2 = document.getElementById("banner2");
// var banner3 = document.getElementById("banner3");
// var banner4 = document.getElementById("banner4");
// var banner5 = document.getElementById("banner5");
// var banner6 = document.getElementById("banner6");
// var banner7 = document.getElementById("banner7");
// var banner8 = document.getElementById("banner8");
// var banner9 = document.getElementById("banner9");
// var banner10 = document.getElementById("banner10");
// var banner11 = document.getElementById("banner11");
// var banner12 = document.getElementById("banner12");

var prev = function () {
  index--;
  if (index == -1) {
    index = 2;
  }
  if (index == 0) {
    // banner1.src = srcImg[index].src1;
    // banner2.src = srcImg[index].src2;
    // banner3.src = srcImg[index].src3;
    // banner4.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner1").hide(),
        $("#banner2").hide(),
        $("#banner3").hide(),
        $("#banner4").hide(),
        $("#banner1").fadeIn(2500),
        $("#banner2").fadeIn(2500),
        $("#banner3").fadeIn(2500),
        $("#banner4").fadeIn(2500),
        $("#bannerText1").addClass("bannerText"),
        $("#bannerText1")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText3").removeAttr("style"),
              $("#bannerText2").removeAttr("style");
          });
    });
  }
  if (index == 1) {
    // banner5.src = srcImg[index].src1;
    // banner6.src = srcImg[index].src2;
    // banner7.src = srcImg[index].src3;
    // banner8.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner5").hide(),
        $("#banner6").hide(),
        $("#banner7").hide(),
        $("#banner8").hide(),
        $("#banner5").fadeIn(2500),
        $("#banner6").fadeIn(2500),
        $("#banner7").fadeIn(2500),
        $("#banner8").fadeIn(2500),
        $("#bannerText2").addClass("bannerText"),
        $("#bannerText2")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText1").removeAttr("style"),
              $("#bannerText3").removeAttr("style");
          });
    });
  }
  if (index == 2) {
    // banner9.src = srcImg[index].src1;
    // banner10.src = srcImg[index].src2;
    // banner11.src = srcImg[index].src3;
    // banner12.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner9").hide(),
        $("#banner10").hide(),
        $("#banner11").hide(),
        $("#banner12").hide(),
        $("#banner9").fadeIn(2500),
        $("#banner10").fadeIn(2500),
        $("#banner11").fadeIn(2500),
        $("#banner12").fadeIn(2500),
        $("#bannerText3").addClass("bannerText"),
        $("#bannerText3")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText2").removeAttr("style"),
              $("#bannerText1").removeAttr("style");
          });
    });
  }
};
var next = function () {
  index++;
  if (index == 3) {
    index = 0;
  }
  if (index == 0) {
    // banner1.src = srcImg[index].src1;
    // banner2.src = srcImg[index].src2;
    // banner3.src = srcImg[index].src3;
    // banner4.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner1").hide(),
        $("#banner2").hide(),
        $("#banner3").hide(),
        $("#banner4").hide(),
        $("#banner1").fadeIn(2500),
        $("#banner2").fadeIn(2500),
        $("#banner3").fadeIn(2500),
        $("#banner4").fadeIn(2500),
        $("#bannerText1")
          .addClass("bannerText")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText3").removeAttr("style"),
              $("#bannerText2").removeAttr("style");
          });
    });
  }
  if (index == 1) {
    // banner5.src = srcImg[index].src1;
    // banner6.src = srcImg[index].src2;
    // banner7.src = srcImg[index].src3;
    // banner8.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner5").hide(),
        $("#banner6").hide(),
        $("#banner7").hide(),
        $("#banner8").hide(),
        $("#banner5").fadeIn(2500),
        $("#banner6").fadeIn(2500),
        $("#banner7").fadeIn(2500),
        $("#banner8").fadeIn(2500),
        $("#bannerText2")
          .addClass("bannerText")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText3").removeAttr("style"),
              $("#bannerText1").removeAttr("style");
          });
    });
  }
  if (index == 2) {
    // banner9.src = srcImg[index].src1;
    // banner10.src = srcImg[index].src2;
    // banner11.src = srcImg[index].src3;
    // banner12.src = srcImg[index].src4;
    $(document).ready(function () {
      $("#banner9").hide(),
        $("#banner10").hide(),
        $("#banner11").hide(),
        $("#banner12").hide(),
        $("#banner9").fadeIn(2500),
        $("#banner10").fadeIn(2500),
        $("#banner11").fadeIn(2500),
        $("#banner12").fadeIn(2500),
        $("#bannerText3")
          .addClass("bannerText")
          .fadeIn(0)
          .animate({ left: "450px", opacity: "1" }, "slow", function () {
            $("#bannerText1").removeAttr("style"),
              $("#bannerText2").removeAttr("style");
          });
    });
  }
};

function doClickAction1() {
  prev();
}

function doDoubleClickAction1() {
  prev();
}

function doClickAction2() {
  next();
}

function doDoubleClickAction2() {
  next();
}

var timer = 0;
var delay = 200;
var prevent = false;

$("#pre")
  .on("click", function () {
    timer = setTimeout(function () {
      if (!prevent) {
        doClickAction1();
      }
      prevent = false;
    }, delay);
  })
  .on("dblclick", function () {
    clearTimeout(timer);
    prevent = true;
    doDoubleClickAction1();
  });
$("#next")
  .on("click", function () {
    timer = setTimeout(function () {
      if (!prevent) {
        doClickAction2();
      }
      prevent = false;
    }, delay);
  })
  .on("dblclick", function () {
    clearTimeout(timer);
    prevent = true;
    doDoubleClickAction2();
  });






/*-----------------------------------Phan trang san pham----------------------------------*/
jQuery(document).ready(function ($) {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true, //Để không quay lại slide ban đầu thì các bạn set thuộc tính loop:false
    nav: true, // Để tắt mũi tên chuyển slide thì các bạn set thuộc tính nav:false

    /*Để tự động chuyển slide các bạn dùng thuộc tính autoplay:true,
         và set thời gian chuyển slide bằng thuộc tính autoplayTimeout:1000 với 1000 là bằng 1s*/
    lazyLoad: true,
    margin: 30,
    video: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});





/*-----------------------------------So luong san pham trong gio hang, trong xem chi tiet----------------------------------*/
$(".cart-Box1").click(function () {
  var $cartBox1 = $(this);
  var $inputCart1 = $cartBox1.closest("div").find("input");
  var valCart1 = parseInt($inputCart1.val());
  if (valCart1 > 1) {
    valCart1--;
  } else {
    valCart1 = 0;
  }
  $inputCart1.val(valCart1);
});
$(".cart-Box2").on("click", function () {
  var $cartBox2 = $(this);
  var $inputCart2 = $cartBox2.closest("div").find("input");
  var valCart2 = parseInt($inputCart2.val());
  if (valCart2 < 99) {
    valCart2++;
  } else {
    valCart2 = 100;
  }
  $inputCart2.val(valCart2);
});
$(".product-Box1").click(function () {
  var $cartBox1 = $(this);
  var $inputCart1 = $cartBox1.closest("div").find("input");
  var valCart1 = parseInt($inputCart1.val());
  if (valCart1 > 1) {
    valCart1--;
  } else {
    valCart1 = 0;
  }
  $inputCart1.val(valCart1);
});
$(".product-Box2").on("click", function () {
  var $cartBox2 = $(this);
  var $inputCart2 = $cartBox2.closest("div").find("input");
  var valCart2 = parseInt($inputCart2.val());
  if (valCart2 < 99) {
    valCart2++;
  } else {
    valCart2 = 100;
  }
  $inputCart2.val(valCart2);
});

/*-----------------------------------Hien thi gio hang, xem san pham, yeu thich----------------------------------*/
$(".product-choice-heart").hide();
$(".product-choice-cart").hide();
$(".product-choice-eye").hide();

$(".product-display").mouseenter(function (e) {
  e.preventDefault();
  $(this).find("a").show();
  $(this).find("img").css("opacity", "0.5");
});

$(".product-display").mouseleave(function (e) {
  e.preventDefault();
  $(this).find("a").hide();
  $(this).find("img").css("opacity", "1");
});

/*-----------------------------------responsive----------------------------------*/

// document.getElementById('header-nav-right').style.display = "none";
            document.getElementById('demo').onclick = function () {
                document.getElementById('header-nav-right').style.display = "block";
                // document.querySelector('.header-nav-right').style.flexDirection= "column-reverse";

            }




