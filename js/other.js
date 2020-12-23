$(function(){

  // 导航滚动
  $(window).scroll(function () { 

    if($(document).scrollTop() > 0 ){ // && screen.width > 960

      $(".hd_inner").addClass("active");

    }else{

      if($('.top_menu_btn i').is('.icon-cross')){

        $(".hd_inner").removeClass("active");

      }else{

        $(".hd_inner").removeClass("active");

      }
      
    }
  });

  // 搜索
  $('.icon-search').on('click', function(){

    $(this).siblings('.search_form').slideToggle();

  })

  // 手机端菜单点击
  $('.top_menu_btn ').on('click', function(){

    $('.mob_nav_box').animate({ right: 0});

  })
  $('.icon-cross').on('click', function(){

    $('.mob_nav_box').animate({ right: '-100%'});
  })

  //   if(screen.width <= 1150){

  //     $(this).parents('.hd_inner').toggleClass('red');
      
  //     $(this).toggleClass('white');

  //     $(this).find('i').toggleClass('icon-cross');

  //   }

  //   // if($('.top_menu_btn i').is('.icon-cross')){

  //   //   $('.hd_logo img').attr('src', 'images/logo_wt.png');

  //   //   $('.top_nav').addClass('active');

  //   // }else{

  //   //   $('.hd_logo img').attr('src', 'images/logo.png');

  //   //   $('.top_nav').removeClass('active');

  //   // }

  // })


})