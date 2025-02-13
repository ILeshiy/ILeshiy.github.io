// Функция, которая убирает размытие с фотографии после загрузки
function imageLoaded() {
    const photoImg = document.querySelector('.photo-img');
    const loadingText = document.querySelector('.loading-animation');

    // Убираем размытие
    photoImg.style.filter = 'blur(0)';
    
    // Убираем текст "Loading..."
    loadingText.style.display = 'none';

    // Запускаем анимацию для текста
    const textElements = document.querySelectorAll('.loaded-text');
    textElements.forEach(element => {
        element.style.animation = 'fadeIn 2s forwards';
    });
}
