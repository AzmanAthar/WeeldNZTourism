let e = document.addEventListener('keydown', f => {
    if (f.key === '*' && f.ctrlKey) {
        window.open('../login.html', '_blank')
    }
});
