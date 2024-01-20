//<navigation>
$("a[href^='#']").click(function (e) {
  const linkHref = $(e.target).attr("href");
  const sectionOffset = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});
//</navigation>

// <home>
$(".openNav").on("click", function () {
  $("#leftMenu").animate(
    {
      width: "15.625rem",
    },
    100,
    function () {
      $("body").animate({ marginLeft: "15.625rem" }, 300);
    }
  );
});

$(".closebtn").on("click", function () {
  $("#leftMenu").animate(
    {
      width: "0",
    },
    100,
    function () {
      $("body").animate({ marginLeft: "0px" }, 300);
    }
  );
});
// </home>

// <slider>
$(".singer-name").on("click", function (e) {
  $(e.target).siblings(".content-of-singer").slideToggle(500);
  $(e.target).parent().siblings().children(".content-of-singer").slideUp(500);
});
// </slider>

// <count>
class CalcEvent {
  constructor(eventStart) {
    this.start = new Date(eventStart);
    this.now = new Date();
    this.difference;
    this.result = {};
  }
  calculate() {
    //Calculate the difference
    this.difference = this.start - this.now;

    // Calculate days, hours, minutes, and seconds
    this.result.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
    this.result.hours = Math.floor(
      (this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.result.minutes = Math.floor(
      (this.difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.result.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);

    return this.result;
  }
}

setInterval(function () {
  const newEvent = new CalcEvent("10/25/2024");
  $(".days").text(`${newEvent.calculate().days} D`);
  $(".hours").text(`${newEvent.calculate().hours} H`);
  $(".minutes").text(`${newEvent.calculate().minutes} M`);
  $(".seconds").text(`${newEvent.calculate().seconds} S`);
}, 1000);
// </count>

//<contact>
$("#message").on("input", function () {
  const messageValue = $(this).val();
  const charCount = messageValue.length;
  if (charCount < 100) {
    $("#whole-chars-message").html(
      `<span id="chars">${100 - charCount}</span> Character Reamining`
    );
  } else if (charCount >= 100) {
    $("#whole-chars-message").html(
      '<span id="chars">Your available character finished</span>'
    );
  }
});
//</contact>
