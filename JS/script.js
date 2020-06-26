$(function(){

    jQuery(".js-drawer").on("click", function(e) {
        　e.preventDefault();
        　let targetClass = jQuery(this).attr("data-target");
        　jQuery("." + targetClass).toggleClass("is-checked");
        　return false;
    　});
    
    $('.question').click(function(){
        var $answer = $(this).find('.answer-wrapper');
        if($answer.hasClass('open')){
            $answer.removeClass('open');
    
            $answer.slideUp();
            $(this).find('.plus').html('<img src="img/plus.png" alt="plus">');
    
        }else{
            $answer.addClass('open');
    
            $answer.slideDown();
            $(this).find('.plus').html('<img src="img/minus.png" alt="plus">');
    
        }
    });
    
    // トップボタン
    jQuery(window).on("scroll", function($) {
        if (jQuery(this).scrollTop() > 100) {
          jQuery('.floating').show();
        } else {
          jQuery('.floating').hide();
        }
      });
      
      jQuery('.floating').click(function () {
        jQuery('body,html').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
    
    });


    // ''ページ内リンク
    $('header a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;

      $('html, body').animate({
        'scrollTop':position
      },500);
    })

    $('.drawer-content a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top-50;

      $('html, body').animate({
        'scrollTop':position
      },500);
    })