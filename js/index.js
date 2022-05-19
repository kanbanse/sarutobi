$(function(){
    var win_width=$(window).width();
    if(win_width>1024){
        // $('.top_menu nav ul li')
   
     
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay:{
            delay:4000
        },
        effect:'fade',
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
      });

      var slide_width=$('.swiper-scrollbar').width()/$('.mySwiper2 .swiper-slide').length;
      $('.util .swiper-scrollbar .progress').css('width',slide_width);

      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        pagination: {
            el: '.swiper-scrollbar',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
               var pct = (current-1) * slide_width ;
               $('.swiper-scrollbar .progress').css('margin-left',pct);
            }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
    });
    var swt=0
    $('.tab_menu a').click(function(e){
      e.preventDefault();
      if(swt==false){
        swt=true
        $(this).siblings('ul').slideDown();
        $(this).siblings('.triangle').addClass('active')
      }else{
        swt=false
        $(this).siblings('ul').slideUp();
        $(this).siblings('.triangle').removeClass('active')
      }
    });

        
      var nunu=0
      $('.tab_menu ul li').mousedown(function(e){
        e.preventDefault();    
        $('.tab_menu ul li').removeClass('active')
        $(this).addClass('active');  
        // $(this).addClass('active');
        nunu=$(this).index();
         $('.sec4_wide_page > div').each(function(){
           if(nunu==$(this).index()){
             $('.sec4_page').hide();
             $(this).fadeIn();
           }
         })
      })

      var bbg=0
      $('.sec5_nav ul li .okw li').show();
      $('.sec5_nav .centerbox ul li').click(function(e){
        e.preventDefault();
        $('a').removeClass('active')
        $(this).find('a').addClass('active')
        // bbg=$(this).index();
        $('.okw li').hide();
        $(this).find('.okw li').fadeIn();
      });

      $('#sec7_ul li').hover(function(){
        $(this).find('.s7_tg').addClass('active');
      },function(){
        $('.s7_tg').removeClass('active');
      });

      


      var sw1=0
      var sw2=0
      var sw3=0
      var sw4=0
      var sw5=0
      var sw6=0
      var sw7=0
  $('.left_nav nav > ul > li:first-child').click(function(){
    $('.depth').hide()
    if(sw1==false){
      sw1=true;
      sw2=false;
      sw3=false;
      sw4=false;
      sw5=false;
      sw6=false;
      sw7=false;
      $('.dd1').stop().fadeIn(150);
    }else{
      sw1=false;
      $('.dd1').stop().hide();
    }  
  })
  $('.left_nav nav > ul > li:nth-child(2)').click(function(){
    $('.depth').hide()
    if(sw2==false){
      sw2=true;
      sw1=false
      sw3=false;
      sw4=false;
      sw5=false;
      sw6=false;
      sw7=false;
      sw1,sw3,sw3,sw4,sw5,sw6,sw7=false;
      $('.dd2').fadeIn(150);
    }else{
      sw2=false;
      $('.dd2').hide();
    }
  })
  $('.left_nav nav > ul > li:nth-child(3)').click(function(){
    $('.depth').hide()
    if(sw3==false){
      sw3=true;
      sw1=false
      sw2=false;
      sw4=false;
      sw5=false;
      sw6=false;
      sw7=false;
      $('.dd3').fadeIn(150);
    }else{
      sw3=false;
      $('.dd3').hide();
    }
  })
  $('.left_nav nav > ul > li:nth-child(4)').click(function(){
    $('.depth').hide()
    if(sw4==false){
      sw4=true;
      sw1=false
      sw2=false;
      sw3=false;
      sw5=false;
      sw6=false;
      sw7=false;
      $('.dd4').fadeIn(150);
    }else{
      sw4=false;
      $('.dd4').hide();
    }
  })
  $('.left_nav nav > ul > li:nth-child(5)').click(function(){
    $('.depth').hide()
    if(sw5==false){
      sw5=true;
      sw1=false
      sw2=false;
      sw3=false;
      sw4=false;
      sw6=false;
      sw7=false;
      $('.dd5').fadeIn(150);
    }else{
      sw5=false;
      $('.dd5').hide();
    }
  })
  $('.left_nav nav > ul > li:nth-child(6)').click(function(){
    $('.depth').hide()
    if(sw6==false){
      sw6=true;
      sw1=false
      sw2=false;
      sw3=false;
      sw4=false;
      sw5=false;
      sw7=false;
      $('.dd6').fadeIn(150);
    }else{
      sw6=false;
      $('.dd6').hide();
    }   
  })
  $('.left_nav nav > ul > li:last-child').click(function(){
    $('.depth').hide()
    if(sw7==false){
      sw7=true;
      sw1=false;
      sw2=false;
      sw3=false;
      sw4=false;
      sw5=false;
      sw6=false;
      $('.dd7').fadeIn(150);
    }else{
      sw7=false;
      $('.dd7').hide();
    }
  });
  // var numm=0
  // $('.left_nav >ul >li').click(function(){
  //   $(this).find('.depth');
  //   numm++
  // })
  $('.swiper-slide').on('mouseenter',function(){
    var $child=$(this).find('a');
    var duration=0.5;
    var delay=0.1;

    TweenMax.to($child, duration,{
      scaleY:2.1,ease:Expo.easeOut
    });
    TweenMax.to($child, duration,{
      scaleX:2.1, scaleY:1.5, sase:Back.easeOut, easeParams:[3], delay:delay
    });
    TweenMax.to($child, duration*1.25,{
      scaleX:1, scaleY:1, sase:Back.easeOut, easeParams:[6], delay:delay*3
    })
  })
}else{
  $('.mb_main_menu nav > ul > li').click(function(){
    // attr 클릭한 메뉴의 클라스 속성 
    if($(this).attr('class')!='active'){
      $('.mb_main_menu nav >ul >li').removeClass('active');
      $(this).addClass('active');
      $('.mb_main_menu nav >ul >li ul').stop().slideUp();
      $(this).find('ul').stop().slideDown();

    }else{
      $(this).removeClass('active')
      $(this).find('ul').stop().slideUp()

    }
  });
  $('.mb_ham').click(function(){
    $('.mb_nav').animate({
      right:0
    });
    $('.mb_main_menu nav ul li ul').hide();

  });
  $('.mb_close_btn').click(function(){
    $('.mb_nav').animate({
      right:'-100%'
    });
  });
  $('a').click(function(e){
    e.preventDefault();
  })
  var bbg=0
  $('.sec5_nav ul li .okw li').show();
  $('.sec5_nav .centerbox ul li').click(function(e){
    e.preventDefault();
    $('a').removeClass('active')
    $(this).find('a').addClass('active')
    // bbg=$(this).index();
    $('.okw li').hide();
    $(this).find('.okw li').fadeIn();
  });

  $('#sec7_ul li').hover(function(){
    $(this).find('.s7_tg').addClass('active');
  },function(){
    $('.s7_tg').removeClass('active');
  });

  


  var sw1=0
  var sw2=0
  var sw3=0
  var sw4=0
  var sw5=0
  var sw6=0
  var sw7=0
$('.left_nav nav > ul > li:first-child').click(function(){
$('.depth').hide()
if(sw1==false){
  sw1=true;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  sw6=false;
  sw7=false;
  $('.dd1').stop().fadeIn(150);
}else{
  sw1=false;
  $('.dd1').stop().hide();
}  
})
$('.left_nav nav > ul > li:nth-child(2)').click(function(){
$('.depth').hide()
if(sw2==false){
  sw2=true;
  sw1=false
  sw3=false;
  sw4=false;
  sw5=false;
  sw6=false;
  sw7=false;
  sw1,sw3,sw3,sw4,sw5,sw6,sw7=false;
  $('.dd2').fadeIn(150);
}else{
  sw2=false;
  $('.dd2').hide();
}
})
$('.left_nav nav > ul > li:nth-child(3)').click(function(){
$('.depth').hide()
if(sw3==false){
  sw3=true;
  sw1=false
  sw2=false;
  sw4=false;
  sw5=false;
  sw6=false;
  sw7=false;
  $('.dd3').fadeIn(150);
}else{
  sw3=false;
  $('.dd3').hide();
}
})
$('.left_nav nav > ul > li:nth-child(4)').click(function(){
$('.depth').hide()
if(sw4==false){
  sw4=true;
  sw1=false
  sw2=false;
  sw3=false;
  sw5=false;
  sw6=false;
  sw7=false;
  $('.dd4').fadeIn(150);
}else{
  sw4=false;
  $('.dd4').hide();
}
})
$('.left_nav nav > ul > li:nth-child(5)').click(function(){
$('.depth').hide()
if(sw5==false){
  sw5=true;
  sw1=false
  sw2=false;
  sw3=false;
  sw4=false;
  sw6=false;
  sw7=false;
  $('.dd5').fadeIn(150);
}else{
  sw5=false;
  $('.dd5').hide();
}
})
$('.left_nav nav > ul > li:nth-child(6)').click(function(){
$('.depth').hide()
if(sw6==false){
  sw6=true;
  sw1=false
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  sw7=false;
  $('.dd6').fadeIn(150);
}else{
  sw6=false;
  $('.dd6').hide();
}   
})
$('.left_nav nav > ul > li:last-child').click(function(){
$('.depth').hide()
if(sw7==false){
  sw7=true;
  sw1=false;
  sw2=false;
  sw3=false;
  sw4=false;
  sw5=false;
  sw6=false;
  $('.dd7').fadeIn(150);
}else{
  sw7=false;
  $('.dd7').hide();
}
});
var swt=0
$('.tab_menu a').click(function(e){
  e.preventDefault();
  if(swt==false){
    swt=true
    $(this).siblings('ul').slideDown();
    $(this).siblings('.triangle').addClass('active')
  }else{
    swt=false
    $(this).siblings('ul').slideUp();
    $(this).siblings('.triangle').removeClass('active')
  }
});
var swiper = new Swiper(".mySwiper", {
  loop:true,
  autoplay:{
      delay:4000
  },
  effect:'fade',
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
});

var slide_width=$('.swiper-scrollbar').width()/$('.mySwiper2 .swiper-slide').length;
$('.util .swiper-scrollbar .progress').css('width',slide_width);

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  pagination: {
      el: '.swiper-scrollbar',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
         var pct = (current-1) * slide_width ;
         $('.swiper-scrollbar .progress').css('margin-left',pct);
      }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
var nunu=0
$('.tab_menu ul li').mousedown(function(e){
  e.preventDefault();    
  $('.tab_menu ul li').removeClass('active')
  $(this).addClass('active');  
  // $(this).addClass('active');
  nunu=$(this).index();
   $('.sec4_wide_page > div').each(function(){
     if(nunu==$(this).index()){
       $('.sec4_page').hide();
       $(this).fadeIn();
     }
   })
})

var bbg=0
$('.sec5_nav ul li .okw li').show();
$('.sec5_nav .centerbox ul li').click(function(e){
  e.preventDefault();
  $('a').removeClass('active')
  $(this).find('a').addClass('active')
  // bbg=$(this).index();
  $('.okw li').hide();
  $(this).find('.okw li').fadeIn();
});
}

}); 