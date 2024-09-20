document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener('click', function(e) { 
        e.preventDefault(); /* Отменяем стандартное поведение ссылки */

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' /* Добавляем плавный скролл к якорю */
        });
    });
});
