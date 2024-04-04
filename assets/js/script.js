
$(window.scroll(function)){
    if (($"#menu").offset().top> 900){
      $("#menu").addClass("bg-black");
    } else{
      $("#menu").removeClass("bg-black")
    }
}