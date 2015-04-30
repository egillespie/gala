var gala = (function() {

  var addButtons = function($gala) {
    var width = $gala.width();

    var $images = $gala.children("img");
    $images.css("left", 0);

    $gala.prev().click(function() {
      $images.css("left", "+=-"+width+"px");
    })

    $gala.next().click(function() {
      $images.css("left", "+="+width+"px");
    });
  };

  var create = function(gala) {
    var $gala = $(gala);
    var $images = $gala.find("img");
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
