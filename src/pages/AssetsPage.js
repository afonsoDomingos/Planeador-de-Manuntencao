import { dataService } from '../services/dataService.js';

export const AssetsPage = () => {
    // Initial Render
    const renderTable = (filter = '') => {
        const assets = dataService.getAssets(filter);
        return assets.map(a => `
            <tr class="group hover:bg-white/[0.02] transition-colors">
                <td class="p-6 font-mono text-sky-400">${a.id}</td>
                <td class="p-6 font-medium text-white group-hover:text-primary-300 transition-colors">${a.name}</td>
                <td class="p-6">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${backgroundForCriticality(a.criticality)}">${a.criticality}</span>
                </td>
                <td class="p-6">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full ${a.status === 'Healthy' ? 'bg-emerald-500 shadow-[0_0_10px_-2px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_10px_-2px_rgba(244,63,94,0.5)]'}"></span>
                        <span class="text-sm text-slate-300">${a.status}</span>
                    </div>
                </td>
                <td class="p-6 w-48">
                    <div class="flex items-center gap-3">
                        <span class="text-sm font-bold w-8 text-right text-slate-300">${a.healthScore !== undefined ? a.healthScore : 0}%</span>
                        <div class="flex-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                            <div style="width: ${a.healthScore !== undefined ? a.healthScore : 0}%" class="h-full rounded-full transition-all duration-500 ${getColorForHealth(a.healthScore)}"></div>
                        </div>
                    </div>
                </td>
                <td class="p-6 text-right">
                    <button class="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </td>
            </tr>
        `).join('');
    };

    const backgroundForCriticality = (crit) => {
        if (crit === 'Crítica') return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
        if (crit === 'Alta') return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    };

    const getColorForHealth = (score) => {
        if (score > 80) return 'bg-emerald-500';
        if (score > 50) return 'bg-orange-500';
        return 'bg-rose-500';
    };

    // Defer Event Listener assignment
    setTimeout(() => {
        const searchInput = document.getElementById('asset-search');
        const tbody = document.getElementById('assets-body');
        const simBtn = document.getElementById('sim-btn');

        if (searchInput && tbody) {
            searchInput.addEventListener('input', (e) => {
                tbody.innerHTML = renderTable(e.target.value);
            });
        }

        if (simBtn && tbody) {
            simBtn.addEventListener('click', () => {
                dataService.simulateDegradation();
                tbody.innerHTML = renderTable(searchInput ? searchInput.value : '');

                // Visual feedback
                const icon = simBtn.querySelector('svg');
                icon.classList.add('animate-spin');
                setTimeout(() => icon.classList.remove('animate-spin'), 500);
            });
        }
    }, 100);

    return `
      <div class="card-premium overflow-hidden animate-fade-in-up">
        <div class="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/[0.02]">
            <div>
                <h3 class="text-2xl font-display font-bold text-white">Inventário de Ativos</h3>
                <p class="text-slate-400 text-sm mt-1">Gestão centralizada de equipamentos e sensores.</p>
            </div>
            
            <div class="flex items-center gap-3 w-full md:w-auto">
                <div class="relative w-full md:w-64">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" id="asset-search" placeholder="Filtrar por nome ou ID..." 
                        class="w-full pl-10 pr-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all">
                </div>
                
                <button id="sim-btn" class="px-5 py-2.5 rounded-xl bg-orange-500/10 text-orange-400 font-semibold border border-orange-500/20 hover:bg-orange-500/20 transition-all flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span class="hidden md:inline">Simular Desgaste (IA)</span>
                </button>
                <button class="btn-primary-glow whitespace-nowrap">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                    <span class="hidden md:inline">Novo Ativo</span>
                </button>
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="text-xs text-slate-400 uppercase tracking-wider border-b border-white/5 bg-white/[0.01]">
                        <th class="p-6 font-semibold">ID</th>
                        <th class="p-6 font-semibold">Nome</th>
                        <th class="p-6 font-semibold">Criticidade</th>
                        <th class="p-6 font-semibold">Status</th>
                        <th class="p-6 font-semibold">Saúde</th>
                        <th class="p-6 font-semibold text-right">Ações</th>
                    </tr>
                </thead>
                <tbody id="assets-body" class="divide-y divide-white/5">
                    ${renderTable()}
                </tbody>
            </table>
        </div>
      </div>
    `;
};
