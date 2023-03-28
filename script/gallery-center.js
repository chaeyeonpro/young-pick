 $(function(){
 var swiper = new Swiper('.gallery-center_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 30,//갤러리 사이 간격
    centeredSlides: true,//센터모드
    speed: 1300,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 1500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery-center .swiper-button-next',
        prevEl: '.gallery-center .swiper-button-prev',
      },
    });
});
