import { dataService } from '../services/dataService.js';
import ApexCharts from 'apexcharts';

export const PredictionsPage = () => {
    const assets = dataService.getAssets();
    // Defer radial charts
    setTimeout(() => {
        assets.forEach(a => {
            const prob = Math.round(100 - a.healthScore + (Math.random() * 15));
            const color = prob > 40 ? '#f43f5e' : '#10b981';
            const options = {
                series: [prob],
                chart: { height: 160, type: 'radialBar', sparkline: { enabled: true } },
                plotOptions: { radialBar: { dataLabels: { show: false }, hollow: { size: '60%' }, track: { background: 'rgba(255,255,255,0.05)' } } },
                colors: [color],
                stroke: { lineCap: 'round' }
            };
            const el = document.querySelector(`#radial-${a.id}`);
            if (el) new ApexCharts(el, options).render();
        });
    }, 100);

    return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            ${assets.map(a => {
        const rul = dataService.calculateRUL(a);
        const prob = Math.round(100 - a.healthScore + (Math.random() * 15));
        return `
                    <div class="card-premium p-6 group">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">${a.name}</h3>
                                <p class="text-sm font-mono text-slate-500 mt-1">${a.id}</p>
                            </div>
                            <div class="w-16 h-16 ml-4" id="radial-${a.id}"></div>
                        </div>
                        
                        <div class="flex items-baseline gap-2 mb-6">
                            <span class="text-4xl font-display font-bold text-white tracking-tighter">${rul}</span>
                            <span class="text-sm text-slate-400 font-medium">dias estimados (RUL)</span>
                        </div>

                        <div class="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3 items-start">
                            <div class="mt-0.5 min-w-[20px]">
                                <svg class="w-5 h-5 ${prob > 40 ? 'text-rose-400' : 'text-emerald-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p class="text-sm font-semibold text-white mb-0.5">${prob > 40 ? 'Risco Elevado' : 'Estabilidade Confirmada'}</p>
                                <p class="text-xs text-slate-400 leading-relaxed">
                                    ${prob > 40
                ? 'Padrões de vibração sugerem degradação acelerada do rolamento primário.'
                : 'Todos os parâmetros operacionais dentro das margens nominais de segurança.'}
                                </p>
                            </div>
                        </div>
                    </div>
                `
    }).join('')}
        </div>
     `;
};
