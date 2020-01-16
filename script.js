// BURGER AND MENU

const burger = document.querySelector('.burger');

const burgerIcon = document.querySelector('.fa-bars');
const UPIcon = document.querySelector('.fa-chevron-up');
const navigation = document.querySelector('nav');

burger.addEventListener("click", function(){
    burgerIcon.classList.toggle("active");
    UPIcon.classList.toggle("active");
    navigation.classList.toggle("active");
})

// NAVIGATION

$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
     scrollTop: $(goToSection).offset().top
    },800)
   })

// SLIDER

onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%3)+1; // 3 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,7000); //change img in 7 sec
}


$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);
  
  
    //ABOUT ME
    const $h2 = $('.aboutMe h2');
    const h2FromTop = $h2.offset().top
    // console.log(art2FromTop);
    const h2Height = $h2.outerHeight()
    // console.log(art2Height);
  
  
    if (scrollValue > h2FromTop + h2Height - windowHeight) {
      $h2.addClass('show');
    }

     //description
     const $phar = $('.aboutMe p');
     const pharFromTop = $phar.offset().top
     // console.log(art2FromTop);
     const pharHeight = $phar.outerHeight()
     // console.log(art2Height);
   
   
     if (scrollValue > pharFromTop + pharHeight - windowHeight) {
       $phar.addClass('show');
     }

     //h2 methods
     const $h2m = $('.myMethods h2');
     const h2mFromTop = $h2m.offset().top
     // console.log(art2FromTop);
     const h2mHeight = $h2m.outerHeight()
     // console.log(art2Height);
   
   
     if (scrollValue > h2mFromTop + h2mHeight - windowHeight) {
       $h2m.addClass('show');
     }


     //methods
     const $methods = $('.myMethods li');
     const methodsFromTop = $methods.offset().top
     // console.log(art2FromTop);
     const methodsHeight = $methods.outerHeight()
     // console.log(art2Height);
   
   
     if (scrollValue > methodsFromTop + methodsHeight - windowHeight) {
       $methods.addClass('show');
     }

     //Price
     const $titlePrice = $('.myPrice .title');
     const titlePriceFromTop = $titlePrice.offset().top
     // console.log(art2FromTop);
     const titlePriceHeight = $titlePrice.outerHeight()
     // console.log(art2Height);
   
   
     if (scrollValue > titlePriceFromTop + titlePriceHeight - windowHeight) {
       $titlePrice.addClass('show');
     }
  
  
    //Czyściciel
    if (scrollValue < 100) {
      $('.aboutMe').removeClass('show');
    }
  })