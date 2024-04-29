$(function(){
  let w_width=$(window).width();
  
  //모바일 메뉴버튼
  let navHeight = $(".tot_navi").height();
  $(".m_bottom_menu_icon").click(function(){
    //메뉴 뒤에 있는 섹션 스크롤방지
    $(".wrap").css({"height":navHeight,"overflow":"hidden"});
    $(".tot_navi").animate({ 'left':0 });
  })
  $(".close_btn").click(function(){
    $(".wrap").css({"height":"auto","overflow":"visible"});
    $(".tot_navi").animate({ 'left':'-100vw' });
  })

  //모바일버전
  if(w_width < 1400){
    //아코디언 메뉴
    $("nav > ul > li > a").click(function(e){
      e.preventDefault();
      if($(this).attr("class") != "active"){
        $("nav > ul > li > a").removeClass("active");
        $(this).addClass("active");
        $("nav .sub").slideUp();
        $(this).next().slideDown();
      }else{
        $(this).removeClass("active");
        $(this).next().slideUp();
      }
    }); 
  //pc버전
  }else{
    $(".navi_menu").mouseenter(function(){        
      $(this).find(">a").css("padding-bottom", 60);
      $(".tot_navi").show();
      $(".sub").show();
    });
    $(".navi_menu").mouseleave(function(){
      $(this).find(">a").css("padding-bottom", 0);
      $(".tot_navi").hide();  
    });
  }



  //탭메뉴 s7 - 메인
  $(".tab_nav a").click(function(e){
    e.preventDefault();
    let idx=$(this).index();
    $(".tab_nav a").removeClass("active");
    $(this).addClass("active");
    $(".tab_con").hide();
    $(".tab_con").eq(idx).fadeIn();

    $(".tab_con > ul li").removeClass("active");
    $(".tab_con > ul li:first-child").addClass("active");
    $(".sub_con").hide();
    $(".tab_con > div > .sub_con:first-child").eq(idx).show();
  });
  //탭메뉴 s7 - 서브
  $(".sub_con").hide();
  $(".sub_con1_1").show();
  $(".tab_con > ul li").click(function(e){
    e.preventDefault();
    let idx=$(this).index();
    $(".tab_con > ul li").removeClass("active");
    $(this).addClass("active");
    $(this).parent().next().find(".sub_con").hide();
    $(this).parent().next().find(".sub_con").eq(idx).fadeIn();
  });
  
  



  //탭메뉴 s8 베스트 아이템
  $(".best_con").hide();
  $(".best_con1").show();
  $(".best_tab > a").click(function(e){
    e.preventDefault();
    //클릭된 탭의 부모요소의 인덱스 반환 (부모요소의 순서 파악위함)
    let idx=$(this).parent().index();
    $(".best_tab > a").removeClass("active");
    $(this).addClass("active");

    $(".best_tab").removeClass("active");
    $(this).parent().addClass("active");
    $(".best_con").hide();
    $(".best_con").eq(idx).fadeIn()
  });
  // s8 자동 탭 전환
  var currentTab = 1; // 현재 탭
  var totBestTab = $(".best_tab").length; // 전체 탭 수
  var tabTime = 3000; // 탭 전환 간격 (밀리초)
  // 초기화
  var autoTab = setInterval(autoSwitchTab, tabTime); // 탭 자동 전환 시작

  // 다음 탭으로 전환하는 함수
  function autoSwitchTab() {
    $(".best_tab > a").eq(currentTab % totBestTab).click(); // 다음 탭 자동 클릭
    currentTab++; // 다음 탭으로 이동
  }
  // 마우스를 올리면 자동 탭 전환을 일시 중지
  $(".s8 .center_box").mouseenter(function() {
    clearInterval(autoTab);
  });
  // 마우스를 내리면 다시 시작
  $(".s8 .center_box").mouseleave(function() {
    autoTab = setInterval(autoSwitchTab, tabTime);
  });



  //스와이퍼
  var swiper = new Swiper(".swiper_s1", {
    loop:true,
    autoplay: {
      delay:5000
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiper_s3", {
    loop:true,
    autoplay: {
        delay:4000
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".s3_swiper-button-next",
      prevEl: ".s3_swiper-button-prev",
    },
  });  
  var swiper = new Swiper(".swiper_s5", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      500: {
        slidesPerView: 3,  //브라우저가 500보다 클 때 3개
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".s5_swiper-button-next",
      prevEl: ".s5_swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  //footer 아코디언
  $(".ft_title_txt").click(function(e){
    e.preventDefault();
    if(!$(this).hasClass("active")){
      $(this).removeClass("active");
      $(".ft_information").slideUp();
      $(this).addClass("active").next().slideDown();
    
      //화살표 방향 변경 - 스타벅스랑 다른 이유를 모르겠음
      $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
      // 클릭할때 위로 올라가지 말라는 의미
      return false;
    } else {
      $(this).removeClass("active").next().slideUp();
      $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
    }
  }); 

});