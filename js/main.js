$(function(){
    /* -------------------------- header scroll --------------------------- */
    let $header = $('.page-header');
    let headerOst = $header.offset().top;

    let menu = $header.find('nav>ul>li'),
		headerHeight =  $header.outerHeight(),
		newHeight = 0,
		subMenu = menu.find('ul')

        let btt = $('#go-top');
    
        $(window).scroll(function(){
            if($(this).scrollTop() > 1200){
                btt.fadeIn();
            }else{
                btt.fadeOut();
            }
        });
        btt.click(function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop:0},500);
        });
        
    
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

    $('nav ul:nth-child(1)').hover(
        function(){		
            $header.stop().animate({height:newHeight});
        },
        function(){
            $header.stop().animate({height:headerHeight});
        }
    );
    

      /* -------------------------- search --------------------------- */
    $('.top_links li:nth-child(2)').click(function(){
        $('.header_search').fadeIn().addClass('active'); 
        $('.search_close').fadeIn().addClass('active'); 
    });
    $('.search_close span').click(function(){
        $('.header_search').fadeOut().removeClass('active'); 
        $('.search_close').fadeOut().removeClass('active'); 
    });

      /* -------------------------- hamburger --------------------------- */
    $('.top_links li:nth-child(3)').click(function(){
        $('.toggle').fadeIn().addClass('active'); 
    });
    $('.toggle div:nth-child(2) span').click(function(){
        $('.toggle').fadeOut().removeClass('active'); 
    });

    /* -------------------------- scroll event animation --------------------------- */

    let animateTarget = $('.animate__animated[data-effect]');
    let excuted = false;

        $(window).scroll(function(){
        let sct = $(this).scrollTop();

        animateTarget.each(function(){
        let targetOst = $(this).offset().top - 800;


        if(sct>targetOst){
        let targetClass = $(this).attr('data-effect');
        $(this).addClass(targetClass);
        }
        });


    let winSCT = $(window).scrollTop();
    let counters = $('.infomation_conuters');
    let counterNums = counters.find('.counter_list h3');
    let courtersOST = counters.offset().top - 700;

    if(winSCT>courtersOST){
        if(!excuted){
            counterNums.each(function(){
                let targetNum = $(this).attr('data-target');
                let speed = 1;
                let add = 5;

                if(targetNum > 900){
                    speed = 1;
                    add = 5;
                }
                if(targetNum > 2000){
                    speed = 1;
                    add = 5;
                }
                if(targetNum > 10000){
                    speed = 1;
                    add = 100;
                }
                let num = 0;
                
                    let numAnime = setInterval(()=>{
                        num += add;                       

                        if(num == targetNum || num > targetNum){
                            num = targetNum;
                            clearInterval(numAnime);
                        }
                        $(this).text(num);
                        
                    }, speed);                 
                
            });
            excuted = true;
        }
    }

    }); //scroll event

       /* -------------------------- count up --------------------------- */

    $('.pager_slider').bxSlider({
		controls:false,
        auto:true,
        autoHover:true
	});

    let $slider;

    function buildSliderConfiguration() {

        let deviceWidth = $(window).width();
        
        /* 반응형으로 설정할 옵션 정의 */
        let slideNum;
        let slideMargin;
    
        /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
        if (deviceWidth < 480) {
            slideNum = 1;
            slideMargin = 30;
        } else if (deviceWidth < 768) {
            slideNum = 1;
            slideMargin = 30;
        } else if (deviceWidth < 1170) {
            slideNum = 2;
            slideMargin = 30;
        } else {
            slideNum = 3;
            slideMargin = 30;
        }
    
        return {
            slideWidth: 270,
            autoControls: false,
            auto: true,
            autoHover: true,
            adaptiveHeight: true,
            pager: true,
            moveSlides: 1,
            slideMargin: slideMargin, 
            minSlides: slideNum,  
            maxSlides: slideNum,
            responsive: true  ,  
            touchEnabled: false
        };
    }
    
    function configureSlider() {
        var config = buildSliderConfiguration();
    
        if ($slider && $slider.reloadSlider) {
            $slider.reloadSlider(config);
        } else {
            $slider = $('.slides').bxSlider(config);  /* 슬라이더 클래스 또는 아이디 입력 */
        }
    }

    $(window).on("orientationchange resize", configureSlider);
    configureSlider();
    // $('.slides').bxSlider({
	// 	minSlides:1,
	// 	maxSlides:3,
	// 	moveSlides:1,
	// 	slideWidth:270,
    //     slideMargin: 30,
	// 	auto:true,
    //     pager:true,
    //     controls:true,
	// 	autoHover:true,
	// 	speed:500,
    //     easing:'linear',
    //     touchEnabled : false,
    //     responsive: true
	// });

 /* ------------------------- land --------------------------- */


}); //ready
