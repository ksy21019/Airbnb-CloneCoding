document.addEventListener('DOMContentLoaded', function () {
  const parents = document.querySelectorAll('.question-item');

  parents.forEach(function (parent) {
    parent.addEventListener('click', function () {
      const hiddenDiv = this.nextElementSibling;

      hiddenDiv.style.display = hiddenDiv.style.display === 'block' ? 'none' : 'block';
    });
  });
});