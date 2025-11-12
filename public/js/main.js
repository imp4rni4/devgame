$("#menu").click(function () {
  $(".sidebar").animate(
    {
      left: 0,
    },
    300
  );
  $("body").css("overflow", "hidden");
});
$("#close").click(function () {
  $(".sidebar").animate(
    {
      left: "-100rem",
    },
    300
  );
  $("body").css("overflow", "auto");
});
