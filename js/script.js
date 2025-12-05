// Модальное окно для книг
function showBookModal(title, author, genre, pages, year, description, imgSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalInfo').innerHTML = 
        `Основная информация: автор — ${author}, жанр — ${genre}, количество страниц — ${pages}, год издания — ${year}.`;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('bookModal').style.display = 'flex';
}

function closeBookModal() {
    document.getElementById('bookModal').style.display = 'none';
}

// Закрытие по клику вне окна
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookModal();
            }
        });
    }

    // Подсветка активной вкладки
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (
            (currentPage === 'about.html' && item.textContent === 'О НАС') ||
            (currentPage === 'shelf.html' && item.textContent === 'НАША ПОЛКА') ||
            (currentPage === '' || currentPage === 'index.html') && item.textContent === 'О НАС' // если главная — не подсвечиваем "О нас"
        ) {
            // Ничего не подсвечиваем на главной
        }
        if (currentPage === 'about.html' && item.textContent === 'О НАС') {
            item.classList.add('active');
        }
        if (currentPage === 'shelf.html' && item.textContent === 'НАША ПОЛКА') {
            item.classList.add('active');
        }
    });
});