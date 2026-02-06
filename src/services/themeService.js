class ThemeService {
    constructor() {
        this.theme = localStorage.getItem('predictAI_theme') || 'dark';
    }

    init() {
        this.applyTheme();
    }

    applyTheme() {
        const html = document.documentElement;
        if (this.theme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
        }
        console.log('Theme applied:', this.theme); // Debug log
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('predictAI_theme', this.theme);
        this.applyTheme();
        console.log('Theme toggled to:', this.theme); // Debug log
        return this.theme;
    }

    getTheme() {
        return this.theme;
    }
}

export const themeService = new ThemeService();
