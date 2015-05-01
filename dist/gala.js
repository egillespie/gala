var gala = (function() {
  var LEFT_BTN = "<span class=\"fa fa-fw fa-backward gala-nav\"></span>";
  var RIGHT_BTN = "<span class=\"fa fa-fw fa-forward gala-nav\"></span>";

  var addButtons = function($gala, $images) {
    var height = $gala.height() + "px";

    $images.css("left", 0); // First transition is ignored w/o this
    $gala.before(LEFT_BTN).prev().css("line-height", height).click(getOnClickLeft($gala, $images));
    $gala.after(RIGHT_BTN).next().css("line-height", height).click(getOnClickRight($gala, $images));

    resetButtonState($gala, 0, $images.length);
  };

  var create = function(gala) {
    var $gala = $(gala);
    var $images = $gala.children("img");

    if ($images.length > 1) {
      addButtons($gala, $images);
    }
  };

  var getOnClickLeft = function($gala, $images) {
    return function() {
      var width = $gala.width();
      var offset = parseInt($images.css("left"), 10);
      var totalImages = $images.length;
      if (offset % width != 0 || totalImages <= 1 || offset <= -(width * (totalImages-1))) {
        return;
      }
      $images.css("left", (offset-width)+"px");
      resetButtonState($gala, 1-offset/width, totalImages);
    };
  };

  var getOnClickRight = function($gala, $images) {
    return function() {
      var width = $gala.width();
      var offset = parseInt($images.css("left"), 10);
      var totalImages = $images.length;
      if (offset % width != 0 || totalImages <= 1 || offset >= 0) {
        return;
      }
      $images.css("left", (offset+width)+"px");
      resetButtonState($gala, -offset/width-1, totalImages);
    };
  };

  var resetButtonState = function($gala, currentImage, totalImages) {
    if (currentImage <= 0) {
      $gala.next().addClass("gala-disabled");
    } else {
      $gala.next().removeClass("gala-disabled");
    }

    if (currentImage >= totalImages-1) {
      $gala.prev().addClass("gala-disabled");
    } else {
      $gala.prev().removeClass("gala-disabled");
    }
  };

  return {
    initialize: function() {
      $(".gala").each(function(index, gala) {
        create(gala);
      });
    }
  }
})();

$(document).ready(gala.initialize);
