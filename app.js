
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // "#id"에서 id만 추출
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // 네비게이션 바의 높이를 제외하고 스크롤
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    });
});
