/* 궁금한 점 토글 */
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.question-item');

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      const hiddenDiv = this.nextElementSibling;
      const svg = this.querySelector('svg');

      // 토글
      const isVisible = hiddenDiv.style.display === 'block';
      hiddenDiv.style.display = isVisible ? 'none' : 'block';

      // svg 교체
      svg.innerHTML = isVisible
      ? `<path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />`
      : `<path fill="#ffffff" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />`;
    });
  });

  // 헤더 토글 메뉴 기능 추가
  const toggleBtn = document.querySelector(".header-toggle-btn");
  const menu = document.querySelector(".menu-ui");
  const iconContainer = document.querySelector(".header-toggle-icon");

  const headerMenuIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512">
      <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
    </svg>
  `

  const headerCloseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512">
      <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
    </svg>
  `;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    iconContainer.innerHTML = menu.classList.contains("active") ? headerCloseIcon : headerMenuIcon;
  });

});