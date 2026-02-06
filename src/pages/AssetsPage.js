import { dataService } from '../services/dataService.js';

export const AssetsPage = () => {
    const assets = dataService.getAssets();
    return `
      <div class="card-premium overflow-hidden animate-fade-in-up">
        <div class="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div>
                <h3 class="text-2xl font-display font-bold text-white">Inventário de Ativos</h3>
                <p class="text-slate-400 text-sm mt-1">Gestão centralizada de equipamentos e sensores.</p>
            </div>
            <button class="btn-primary-glow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                Novo Ativo
            </button>
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
                <tbody class="divide-y divide-white/5">
                    ${assets.map(a => `
                        <tr class="group hover:bg-white/[0.02] transition-colors">
                            <td class="p-6 font-mono text-sky-400">${a.id}</td>
                            <td class="p-6 font-medium text-white group-hover:text-primary-300 transition-colors">${a.name}</td>
                            <td class="p-6">
                                <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${a.criticality === 'Crítica' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
            a.criticality === 'Alta' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        }">${a.criticality}</span>
                            </td>
                            <td class="p-6">
                                <div class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full ${a.status === 'Healthy' ? 'bg-emerald-500 shadow-[0_0_10px_-2px_rgba(16,185,129,0.5)]' : 'bg-rose-500 shadow-[0_0_10px_-2px_rgba(244,63,94,0.5)]'}"></span>
                                    <span class="text-sm text-slate-300">${a.status}</span>
                                </div>
                            </td>
                            <td class="p-6 w-48">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-bold w-8 text-right text-slate-300">${a.healthScore}%</span>
                                    <div class="flex-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                                        <div style="width: ${a.healthScore}%" class="h-full rounded-full transition-all duration-500 ${a.healthScore > 80 ? 'bg-emerald-500' : a.healthScore > 50 ? 'bg-orange-500' : 'bg-rose-500'}"></div>
                                    </div>
                                </div>
                            </td>
                            <td class="p-6 text-right">
                                <button class="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
      </div>
    `;
};
