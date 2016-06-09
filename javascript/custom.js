$(document).ready(function() {
  $("body").on("mouseenter",  ".wine-selection" ,function(){
      $(this).addClass('hoverBox');
      $(this).find(".img-circle").addClass("hoverImg")
    });
    $("body").on("mouseleave",  ".wine-selection" ,function(){
      $(this).removeClass('hoverBox');
      $(this).find(".img-circle").removeClass("hoverImg")
    });

  })