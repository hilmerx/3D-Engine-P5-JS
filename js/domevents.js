$('#pause').hide()
$('.opacity-layer').hide()
$(".progress").hide();

$(".percent").hide();


$('.playpause').click(function(){





    if (sound.isPlaying()) {
      $("#play").toggle();

      $("#pause").toggle();


    sound.stop();
    shockWaveOn =false;
    startProjZ+=20

    speed = 5

    makeBgImage(180,180,180)


    $( "#menu" ).animate({
    left: "+=600",
    }, 400, function() {
    });
    $( "#text2" ).animate({
    left: "+=600",
    }, 400, function() {
    });
    $( "#text3" ).animate({
    top: "+=600",
    }, 400, function() {
    });
    $( ".mainbox" ).animate({
    top: "+=2000",
    }, 400, function() {
    })
    // ;$( ".opacity-layer" ).animate({
    // // top: "+=600",
    // opacity: "+=0.2"
    // }, 400, function() {
    // });



  } else {
    startPlay()
  }
});

function startPlay(){
  if(loadedSound){
    $("#play").toggle();

    $("#pause").toggle();

    sound.loop(0);
    shockWaveOn =true;

    speed = 50
    startProjZ+=20

    makeBgImage(140,85,85)


    $( "#menu" ).animate({
    left: "-=600",
    }, 400, function() {
    });
    $( "#text2" ).animate({
    left: "-=600",
    }, 400, function() {
    });
    $( "#text3" ).animate({
    top: "-=600",
    }, 400, function() {
    });
    $( ".mainbox" ).animate({
    top: "-=2000",
    }, 400, function() {
    });
  }else{
    startPlayAtLoad=true
    $(".progress").toggle();
    $(".percent").toggle();


  }

}
