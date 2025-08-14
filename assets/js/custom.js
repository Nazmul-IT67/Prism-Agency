$(".home_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".testimonial_slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".blog_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Counter
$(document).ready(function () {
  function startCounterAnimation() {
    $(".counter").each(function () {
      var $this = $(this);
      if (!$this.hasClass("animated") && isScrolledIntoView($this)) {
        $this.addClass("animated");
        $this.prop("Counter", 0).animate(
          {
            Counter: $this.text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $this.text(Math.ceil(now));
            },
          }
        );
      }
    });
  }

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return elemTop < docViewBottom;
  }

  $(window).on("scroll", function () {
    startCounterAnimation();
  });
  // Initial check in case the counter is already in view
  startCounterAnimation();
});

// SkillBar
document.addEventListener("DOMContentLoaded", function () {
  let skillBars = document.querySelectorAll(".skill-percentage");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let bar = entry.target;
          let percentage = bar.getAttribute("per");
          bar.style.width = percentage;
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
});
