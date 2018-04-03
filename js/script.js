// Phones toggling
$(".showPhones").on("click", function () {
    $(".phonesMobileVersion").slideToggle("150");
    $(this).toggleClass("cross");
});

// Mobile menu toggling

$(".burger").click(function() {
    $(".mobileMenuWrapper").fadeIn("fast");
    $( ".slideMenuMobile" ).toggle( "slide" );
});
$(".mobileMenuWrapper").click(function(event) {
    $( ".slideMenuMobile" ).hide( "slide" );
    $(this).fadeOut("fast");
    event.stopPropagation();
});
$(".closeMenu").click(function() {
    $( ".slideMenuMobile" ).hide( "slide" );
    $(".mobileMenuWrapper").fadeOut("fast");
    event.stopPropagation();
});
$(".slideMenuMobile").click(function() {
    event.stopPropagation();
});


//Forms toggling
$(".header .askQuestionButton").on("click", function () {
    $(".header .formConsult").slideToggle("150");
    $(this).toggleClass("cross");
});

$(".header .closeForm").on("click", function () {
  $(".header .formConsult").slideUp("150");
  $(".header .askQuestionButton").removeClass("cross");
});


$(".bottomQuestion .askQuestionButton").on("click", function () {
  var form = $("footer .formConsult");
  form.slideToggle("150");
  if (!form.hasClass("activeForm")) {
    var destination = ($("#bottomForm").offset().top) - 120;
    $('html').animate({scrollTop: destination}, 1100);
  }
  form.toggleClass("activeForm");
});

$("footer .closeForm").on("click", function () {
  $("footer .formConsult").slideUp("150").removeClass("activeForm");


});

