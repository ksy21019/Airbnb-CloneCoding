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
});