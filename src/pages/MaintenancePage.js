import { dataService } from '../services/dataService.js';

export const MaintenancePage = () => {
    const suggestions = dataService.optimizePlan();

    // Setup listener manually after render in main.js
    // OR we can embed a script to handle it, but cleanest is to return HTML and let the router attach listeners
    // For this simple restructuring, I'll keep the logic here but expose a way to init listeners? 
    // Actually, I'll attach the listener in the Router or Main after injection.

    return `
      <div class="space-y-6 animate-fade-in-up">
         <!-- Hero Card for Optimization -->
         <div class="card-premium p-8 lg:p-10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-600/20 to-transparent pointer-events-none"></div>
            
            <div class="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div class="max-w-xl">
                    <h2 class="text-3xl font-display font-bold text-white mb-2">Motor de Otimização IA</h2>
                    <p class="text-lg text-slate-400 leading-relaxed">Nossos algoritmos analisam milhões de datapoints para gerar o cronograma de manutenção mais eficiente possível.</p>
                </div>
                <button id="run-opt" class="px-6 py-4 rounded-xl bg-white text-dark-900 font-bold text-lg shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                    <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Gerar Plano Otimizado
                </button>
            </div>
         </div>

         <div id="maint-content" class="hidden opacity-0 transition-opacity duration-500">
            <h3 class="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-2 h-6 bg-gradient-to-b from-primary-400 to-purple-500 rounded-full"></span>
                Ordens Sugeridas
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${suggestions.map(s => `
                    <div class="card-premium p-6 border-l-4 ${s.priority === 'Urgente' ? 'border-l-rose-500' : 'border-l-orange-500'}">
                        <div class="flex justify-between items-start mb-4">
                            <span class="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${s.priority === 'Urgente' ? 'bg-rose-500/10 text-rose-400' : 'bg-orange-500/10 text-orange-400'}">${s.priority}</span>
                            <span class="font-mono text-sm font-bold text-white">${s.suggestedDate}</span>
                        </div>
                        <h4 class="text-lg font-bold text-white mb-2">${s.assetName}</h4>
                        <p class="text-sm text-slate-400 mb-6 line-clamp-2">${s.reason}</p>
                        <button class="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-semibold text-white transition-all flex justify-center items-center gap-2 group">
                            <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                            Aprovar Ordem
                        </button>
                    </div>
                `).join('')}
            </div>
         </div>
      </div>
    `;
};
