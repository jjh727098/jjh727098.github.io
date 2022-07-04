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
        $('body').css({overflow:'hidden'});
        $('.header_search input').focus();
    });
    $('.search_close span').click(function(){
        $('.header_search').fadeOut().removeClass('active'); 
        $('.search_close').fadeOut().removeClass('active'); 
        $('body').css({overflow:'auto'});
    });

      /* -------------------------- hamburger --------------------------- */
    $('.top_links li:nth-child(3)').click(function(){
        $('.toggle').fadeIn().addClass('active'); 
        $('body').css({overflow:'hidden'});
    });
    $('.toggle div:nth-child(2) span').click(function(){
        $('.toggle').fadeOut().removeClass('active');
        $('body').css({overflow:'auto'});
    });
      /* -------------------------- login --------------------------- */
    // $('.login_input').click(function(){
    //     $(this).toggleClass('focus');
    // });

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


    /* -------------------------- count up --------------------------- */
    if($('.infomation_conuters').length){

    
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
}

    }); //scroll event

       /* -------------------------- slide --------------------------- */
    if($('.pager_slider').length){
        $('.pager_slider').bxSlider({
            controls:false,
            auto:true,
            autoHover:true
        });
    }

    if($('.slides').length){

    
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
        } else if (deviceWidth < 900){
            slideNum = 1;
            slideMargin = 30;
        }
        else if (deviceWidth < 1170) {
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

}
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

/*---------------------------- land -------------------------*/
if($('.landbg').length){

        $('[data-parallax]').parallax({
            datanaturalWidth:'auto',
            naturalHeight:'auto'
        });

}

/*---------------------------- popup -------------------------*/
let popup = $('.modal_box');
        let popupCheckBox = $('#intro_modal_close');
        let popupClose = popup.find('.intro_modal_close');


    
        // //쿠키 생성 함수
        // function setCookie(name,value,day){
        //     let date = new Date();
        //     date.setDate(date.getDate() + day);

        //     let cookieContent = '';
        //     cookieContent += `${name}=${value};`;
        //     cookieContent += `Expires=${date.toUTCString()}`;            

        //     $(document).cookie = cookieContent;
        // }
        

        // /*
        // 쿠키체크 
        //     쿠키 있다면 - 팝업이 안보인다.
        //     쿠키 없다면 - 팝업이 보인다.

        // 닫기 버큰을 클릭하면 할일
        //     하루안보기 체크안하고 닫으면 - 쿠키지운다.
        //     체크하고 닫으면 - 쿠키생성
        // */

        // //쿠키 확인 함수
        // function getCookie(name){
        //     let visited = false;
        //     let cookies = $(document).cookie.split(';'); //문자열 ; 구분해서 배열 생성

        //     for(let cookie of cookies){
        //         if(cookie.indexOf(name) > -1){
        //             visited = true;
        //         }
        //     }
        //     if(visited){
        //         popup.css({display:'none'}); //재방문
        //     }else{
        //         popup.css({display:'block'}); //첫방문, 안보기 체크안하고 닫기,
        //     }
        // }        
        // getCookie('ABC');

        // //쿠키 삭제 함수
        // function delCookie(name,value){           

        //     let date = new Date();
        //     date.setDate(date.getDate() - 1);

        //     let cookieContent = '';
        //     cookieContent += `${name}=${value};`;
        //     cookieContent += `Expires=${date.toUTCString()}`;            

        //     $(document).cookie = cookieContent;
        // }          
        

        popupClose.click(function(){
            popup.css({display:'none'});
            if(popupCheckBox.prop('checked',true)){ //체크되었다면, 팝업을 다시 안보겠다, 쿠키생성
                setCookie('ABC','Main Page',1);
            }else{//체크x, 팝업을 다시 보겠다, 쿠키제거
                delCookie('ABC','Main Page');
            }
        });
        

        
}); //ready
