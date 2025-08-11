// header scroll
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $(".header").addClass("header_scrolled")
            } else {
                $(".header").removeClass('header_scrolled')
            }
        });

// 브루잉스토리 애니메이션

document.addEventListener('DOMContentLoaded', () => {
  const about = document.getElementById('about_wrap');

  let isVisible = false; // 현재 보이는 상태 추적

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!isVisible) {
          isVisible = true;
          // 다시 재생되게: 클래스를 제거했다가 강제 리플로우 후 다시 붙임
          about.classList.remove('active');
          // reflow 강제: animation restart 트릭
          void about.offsetWidth;
          about.classList.add('active');
        }
      } else {
        isVisible = false;
        // 나가면 클래스 제거해서 다음에 들어올 때 다시 애니메이션
        about.classList.remove('active');
      }
    });
  }, {
    root: null,
    threshold: 0.5, // 보일 때/안 보일 때 기준
  });

  io.observe(about);
});




 // map (지역버튼-> 지도이미지)
        $(function () {
            $(".img2,.img3,.img4,.img5").hide();
            $("[id^=button]").click(function () {
                let index = $(this).attr("id").replace("button", "");
                $(".img" + index).fadeIn().siblings().fadeOut();
            });

        })

// map(지도이미지 ->카페이미지)



// pick

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('image_wrapper');

  // ▶ 1. 기본 세트(set1) 클래스 보장
  wrapper.classList.add('set1');

  // ▶ 2. 기본 업/다운 애니메이션 붙이기
  const initCafe2 = wrapper.querySelector('.cafe2');
  const initCafe4 = wrapper.querySelector('.cafe4');
  if (initCafe2) initCafe2.classList.add('up');
  if (initCafe4) initCafe4.classList.add('down');

  // ▶ 3. 버튼 클릭 로직
  const buttons = [
    { id: 'pick_button1', set: 'set1' },
    { id: 'pick_button2', set: 'set2' },
    { id: 'pick_button3', set: 'set3' }
  ];

  
  buttons.forEach(({ id, set }) => {
    document.getElementById(id).addEventListener('click', () => {
      // 이미지 세트 변경
      wrapper.classList.remove('set1', 'set2', 'set3');
      wrapper.classList.add(set);

      // 애니메이션 클래스 초기화
      const cafe2 = wrapper.querySelector('.cafe2');
      const cafe4 = wrapper.querySelector('.cafe4');
      cafe2.classList.remove('up', 'down');
      cafe4.classList.remove('up', 'down');

      // 업/다운 애니메이션 설정
      if (set === 'set1' || set === 'set3') {
        cafe2.classList.add('up');
        cafe4.classList.add('down');
      } else if (set === 'set2') {
        cafe2.classList.add('down');
        cafe4.classList.add('up');
      }
    });
  });
});

// 아이콘 애니메이션

// 인터뷰 슬라이드




// 브루잉샵



// 이벤트
 document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.event_img > div');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 보여지면 붙이고, 안보이면 뗌
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  }, {
    threshold: 0.8
  });
  items.forEach(item => observer.observe(item));
});