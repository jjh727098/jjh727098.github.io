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

    $('.slides').bxSlider({
		minSlides:1,
		maxSlides:3,
		moveSlides:1,
		slideWidth:200,
        slideMargin: 100,
		auto:true,
        pager:true,
        controls:true,
		autoHover:true,
		speed:500,
        easing:'linear',
        touchEnabled : false
	});

 /* ------------------------- land --------------------------- */


}); //ready
