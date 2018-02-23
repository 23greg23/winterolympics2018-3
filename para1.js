
var $ = jQuery;


$( document ).ready(function() {
    console.log( "ready! 3" );

    var screenHeight = $( window ).height();

    var screenWidth = $( window ).width();


		var ScrollMagic = bundleLib.run();
		var controller = new ScrollMagic.Controller();



var w = getW();
var wP = getWPer();

$(window).on('resize', function(){

  w = getW(screenWidth);
  wP = getWPer(screenWidth);
});


$(".pop-content").css("opacity", 0);


new ScrollMagic.Scene({
                  reverse: true,
                  offset: 0,
                  duration: "100%",
                  triggerElement: ".article-bg-image--big-image",
                  triggerHook: 0
                })
                .off("progress")
                .on("progress", function(e){
                  $(".article-bg-image--big-image").css('background-position-y', (e.progress * 200));
                })
                .addTo(controller);

$(".photo-quote-text").css('opacity', 0);
$('.photo-quote').each(function(){
  var thisPop = this;
  new ScrollMagic.Scene({
                    reverse: true,
                    offset: 0,
                    duration: "50%",
                    triggerElement: thisPop,
                    triggerHook: .5
                  })
                  .off("progress")
                  .on("progress", function(e){
                    $(thisPop).find(".photo-quote-text").css('opacity', e.progress);
                  })
                  .addTo(controller);

});

$('.photo-side').each(function(){

  var thisPop = this;
  var cbHeight = $(this).height() + screenHeight;



                  new ScrollMagic.Scene({
                                    reverse: true,
                                    offset: 0,
                                    duration: cbHeight,
                                    triggerElement: thisPop,
                                    triggerHook: .01
                                  })
                                  .off("progress")
                                  .on("progress", function(e){
                                    $(thisPop).css('background-position-y', (e.progress * 900));
                                  })
                                  .addTo(controller);
});



});
var getWPer = function() {
var screenWidth = $( window ).width();
  if (screenWidth < 600) {
   return 100;
  } else if (screenWidth < 800) {
    return 180;
  } else if (screenWidth < 1200) {
    return 200;
  } else {
    return 200;
  }
}

var getW =  function() {
  var w = 50;
  var screenWidth = $( window ).width();
    if (screenWidth < 600) {
     w = screenWidth/5;
    } else if (screenWidth < 800) {
      w = screenWidth/4;
    } else if (screenWidth < 1200) {
      w = screenWidth/12;
    } else {
      w = screenWidth/5;
    }
    return w;
};
