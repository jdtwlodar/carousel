
$('#my-carousel').on('slid.bs.carousel', function () {
    var libottom = $('.carousel-indicators-bottom').find('li.active');
    if (libottom) {
        var i = libottom.index();
        $('.carousel-indicators-top li').removeClass("activetop");
        var litop = $('.carousel-indicators-top li')[i];
        litop.setAttribute("class", "activetop");
      }
})
