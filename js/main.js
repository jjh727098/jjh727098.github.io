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

    $('nav ul:nth-child(1) li').hover(
        function(){		
            $header.stop().animate({height:newHeight});
        },
        function(){
            $header.stop().animate({height:headerHeight});
        }
    );
    

      /* -------------------------- search --------------------------- */
    $('.top_links > li:nth-child(2)').click(function(){
        $('.header_search').toggleClass('active'); 
        $('.top_links > li:nth-child(2) a svg').toggleClass('active'); 
        $('.top_links li:nth-child(2) span').toggleClass('active');
    });


      /* -------------------------- hamburger --------------------------- */
    $('.top_links li:nth-child(3)').click(function(){
        $('.toggle').fadeIn().addClass('active'); 
    });
    $('.toggle div:nth-child(2) span').click(function(){
        $('.toggle').fadeOut().removeClass('active'); 
    });

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

 /* ------------------------- land --------------------------- */

 $('.landbg').parallax({imageSrc: '/banner_slide/hotel.png'});
    


}); //ready
