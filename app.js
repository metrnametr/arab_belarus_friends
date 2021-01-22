  

if ($(window).width() < 820)  {
  console.log(1)
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: true
    });
  });
} else {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        dots: true
    });
  });

}

let lastScrollTop = 0;

const navScrollFlow = () => {
  const nav = $("nav");
  const navWrap = $("nav .wrapper__nav");
  const st = $(document).scrollTop();
  nav.removeClass('static')
  if (st > 200) {
    !navWrap.hasClass("pin") && navWrap.addClass("pin");
    nav.addClass("hidden");
  } else {
    navWrap.hasClass("pin") && navWrap.removeClass("pin");
    nav.removeClass("hidden");
  }

  if (st > lastScrollTop && st > 200) {
    nav.addClass("hidden");
  } else {
    nav.removeClass("hidden");
  }

  if (st < 50) {
    nav.removeClass('hidden')
    nav.addClass('static')
  }

  
  lastScrollTop = st <= 0 ? 0 : st;
};

$(window).scroll(navScrollFlow);


function smoothScroll(e){
  if (
    !$(this)
      .parent()
      .hasClass("mobileLi")
  ) {
    e.preventDefault();
    const w = $(window).width();
    const a = $($(this).attr("href"));
    let os = 0;
    if (w < 1136) {
      // if ($("#menu-toggle").hasClass("open")) {
        $("#menu-toggle").trigger("click");
        os = 60;
      // }
    }

    

    $('.navbar-collapse__nav').addClass('open')
    $("html,body").animate(
      {
        scrollTop: a.offset().top - os
      },
      600
    );
    return false;
  }
}

$(".header__nav ul a").on("click", function(e) {
  smoothScroll.call(this, e);
});


$(".footer__nav ul a").on("click", function(e) {
  smoothScroll.call(this, e);
});


$('.collapse-btn').on("click", function(e){
  if ($('.navbar-collapse__nav').hasClass('open')) {
    $('.navbar-collapse__nav').removeClass('open')
  } else {
    $('.navbar-collapse__nav').addClass('open')
  }
})

const activeMenuLinksOnScroll = () => {
  var menu_selector = ".header__nav ul";
  var scroll_top = $(document).scrollTop();

  $(menu_selector + " a").each(function() {
    
    if (
      !$(this)
        .parent()
        .hasClass("mobileLi")
    ) {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (
        target.position().top <= scroll_top &&
        target.position().top + target.outerHeight() > scroll_top
      ) {
        $(menu_selector + "li a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    }
  });
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(window).scroll(() => {
  activeMenuLinksOnScroll();
  scrollBar();
});

$("form input[type=tel]").inputmask({
  mask: "+375(99)999-99-99"
});