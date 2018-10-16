$('.send-message-menu').on("click",function() {
    console.log( );


    switch ($('.send-message-menu-but').attr('style')) {
        case 'display:block;':
            $('.send-message-menu-but').attr('style','display:none;');
            break;

        case 'display:none;':
            $('.send-message-menu-but').attr('style','display:block;');
            break;
    }

});

$('.send-message-trig-style').on("click",function() {
    console.log( );

    text = $('.send-message-input').val();

    sendMessageUser(text);
});

$('#restart').on("click",function() {


    Restart( );
});

$('.btn-width').on("click",function() {

    PressBtn($(this)  );
});

function sendMessageBot (text) {


    $('.messages-list').children().last().html();
    $('.messages-list').append("<li class='message clearfix'> <div class='media-body message-bot'> <div class='message-text' style='background: rgb(240, 239, 239);'> <p ><span >"+text+" </span> </p> <div class='message-tail'> <svg xmlns='http://www.w3.org/2000/svg'  xmlns:xlink='http://www.w3.org/1999/xlink' width='25' height='24'  viewBox='0 0 25 24'>  <g > <path   d='M19,2a11.921,11.921,0,0,1-6.86,7.5c-5.8,2.317-8.38,1.5-8.38,1.5l16,6' style='fill: rgb(240, 239, 239);'></path></g></svg></div></div> </div> ");
    $('.messages-wrapper').scrollTop($(document).height());
}

function sendMessageUser (text) {

    if (text !='') {
        $('.messages-list').append("<li  class='message clearfix'><div  class='media-body message-my'><!----> <div  class='message-text' style='background: rgb(245, 124, 0);'><p > "+text+" <span   class='emoji-mart-emoji' style='vertical-align: top; margin-right: 2px;'> </span></p> <div  class='message-tail'><svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='25' height='24' viewBox='0 0 25 24'><g ><path  d='M19,2a11.921,11.921,0,0,1-6.86,7.5c-5.8,2.317-8.38,1.5-8.38,1.5l16,6' style='fill: rgb(245, 124, 0);'></path></g></svg></div></div></div> </li> ");
        // $('.messages-list').append("<li  class='message clearfix'><div  class='media-body message-my'><!----> <div  class='message-text' style='background: rgb(245, 124, 0);'><p > "+text+" <span   class='emoji-mart-emoji' style='vertical-align: top; margin-right: 2px;'><span  style='display: inline-block; width: 18px; height: 18px; background-image: url(&quot;/img/icons/emoji-mart/sprite/32-min.png&quot;); background-size: 5200%; background-position: 7.84314% 37.2549%;'></span></span></p> <div  class='message-tail'><svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='25' height='24' viewBox='0 0 25 24'><g ><path  d='M19,2a11.921,11.921,0,0,1-6.86,7.5c-5.8,2.317-8.38,1.5-8.38,1.5l16,6' style='fill: rgb(245, 124, 0);'></path></g></svg></div></div></div> </li> ");

        $('.send-message-input').val('');

        $('.messages-wrapper').scrollTop($(document).height());
    }

}

function Restart () {

        $('.messages-list').html('');
         $('.messages-list').append("<li class='message clearfix'> <div class='media-body message-bot'> <div class='message-text' style='background: rgb(240, 239, 239);'> <p ><span >"+'Привет, давай определимся, чем я смогу быть полезен.'+" </span> </p> <div class='message-tail'> <svg xmlns='http://www.w3.org/2000/svg'  xmlns:xlink='http://www.w3.org/1999/xlink' width='25' height='24'  viewBox='0 0 25 24'>  <g > <path   d='M19,2a11.921,11.921,0,0,1-6.86,7.5c-5.8,2.317-8.38,1.5-8.38,1.5l16,6' style='fill: rgb(240, 239, 239);'></path></g></svg></div></div> </div>  ");
    
}

function Printing () {

     
      $('.messages-list').append("<li  class='message clearfix'><div  class='media-body message-bot'><!----> <div  class='message-text' style='background: rgb(240, 239, 239);'><div  class='loader ball-beat'><div ></div> <div ></div> <div ></div></div> <div  class='message-tail'><svg  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='25' height='24' viewBox='0 0 25 24'><g ><path  d='M19,2a11.921,11.921,0,0,1-6.86,7.5c-5.8,2.317-8.38,1.5-8.38,1.5l16,6' style='fill: rgb(240, 239, 239);'></path></g></svg></div></div></div> <!----> <!----></li>");

}

function PressBtn(li) {

    console.log(li);
    sendMessageUser(li.find('> a').text());

}

