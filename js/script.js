$(function () {
  // header スクロールで背景色変更
    
    'use strict'; 
    
    $(window).on('scroll', function () {
    
    if ($('.header').height() < $(this).scrollTop() || $('header').hasClass('sub')) { 

    // 背景色変更
    $('.header').css('background','#fff');
    // 文字色変更
    $('nav').css('color','#000');
    // ロゴ画像変更
    $('.header__logo').attr('src','img/sub-header-logo-min.png');
    // ハンバーガーメニュー色変更
    $('.openbtn span:nth-of-type(2)').css('color','#000');
    $('.openbtn span:nth-of-type(1)').css('background','#000');
    $('.openbtn span:nth-of-type(3)').css('background','#000');    

   }else {
    $('.header').css('background','rgba(0,0,0,0)');
    $('nav').css('color','#fff');
    $('.header__logo').attr('src','img/top-header-logo-min.png');
    $('.openbtn span:nth-of-type(2)').css('color','#fff');
    $('.openbtn span:nth-of-type(1)').css('background','#fff');
    $('.openbtn span:nth-of-type(3)').css('background','#fff');   } 
  
  });

  // header ハンバーガーメニューボタン部分
    // $(".openbtn").click(function () {
    //   $(this).toggleClass('active');
    // });
  // header ハンバーガーメニュー中身
    $('.menu').hide();
    $('.openbtn').click(function () {// js-btnクラスをクリックすると、
      $(this).toggleClass('active'); // ※ハンバーガーメニューのボタンスタイル変更時に追加した
      $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
      $('.menu-bg').fadeIn(1000);//空いた部分を影にする
      
      if($('.menu , .btn-line').hasClass('open')){
        // 背景色変更
        $('.header').css('background','#fff');
        // 文字色変更
        $('nav').css('color','#000');
        // ロゴ画像変更
        $('.header__logo').attr('src','img/sub-header-logo-min.png');
        // ハンバーガーメニュー色変更
        $('.openbtn span:nth-of-type(2)').css('color','#000');
        $('.openbtn span:nth-of-type(1)').css('background','#000');
        $('.openbtn span:nth-of-type(3)').css('background','#000');
        // 本文の縦スクロールを無効  
        $('body').css('overflow-y', 'hidden');

        $('.menu').slideDown(200);
        $('.menu-list a, .menu-bg').click(function(){
            $('.menu').slideUp(200);
            $('.menu , .btn-line').removeClass('open');
            $('.openbtn').removeClass('active');// ※ハンバーガーメニューのボタンスタイル変更時に追加した
            $('.menu-bg').fadeOut(0);
            // 本文の縦スクロールを有効
            $('body').css('overflow-y','auto');

        });    

      } else{
        $('.header').css('background','rgba(0,0,0,0)');
        $('nav').css('color','#fff');
        $('.header__logo').attr('src','img/top-header-logo-min.png');
        $('.openbtn span:nth-of-type(2)').css('color','#fff');
        $('.openbtn span:nth-of-type(1)').css('background','#fff');
        $('.openbtn span:nth-of-type(3)').css('background','#fff');

        $('.header').css('background','rgba(0,0,0,0)');
        $('.menu').slideUp(200);
        $('.menu-bg').fadeOut(0);

        // 本文の縦スクロールを有効
        $('body').css('overflow-y','auto');


      }

      return false;
    });

  // modal
  $(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg , #submit').click(function(){
      $('#modalArea').fadeOut();
    });
  });

  // header ページ内リンクからのスクロール
    $('a[href^="#"]:not([href="#"])').click(function(){
      var target = $($(this).attr('href')).offset().top;
      if(($(this).parent()) == 'nav'){ // 親要素を取得しそれがnavならば-94、そうでなければ-60にする
        target -= 94;
      }else{
        target -= 60;
      }
      $('html, body').animate({scrollTop: target}, 500);
      return false;
    });

  // news タブ
  $(function() {
 
    // ①タブをクリックしたら発動
    $('.sec-news__tab li').click(function() {
   
      // ②クリックされたタブの順番を変数に格納
      var index = $('.sec-news__tab li').index(this);
   
      // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
      $('.sec-news__tab li').removeClass('active');
   
      // ④クリックされたタブにクリック済みデザインを適用する
      $(this).addClass('active');
   
      // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
      $('.area .area-content').removeClass('show').eq(index).addClass('show');
   
    });
  });
  

  // main 各要素がふわっと入る
  AOS.init({
    duration: 500,
    easing: 'ease-out'
  });
  
  
  


});

