// Получаем ссылки по их id
const link1 = document.getElementById('realisations');
const isDemos = document.getElementById('demosProject');
const link2 = document.getElementById('demos');
const isRealisations = document.getElementById('realisationsProject');
const link0 = document.getElementById('all');
const isDemos2 = document.getElementById('demosProject2')

// Добавляем обработчик события клика на первую ссылку
link1.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    isDemos.classList.add('hidden'); // Скрываем вторую ссылку
    isDemos.classList.remove('d-block');
    isDemos2.classList.add('hidden'); // Скрываем вторую ссылку
    isDemos2.classList.remove('d-block');
    isRealisations.classList.remove('hidden'); // Скрываем вторую ссылку
    isRealisations.classList.add('d-block');
    link1.classList.add('isSelected');
    link2.classList.remove('isSelected');
    link0.classList.remove('isSelected');
});

link2.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    isRealisations.classList.add('hidden'); // Скрываем вторую ссылку
    isRealisations.classList.remove('d-block');
    isDemos.classList.remove('hidden'); // Скрываем вторую ссылку
    isDemos.classList.add('d-block');
    isDemos2.classList.remove('hidden'); // Скрываем вторую ссылку
    isDemos2.classList.add('d-block');
    link1.classList.remove('isSelected');
    link2.classList.add('isSelected');
    link0.classList.remove('isSelected');
});

link0.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    isRealisations.classList.remove('hidden'); // Скрываем вторую ссылку
    isRealisations.classList.add('d-block');
    isDemos.classList.remove('hidden'); // Скрываем вторую ссылку
    isDemos.classList.add('d-block');
    isDemos2.classList.remove('hidden'); // Скрываем вторую ссылку
    isDemos2.classList.add('d-block');
    link1.classList.remove('isSelected');
    link2.classList.remove('isSelected');
    link0.classList.add('isSelected');
});