var gala = (function() {

  var addButtons = function($gala) {
    $gala.prev().click(function() {
      $images = $gala.find("img");
      $images.show("slide", { direction: "left", distance: "150px" });
      //$images.css("left", -150);
    })

    $gala.next().click(function() {
      alert("clicked right");
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
