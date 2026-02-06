import { DashboardPage } from '../pages/DashboardPage.js';
import { AssetsPage } from '../pages/AssetsPage.js';
import { PredictionsPage } from '../pages/PredictionsPage.js';
import { MaintenancePage } from '../pages/MaintenancePage.js';

export const navigate = (pageId) => {
    const content = document.getElementById('page-container');
    const headerTitle = document.getElementById('page-title');

    // Update Active Nav
    document.querySelectorAll('.nav-link').forEach(el => {
        if (el.getAttribute('data-page') === pageId) el.classList.add('active');
        else el.classList.remove('active');
    });

    const routes = {
        dashboard: { view: DashboardPage, title: 'Centro de Comando' },
        assets: { view: AssetsPage, title: 'Ativos e Sensores' },
        predictions: { view: PredictionsPage, title: 'Inteligência Preditiva' },
        maintenance: { view: MaintenancePage, title: 'Planeador' }
    };

    const route = routes[pageId] || routes.dashboard;

    // Render View
    content.innerHTML = route.view();

    // Update Title with animation feel
    headerTitle.style.opacity = '0';
    setTimeout(() => {
        headerTitle.textContent = route.title;
        headerTitle.style.opacity = '1';
    }, 150);

    // Initialize Page Specific Logic
    if (pageId === 'maintenance') {
        const btn = document.getElementById('run-opt');
        if (btn) {
            btn.onclick = () => {
                const results = document.getElementById('maint-content');
                results.classList.remove('hidden');
                setTimeout(() => results.classList.remove('opacity-0'), 50);

                btn.innerHTML = `
                    <svg class="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span class="text-emerald-500">Sucesso!</span>
                `;
                btn.classList.add('bg-emerald-500/10', 'border-emerald-500/50', 'text-emerald-500');
                btn.classList.remove('bg-white', 'text-dark-900');
            };
        }
    }
};
