  // 태그 가져오기
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var recipeInfo = document.getElementById("recipeInfo");

  // 각 이미지에 마우스가 올라가면 모달 열림
  var imgs = document.querySelectorAll(".img-gallery img");
  imgs.forEach(function (img) {
      img.addEventListener('click', function () { // 익명함수
          modal.style.display = "block";
          modalImg.src = this.src; // 호버한 이미지의 경로를 모달 이미지로 설정
          recipeInfo.innerHTML = this.alt; // 이미지의 alt 텍스트를 레시피 정보로 설정
      });
      
      // 마우스가 이미지에서 완전히 떠나면 모달 닫기
      img.addEventListener("mouseout", function () {
          modal.style.display = "none";
      });
  });

  // 'X' 버튼 클릭 시 모달 닫기
  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
      modal.style.display = "none";
  };

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };