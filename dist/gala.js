var gala = (function() {
  var displayFirstSlide = function($list, $imgs) {
    $imgs.first().show();
    $imgs.first().parent().show();
    $list.css("display", "inline-block");
  };

  var makeGala = function(element) {
    var $list = $(element);
    var $imgs = $list.find("img");
    if ($imgs.length > 0) {
      displayFirstSlide($list, $imgs);
    }
  };

  return {
    initialize: function() {
      $("ol.gala, ul.gala").each(function(index, element) {
        makeGala(element);
      });
    }
  }
})();

//$(document).ready(gala.initialize);
