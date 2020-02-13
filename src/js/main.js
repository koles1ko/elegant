console.log(divide(4, 2));
console.log(divide(34, 2));

$(function () {

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // }); Для бургера!

  // $(".test").on('click', function(){
  //   $(".test").toggleClass(".active");
    
  // }); 

  // document.getElementById('test').onclick = function() {
  //   document.getElementById('test').classList.add('active');
  // }

  $("#test").click(function() {
    $("#test").removeClass("active");         
    $(this).toggleClass("active");
  })


    $('.gallery').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }); 
  //Обычный одиночный слайдер!

  //  $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // }); Двойной слайдер!


  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); Для табов!
  
  
 
});