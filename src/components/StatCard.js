export const StatCard = (title, value, trend, trendValue, iconPath, colorClass) => `
  <div class="card-premium p-6 flex flex-col justify-between h-full animate-fade-in-up">
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">${title}</p>
        <h3 class="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">${value}</h3>
      </div>
      <div class="p-2.5 rounded-xl ${colorClass.bg} ${colorClass.text} ring-1 ring-inset ${colorClass.ring}">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
           ${iconPath}
        </svg>
      </div>
    </div>
    
    <div class="flex items-center gap-2 text-sm font-medium">
      <span class="${trend === 'up' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10' : 'text-rose-600 dark:text-rose-400 bg-rose-500/10'} px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/5 flex items-center gap-1">
        ${trend === 'up' ? '↑' : '↓'} ${trendValue}
      </span>
      <span class="text-slate-500 dark:text-slate-400">vs mês anterior</span>
    </div>
  </div>
`;
