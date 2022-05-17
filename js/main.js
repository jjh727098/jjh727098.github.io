$(function(){
    /* -------------------------- header --------------------------- */
    let $header = $('.page-header');
    let headerOst = $header.offset().top;

    let menu = $header.find('nav>ul>li'),
		headerHeight =  $header.outerHeight(),
		newHeight = 0,
		subMenu = menu.find('ul')
    
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        if(sct > headerOst){
            $header.addClass('active');
        }else{
            $header.removeClass('active');
        }
    });
/* -------------------------- slide --------------------------- */
    
    //     let slideWrapper = $('.Banner-slide-wrapper'),
    //     slides = slideWrapper.find('li'), 
    //     slideCount = slides.length,
    //     timer,
    //     currentIndex = 0;

    //     slides.eq(0).fadeIn();
    //     function autoSlide(){
    //         timer = setInterval(showNextSlide, 5000);
    // }
    
    // function showNextSlide(){
    //     let nextSlideIndex = (currentIndex + 1)%slideCount;
    //     slides.eq(currentIndex).fadeOut(); 
    //     slides.eq(nextSlideIndex).fadeIn();  
    //     currentIndex = nextSlideIndex; 
    // }
    // slideWrapper.mouseenter(function(){
    //     clearInterval(timer);
    // })
    // .mouseleave(function(){
    //     autoSlide();
    // });
    

}); //ready
    
