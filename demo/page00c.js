var swiper = null;

var isLandscape1 = true;


window.onload = (function () {


  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  

  var text_total1 = document.getElementsByClassName('swiper-slide').length;  
  
  var delay1 = 12000;

  if (document.getElementsByClassName("swiper-slide").length == 1)
  {
    delay1 = 0;
  }

  swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    mousewheel: true,
    
    direction: "vertical",    
    slidesPerView: "auto",
    
    autoHeight: false,
    
    autoplay: {
      delay: delay1,
      disableOnInteraction: false,

    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
      progressbarOpposite: false,
    },

    zoom: {
      maxRatio: 1.1,
      minRatio: 0.3,
    },

    /*
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    */

    on: {
        autoplayTimeLeft(s, time, progress) {

        if (time <0) time = 0;

        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}`;
        

      },
      
    }


  });


  document.swiper1 = swiper;

  if (document.getElementsByClassName("swiper-slide").length == 1)
  {
    swiper.autoplay = false;
  }


  var zoom1 = 100;
  
  // Custom Events - numpad +- Zoom
  /*
  document.addEventListener("mousewheel", function(e){ func_mouseWheelZoom(e); });

  function func_mouseWheelZoom(e)
  {
    console.log(e.deltaY);
  }
  */


  // Custom Events - Button Zoom
  $("#control_plus1").on('click', function(){
    //var scale1 = swiper.zoom.scale + .1;    
    //swiper.zoom.in(scale1);

    zoom1 += 10;
    $(".swiper-zoom-container")[swiper.realIndex]
    .style.setProperty("zoom", zoom1 + "%");

    swiper.autoplay.start();
    swiper.update();
    swiper.autoplay.pause();
  });

  $("#control_minus1").on('click', function(){

    zoom1 -= 10;
    $(".swiper-zoom-container")[swiper.realIndex]
    .style.setProperty("zoom", zoom1 + "%");


    swiper.autoplay.start();
    swiper.update();
    swiper.autoplay.pause();
  });

  $("#control_all1").on('click', function(){

    zoom1 = 100;
    $(".swiper-zoom-container")[swiper.realIndex]
    .style.setProperty("zoom", zoom1 + "%");
      

    swiper.autoplay.start();
    swiper.update();
    swiper.autoplay.pause();


    // control left0b
    left0b = window.parent.document.getElementsByClassName('left0b')[0];

    if (window.getComputedStyle(left0b).width == "0px")
    {
      left0b.style.width = "22rem";
      left0b.style.opacity = 1;
      //left0b.style.display = 'block';

      //
      try
      { $("#control_all1")[0].classList.remove("bx-collapse"); }
      finally{}

      $("#control_all1")[0].classList.add("bx-expand");
    }
        
    else if (window.getComputedStyle(left0b).width == "22rem" 
      || !left0b.style.display)
    {
      left0b.style.width = "0px";
      left0b.style.opacity = 0;
      //left0b.style.display = 'none';
          
      //
      try
      { $("#control_all1")[0].classList.remove("bx-expand"); }
      finally{}

      $("#control_all1")[0].classList.add("bx-collapse");
    }
        


  });



  // Custom Events - Button Playback
  $("#control_up1").on('click', function(){
    swiper.slidePrev(0, true);
    swiper.autoplay.resume();
  });

  $("#control_down1").on('click', function(){
    swiper.slideNext(0, true);
    swiper.autoplay.resume();
  });


  $("#control_pause1").on('click', function(){
    func_togglePause();
  });



  // Custom Events - Button Rotate
  $("#control_rotate1").on('click', function(){
    func_toggleRotate();    
  });


  // Get Initialized Rotation
  if (window.parent.document.isLandscape1 == false)
    func_toggleRotate();


  // Custom Events - Swiper
  swiper.on('click', function () {
    func_togglePause();
    

  });

  swiper.on('slideChange', function() {
    
    zoom1 = 100;
    $(".swiper-zoom-container")[swiper.realIndex].style.setProperty("zoom", zoom1 + "%");

    //swiper.zoom.zoomedSlideClass = 'swiper-slide-zoomed';
    //swiper.zoom.in(1);
    isPaused1 = false;
    
    text_steps1.innerText = this.realIndex+1 + " / " + text_total1;
    //
    try
    { $("#control_pause1")[0].classList.remove("bx-play-circle"); }
    finally{}

    $("#control_pause1")[0].classList.add("bx-pause-circle");
  });


  swiper.on('slidesUpdated', function()
  { 
        
    text_steps1.innerText = this.realIndex+1 + " / " + text_total1;
    text_steps1.style.color = "#707070";

    //
    var controller = document.getElementsByClassName('controller');
    try
    {
      Array.prototype.forEach.call(controller, control => 
        {     
          control.style.color = "#707070";
        });
        
    }finally{}

    //

  });


  // make sure update fired at the end to update icon colors
  swiper.update();
}); 


function func_toggleRotate()
{
  var demo_intro = document.getElementsByClassName('demo_intro');


  // 1. Switch States & Icon
  if (isLandscape1 == true) 
  {
    try
    { $("#control_rotate1")[0].classList.remove("bx-mobile-landscape"); }
    finally{}

    $("#control_rotate1")[0].classList.add("bxs-mobile");

    try
    {
      Array.prototype.forEach.call(demo_intro, div => 
        {     
          div.classList.add('rotated-div');
        });
        
    }finally{}

    swiper.zoom.disable();
    window.parent.document.isLandscape1 = false;
  }
  else  
  {
    try
    { $("#control_rotate1")[0].classList.remove("bxs-mobile"); }
    finally{}

    $("#control_rotate1")[0].classList.add("bx-mobile-landscape");


    try
    {
      Array.prototype.forEach.call(demo_intro, div => 
        {     
          div.classList.remove('rotated-div');
        });
        
    }finally{}

    swiper.zoom.enable();
    window.parent.document.isLandscape1 = true;
  }

  isLandscape1 = !isLandscape1;
  
}

  
function func_togglePause()
{

  // 1. Switch States & Icon
  if (swiper.autoplay.paused) 
  {
    swiper.autoplay.resume();

    try
    { $("#control_pause1")[0].classList.remove("bx-play-circle"); }
    finally{}

    $("#control_pause1")[0].classList.add("bx-pause-circle");
  }
  else  
  {
    swiper.autoplay.pause();

    try
    { $("#control_pause1")[0].classList.remove("bx-pause-circle"); }
    finally{}
    $("#control_pause1")[0].classList.add("bx-play-circle");


  }
}



var startX1 = null; var endX1 = null;
var startY1 = null; var endY1 = null;
var startTime1 = null;

document.addEventListener("touchstart", function(e)
{ 
  
  if (e.touches.length == 1)
    startTime1 = Date.now();

  if (Number(Date.now() -  startTime1) || startTime1 == null)
  {
    startX1 = startY1 = endX1 = endY1 = null;
    startTime1 = null;
    return;
  }
    

  startX1 = e.touches[0].clientX;
  startY1 = e.touches[0].clientY;
} )

document.addEventListener("touchend", function(e){ func_slideCheck(e) } )

function func_slideCheck(e)
{
  if (Number(Date.now() -  startTime1) < 100 || startX1 == null)
    return;

  var left0b = this.top.document.getElementsByClassName('left0b')[0];

  
  endX1 = e.changedTouches[0].clientX;
  endY1 = e.changedTouches[0].clientY;

  if (Math.abs(endY1 - startY1) > Math.abs(endX1 - startX1))
    return;

  if (endX1 - startX1 > 30)
  {
    if (window.getComputedStyle(left0b).width == "0px")
    {
        left0b.style.width = "22rem";
        left0b.style.opacity = 1;
        
    }
        
  }
}