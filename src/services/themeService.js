class ThemeService {
    constructor() {
        this.theme = localStorage.getItem('predictAI_theme') || 'dark';
        this.applyTheme();
    }

    applyTheme() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('predictAI_theme', this.theme);
        this.applyTheme();
        return this.theme;
    }

    getTheme() {
        return this.theme;
    }
}

export const themeService = new ThemeService();
