import './style.css';
import { Sidebar } from './components/Sidebar.js';
import { Header } from './components/Header.js';
import { navigate } from './router/router.js';

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('body');

    // Inject Layout directly into body
    app.innerHTML = `
        ${Sidebar()}
        <main class="flex-1 flex flex-col relative overflow-hidden bg-dark-900">
            ${Header('Centro de Comando')}
            <div class="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8 scroll-smooth">
                 <div id="page-container" class="max-w-7xl mx-auto transition-all duration-300 ease-in-out pb-10"></div>
            </div>
        </main>
    `;

    // Handle Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) navigate(page);
        });
    });

    // Initial Route
    navigate('dashboard');
});
