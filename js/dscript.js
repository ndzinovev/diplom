$(document).ready(function(){

  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});
  
  
    
    $('.owl-carousel').owlCarousel({
        margin:30,
        dots:true,
        navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right fa-2x" aria-hidden="true" ></i>'],
        nav:true,
        loop:true,
        dotsEach: 1,
        responsiveClass:true,
		    responsive:{
            310:{ items:1 },
            900:{ items:2 },
            1530:{ items:3 }
    }
    });

   
	var touch = $('.touch-menu');
  var nav = $('.hidden-nav-header');
  var wLine = $('<div class="line"></div>');
	$(touch).on('click',function(event){
		event.preventDefault();
		var title = $(this).attr('title'); 
		 if (nav.css('display')=='none') {
		 	$(this).attr('title','Скрыть меню');
		 	$(this).attr('aria-label','Скрыть меню');
      $('.touch-menu').empty();
      $('.touch-menu').append('<div class="cross"><i class="fa fa-times " aria-hidden="true"></i></div>');
      $(nav).show(400)
		 }
		 
		 else {
		 	$(this).attr('title','Открыть меню');
      $(this).attr('aria-label','Открыть меню');
      $('.touch-menu').empty();
      $('.touch-menu').append('<div class="line"></div>');
      $('.touch-menu').append('<div class="line"></div>');
      $(nav).hide(400);
		 }	
  });
  
  $('.nav-a-hidden').click(function(){
    $(nav).hide(300);
    $('.touch-menu').empty();
    $('.touch-menu').append('<div class="line"></div>');
    $('.touch-menu').append('<div class="line"></div>');
});

  $('.order_call , .hidden-call').click(function(event) {                //обработка заказа звонка
     $('.fon-popup , .feedback-bell').show(400, "swing");
     let pagePosition = window.scrollY;
     document.body.dataset.position = pagePosition;
  	 document.body.style.top = -pagePosition + 'px';
    $("body").addClass("fixed");
  }); 
  
  
  
  $('.cross').click(function(event){
      $('.fon-popup , .feedback-bell').hide(400, "swing");
      let pagePosition = parseInt(document.body.dataset.position, 10);
      $("body").removeClass('fixed') ;
      window.scroll({ top: pagePosition, left: 0 });
       
  });  

  $('.a-my-page , .a-maney').click(function(event) {  //обработка кнопки Узнать больше
    $('.fon-popup , .know-more');
        $('.fon-popup , .know-more').show(400, "swing");
        let pagePosition = window.scrollY;
        document.body.dataset.position = pagePosition;
  	    document.body.style.top = -pagePosition + 'px';
    $("body").addClass("fixed");
  });
   
  $('.hidden-call').click(function(event) {
        $('.fon-popup , .know-more').show(400, "swing");
        let pagePosition = window.scrollY;
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    $("body").addClass("fixed");
  }); 
  
  
  $('.cross').click(function(event){
    $('.fon-popup , .know-more').hide(400, "swing");
    let pagePosition = parseInt(document.body.dataset.position, 10);
    $("body").removeClass('fixed') ;
    window.scroll({ top: pagePosition, left: 0 });
    });  



  $('#usernumber').inputmask({"mask": "+7(999) 999-99-99"}); //маска телефона
  });


  $('.feedback-bell').each(function(){
    $(this).validate({                                   // валидация формы звонка
      errorPlacement: function(error, element) {
        return true;
      },
      rules: {
          username:{
            required: true,
            minlength: 2,
          },
          usernumber:{
            required: true,
            },
          check:{
            required: true,
          },
        }, 
      submitHandler(form) {
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'php/send.php',
          data: th.serialize(),
          
        }).done(() => {
          
          th.trigger('reset');
          $(".fon-popup").hide();
          $("body").removeClass("fixed");
         
         alert("Ваше сообщение успешно отправлено. Спасибо!")
          
        });

        return false;
      }
    });
  

    $('.know-more').each(function(){
      $(this).validate({                                   // валидация формы запроса
        errorPlacement: function(error, element) {
          return true;
        },
        rules: {
          usermail:{
            required: true,
            email: true, 
            },
            usermessage:{
              required: true,
              },
            check:{
              required: true,
            },
          }, 
        submitHandler(form) {
          let th = $(form);
  
          $.ajax({
            type: 'POST',
            url: 'php/quest.php',
            data: th.serialize(),
            
          }).done(() => {
            
            th.trigger('reset');
            $(".fon-popup").hide();
            $("body").removeClass("fixed");
           
           alert("Ваше сообщение успешно отправлено. Спасибо!")
            
          });
  
          return false;
        }
      });
}); 

})  // end document