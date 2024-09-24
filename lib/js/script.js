document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.getElementById('site-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
