var gala = (function() {
  var displayFirstSlide = function($list, $items) {
    $items.each(function(index, element) {
      if (index === 0) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
    $list.show();
  };

  var makeGala = function(element) {
    var $list = $(element);
    var $items = $list.children("li");
    if ($items.length > 0) {
      displayFirstSlide($list, $items);
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

$(document).ready(gala.initialize);
