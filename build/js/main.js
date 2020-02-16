// function divide(first, second) {
//   return first / second;
// }

// console.log(divide(4, 2));
// console.log(divide(34, 2));

$(function () {
  $(".burger").on('click', function () {
    $(".header__menu").toggleClass('active');
    $(".burger").toggleClass('active');

  }); 

  $(".header__menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  
  

});

new WOW().init();

//   console.log('hello');

//   $('.burger').on('click', function(){
//     console.log('hello');
//   });

// });
   // $('.menu__btn').on('click', function(){
   //   $('.menu__list').slideToggle();
   // }); Для бургера!

  // --------------------------------
  //  $(".test").on('click', function(){
  //    $(".test").toggleClass(".active");
    
  //  });  додбавление класса
// --------------------------------





  //   $('.gallery').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // }); 
  //Обычный одиночный слайдер!
// --------------------------------
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
// --------------------------------

  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // });
  // Для табов!
  
  
 
