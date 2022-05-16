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



}); //ready
    
