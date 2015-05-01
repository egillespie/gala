var gala = (function() {
  var LEFT = "<span class=\"fa fa-fw fa-backward gala-nav\"></span>";
  var RIGHT = "<span class=\"fa fa-fw fa-forward gala-nav\"></span>";

  var addButtons = function($gala) {
    var width = $gala.width() + "px";
    var height = $gala.height() + "px";

    var $images = $gala.children("img");
    $images.css("left", 0);

    $gala.before(LEFT).prev().click(function() {
      $images.css("left", "+=-"+width);
    }).css("line-height", height);

    $gala.after(RIGHT).next().click(function() {
      $images.css("left", "+="+width);
    }).css("line-height", height);
  };

  var create = function(gala) {
    var $gala = $(gala);
    var $images = $gala.children("img");

    addButtons($gala);
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
