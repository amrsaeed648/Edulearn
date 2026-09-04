function initThemeToggle() {
  const btn  = document.querySelector('.theme-btn');
  const icon = document.querySelector('.theme-img');
  if (!btn) return;

  const apply = theme => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    if (icon) {
      icon.src = theme === 'dark'
        ? 'assets/images/navbar/moon.png'
        : 'assets/images/navbar/sun.png';
    }
  };

  apply(localStorage.getItem('theme') || 'light');

  btn.addEventListener('click', () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
}