import { dataService } from '../services/dataService.js';
import { StatCard } from '../components/StatCard.js';
import { themeService } from '../services/themeService.js';
import ApexCharts from 'apexcharts';

export const DashboardPage = () => {
    const kpis = dataService.getKPIs();
    const currentTheme = themeService.getTheme();

    // Defer chart rendering
    setTimeout(() => {
        const options = {
            series: [{ name: 'Saúde Geral', data: [91, 88, 85, 82, 90, 95, 94] }],
            chart: { type: 'area', height: 250, toolbar: { show: false }, background: 'transparent' },
            colors: ['#6366f1'],
            fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 90, 100] } },
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth', width: 2 },
            xaxis: {
                categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { style: { colors: currentTheme === 'dark' ? '#94a3b8' : '#64748b' } }
            },
            yaxis: { show: false },
            grid: { borderColor: currentTheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', strokeDashArray: 4 },
            theme: { mode: currentTheme }
        };
        const chartElement = document.querySelector("#health-chart");
        if (chartElement) {
            chartElement.innerHTML = ''; // Clear previous
            new ApexCharts(chartElement, options).render();
        }
    }, 100);

    return `
      <div class="space-y-6 animate-fade-in-up">
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${StatCard('Tempo Médio Falhas', `${kpis.mtbf}h`, 'up', '12%',
        '<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />',
        { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500/20' })}
                
            ${StatCard('Tempo de Reparo', `${kpis.mttr}h`, 'down', '8%',
            '<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M16.338 3.038c.607.067 1.15.513 1.127 1.134-1.353 3.633-4.595 5.564-9.066 5.564-3.5 0-6.19-1.928-8.5-5.3a2.91 2.91 0 014.288-4.103c2.973 1.638 5.485 2.162 8.354 1.769.752-.103 1.258.4 1.198 1.124-.027.322-.057.653-.086.98z" />',
            { bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500/20' })}
                
            ${StatCard('Ativos Críticos', kpis.criticalAssets, 'down', '2',
                '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />',
                { bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', ring: 'ring-rose-500/20' })}
                
            ${StatCard('Disponibilidade', '98.5%', 'up', '0.4%',
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
                    { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', ring: 'ring-emerald-500/20' })}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Main Chart -->
            <div class="card-premium p-6 lg:col-span-2">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-display font-semibold text-slate-900 dark:text-white">Saúde da Frota (7 Dias)</h3>
                    <select class="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg text-sm text-slate-700 dark:text-slate-300 px-3 py-1 outline-none hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer">
                        <option class="bg-white dark:bg-dark-800">Semana Atual</option>
                        <option class="bg-white dark:bg-dark-800">Mês Passado</option>
                    </select>
                </div>
                <div id="health-chart"></div>
            </div>

            <!-- AI Alerts -->
            <div class="card-premium p-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="relative">
                        <span class="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse"></span>
                        <svg class="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                    </div>
                    <h3 class="text-xl font-display font-semibold text-slate-900 dark:text-white">Alertas Live</h3>
                </div>

                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-gradient-to-br from-rose-500/10 to-transparent border border-rose-500/20 hover:border-rose-500/40 transition-colors group cursor-pointer">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded uppercase">Crítico</span>
                            <span class="text-xs text-slate-500">2 min</span>
                        </div>
                        <h4 class="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-200 transition-colors">Vibração: Turbina A1</h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Padrão harmônico excede limite de segurança ISO-10816.</p>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-colors group cursor-pointer">
                         <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded uppercase">Info</span>
                            <span class="text-xs text-slate-500">1h</span>
                        </div>
                        <h4 class="font-bold text-slate-900 dark:text-white mb-1">Backup Completo</h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400">Log de sensores arquivado com sucesso.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    `;
};
