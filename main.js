//navbar menu toggle
$(function(){
    $(".toggle").on("click",function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<i class='bx bx-menu' ></i>");
        }else{
            $(".menu").addClass("active");
            $(this).find("a").html("<i class='bx bx-x'></i>");
        }
    })
});


//---------------------sticky navbar---------
let header= document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
       nav:true,
       dots:false,
    //   autoplay:true,
    //   autoplayTimeout:3000,
    //   autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='bx bx-chevron-left-circle'></i>",
          "<i class='bx bx-chevron-right-circle'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });


  //-----------scroll reveal [animation]-------
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-text h1 ,.heading-1 ,.text', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-text p,.services-text i , .footer ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-text p, .guide', { origin: 'right' });
ScrollReveal().reveal('.range-box , .slider, .client', { origin: 'bottom' , interval:200});
