// 페이지 로드 시 메시지 출력
console.log("고양이 실습 홈페이지에 오신 걸 환영합니다!");

// 사이드바 토글 기능
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
});

// 영상 클릭 시 알림
const videos = document.querySelectorAll("video");
videos.forEach(video => {
    video.addEventListener("click", () => {
        alert("고양이 영상을 재생합니다 🐱");
    });
});
