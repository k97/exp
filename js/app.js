$(function(){
    $('#navTrigger').on('click',offCanvasNav);
});

function offCanvasNav(){
    var nav = $('nav'),
        navOffsetLeft = nav.offset().left,
        canvas = $('#offCanvas');
    if(navOffsetLeft != 0){
        canvas.addClass('offCanvasShow');
        nav.addClass('navShow');
    }
    else{
        canvas.removeClass('offCanvasShow');
        nav.removeClass('navShow');
    }

}