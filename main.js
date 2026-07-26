// Theme toggle — remembers the choice, falls back to the OS preference.
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored) root.dataset.theme = stored;

document.getElementById('themeToggle').addEventListener('click', () => {
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const current = root.dataset.theme || (prefersDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

document.getElementById('year').textContent = new Date().getFullYear();
