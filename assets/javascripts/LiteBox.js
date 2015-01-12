function LiteBox() {
  // console.log("LiteBox - Constructor");

  //PRIVATE VARS
  // var itemsList     = gallery.find("ul"),
  //     btnNext       = gallery.find(".next"),
  //     btnPrevious   = gallery.find(".previous"),
  //     galleryImage  = gallery.find(".gallery-image").find("img"),

  //     items         = itemsList.find("li"),
  //     images        = [],
  //     loadedImages  = [],
  //     params        = {
  //                       offset:             0,
  //                       totalItems:         0, 
  //                       itemWidth:          0,
  //                       totalWidth:         0,
  //                       visibleWidth:       0,
  //                       stopPosition:       0
  //                     };
      
      
  //PUBLIC PROPERTIES
  var public = {
    //PUBLIC VARS
    id:                   null,

    
    //PUBLIC METHODS
    open: function(content) {
      console.log("LiteBox - open()");
      $("body").append('<div id="overlay"><div id="overlay-content"></div></div>');

      $("#overlay").on("click", null, this.close, function(event) {
        // Close if clicked on background (#overlay)
        if ($(event.target).is($(this))) {
          event.data();
        } else {
          // console.log("do nothing");
        }
      });

      //position it correctly after downloading
      $("#overlay").css("display", "block");

      //add the content to the litebox
      $("#overlay-content").append(content);

      var contentWidth = $("#overlay-content").outerWidth();
      var contentHeight = $("#overlay-content").outerHeight();

      // console.log("contentWidth: " + contentWidth);
      // console.log("contentHeight: " + contentHeight);

      $("#overlay-content").css({      
        "top":   "calc(50% - " + (contentHeight / 2) + "px)",
        "left":  "calc(50% - " + (contentWidth / 2) + "px)" //to position it in the middle
      })
      

      //animate the semitransparant layer
      $("#overlay").animate({"opacity":"1"}, 400, "linear");

      /*
      Add back/next functionality
      */
      // btnNext.click(params, next);
      // btnPrevious.click(params, previous);
    }, 

    close: function() {
      $("#overlay").animate({"opacity":"0"}, 200, "linear", function(){
        $("#overlay").css("display", "none");
        $("#overlay").remove(); 
      });

      $('#overlay-content').css({
          '-webkit-transform': 'scale(.7)',
             '-moz-transform': 'scale(.7)',
               '-o-transform': 'scale(.7)',
                  'transform': 'scale(.7)'
      });
    }
  }

  //PRIVATE METHODS
  var configure = function() {
    console.log("LiteBox - loadCompleteHandler()");
  }

  var next = function(params) {
    console.log("LiteBox - next()");
    return false;
  }

  var previous = function(params) {
    console.log("LiteBox - previous()");
    return false;
  }

  //RETURN PUBLIC PROPERTIES
  return public;
}