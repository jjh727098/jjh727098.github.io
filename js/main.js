$(function(){
    /* -------------------------- header scroll --------------------------- */
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

    subMenu.each(function(){
		if($(this).outerHeight()>newHeight){
			newHeight = headerHeight + $(this).outerHeight();
		}
    });

    menu.hover(
        function(){		
            $header.stop().animate({height:newHeight});
        },
        function(){
            $header.stop().animate({height:headerHeight});
        }
    );

    /* -------------------------- scroll event animation --------------------------- */
    let animateTarget = document.querySelectorAll('[data-effect]');

    window.addEventListener('scroll', function(){
        let sct = window.scrollY;
        
        animateTarget.forEach(function(item,index){
            let targetOst = item.offsetTop - 600;
    
            if(sct>targetOst){                
                let targetClass = item.getAttribute('data-effect');
                item.classList.add(targetClass);  
            }
        });     
    });


/* -------------------------- scroll event number --------------------------- */
let counters = document.querySelector('.infomation_conuters');
let counterNums = counters.querySelectorAll('.counter_list h3');

//counters가 화면 상단에서 떨어진 거리를 변수 courtersOST에 저장, 콘솔에서 확인
let courtersOST = counters.offsetTop - 700;
//윈도우에 스크롤이 생기면 그 양을 변수 winSCT에 저장, winSCT의 값이 courtersOST보다 크다면 할일
let excuted = false;


    window.addEventListener('scroll',()=>{
        let winSCT = window.scrollY;
    
        if(winSCT>courtersOST){
            if(!excuted){
                counterNums.forEach(item=>{
                    let targetNum = item.getAttribute('data-target');
                    let speed = 30;
                    let add = 5;
    
                    if(targetNum > 900){
                        speed = 5;
                        add = 2;
                    }
                    if(targetNum > 2000){
                        speed = 1;
                        add = 5;
                    }
                    let num = 0;
                    
                        let numAnime = setInterval(()=>{
                            num += add;                       
    
                            if(num == targetNum || num > targetNum){
                                num = targetNum;
                                clearInterval(numAnime);
                            }
                            item.innerText =  num;
                            
                        }, speed);                 
                    
                });
                excuted = true;
            }
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
    

	$('.pager_slider').bxSlider({
		controls:false,
        auto:true,
        autoHover:true,
        autoControls:true
	});

    $('.slides').bxSlider({
		minSlides:1,
		maxSlides:3,
		moveSlides:1,
		slideWidth:300,
		auto:true,
        pager:true,
		controls:true,
		autoHover:true,
		speed:1000,
		easing:'linear'
	});

}); //ready
