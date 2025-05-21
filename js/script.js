console.log("고양이 실습 홈페이지에 오신 걸 환영합니다!");

// 사이드바 토글 기능
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        toggleBtn.textContent = "사이드바 닫기";
    } else {
        sidebar.style.display = "none";
        toggleBtn.textContent = "사이드바 열기";
    }
});

// 영상 클릭 시 알림 및 배경색 변경
const videos = document.querySelectorAll("video");
videos.forEach(video => {
    video.addEventListener("click", () => {
        alert("고양이 영상을 재생합니다 🐱");
    });

    video.addEventListener("play", () => {
        video.parentElement.style.backgroundColor = "#e0f7fa";
    });

    video.addEventListener("pause", () => {
        video.parentElement.style.backgroundColor = "";
    });

    video.addEventListener("mouseenter", () => {
        if (video.muted) {
            video.title = "음소거 상태입니다. 소리를 켜보세요!";
        }
    });
});

// 다크모드 토글
const darkBtn = document.getElementById("toggleDarkMode");
let isDark = false;

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    isDark = !isDark;
    darkBtn.textContent = isDark ? "라이트 모드" : "다크 모드";
});

// 맨 위로 이동 버튼
const scrollBtn = document.getElementById("scrollTopBtn");
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
