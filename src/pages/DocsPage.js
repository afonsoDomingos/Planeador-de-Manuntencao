export const DocsPage = () => {
    return `
      <div class="space-y-6 animate-fade-in-up">
        <!-- Hero Section -->
        <div class="card-premium p-8 lg:p-10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/20 to-transparent pointer-events-none"></div>
            
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                        <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <h2 class="text-3xl font-display font-bold text-white">Documentação Técnica</h2>
                </div>
                <p class="text-lg text-slate-400 leading-relaxed max-w-3xl">
                    Sistema de Manutenção Preditiva baseado em Inteligência Artificial para otimização de cronogramas e previsão de falhas em ativos industriais.
                </p>
            </div>
        </div>

        <!-- Tech Stack -->
        <div class="card-premium p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-1.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                Stack Tecnológico
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span class="text-xl font-bold text-yellow-400">JS</span>
                        </div>
                        <h4 class="font-bold text-white">JavaScript ES6+</h4>
                    </div>
                    <p class="text-sm text-slate-400">Linguagem principal com módulos nativos, async/await e classes modernas.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span class="text-xl font-bold text-sky-400">CSS</span>
                        </div>
                        <h4 class="font-bold text-white">Tailwind CSS v3</h4>
                    </div>
                    <p class="text-sm text-slate-400">Framework utility-first para design responsivo e componentes reutilizáveis.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        <h4 class="font-bold text-white">Vite</h4>
                    </div>
                    <p class="text-sm text-slate-400">Build tool ultrarrápido com HMR (Hot Module Replacement) instantâneo.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        </div>
                        <h4 class="font-bold text-white">ApexCharts</h4>
                    </div>
                    <p class="text-sm text-slate-400">Biblioteca de gráficos interativos para visualização de dados em tempo real.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                        </div>
                        <h4 class="font-bold text-white">LocalStorage API</h4>
                    </div>
                    <p class="text-sm text-slate-400">Persistência de dados no navegador sem necessidade de backend.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-all group">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </div>
                        <h4 class="font-bold text-white">PostCSS</h4>
                    </div>
                    <p class="text-sm text-slate-400">Processador CSS com Autoprefixer para compatibilidade cross-browser.</p>
                </div>
            </div>
        </div>

        <!-- Architecture -->
        <div class="card-premium p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-1.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                Arquitetura do Sistema
            </h3>

            <div class="space-y-4">
                <div class="p-6 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                            <span class="text-indigo-400 font-bold">1</span>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-white mb-2">📁 /src/components/</h4>
                            <p class="text-slate-400 mb-3">Componentes UI reutilizáveis (Sidebar, Header, StatCard) exportados como funções que retornam template strings.</p>
                            <code class="text-xs bg-black/30 px-3 py-1.5 rounded-lg text-emerald-400 font-mono">export const Sidebar = () => \`...\`</code>
                        </div>
                    </div>
                </div>

                <div class="p-6 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                            <span class="text-indigo-400 font-bold">2</span>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-white mb-2">📄 /src/pages/</h4>
                            <p class="text-slate-400 mb-3">Páginas completas (Dashboard, Assets, Predictions, Maintenance, Docs) com lógica de renderização isolada.</p>
                            <code class="text-xs bg-black/30 px-3 py-1.5 rounded-lg text-emerald-400 font-mono">DashboardPage.js, AssetsPage.js, DocsPage.js</code>
                        </div>
                    </div>
                </div>

                <div class="p-6 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                            <span class="text-indigo-400 font-bold">3</span>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-white mb-2">🧭 /src/router/</h4>
                            <p class="text-slate-400 mb-3">Sistema de navegação SPA (Single Page Application) que gerencia transições entre páginas sem reload.</p>
                            <code class="text-xs bg-black/30 px-3 py-1.5 rounded-lg text-emerald-400 font-mono">navigate(pageId) → injeta conteúdo dinamicamente</code>
                        </div>
                    </div>
                </div>

                <div class="p-6 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                            <span class="text-indigo-400 font-bold">4</span>
                        </div>
                        <div>
                            <h4 class="text-lg font-bold text-white mb-2">⚙️ /src/services/</h4>
                            <p class="text-slate-400 mb-3">Camada de dados com classe DataService que gerencia assets, cálculos de RUL e persistência.</p>
                            <code class="text-xs bg-black/30 px-3 py-1.5 rounded-lg text-emerald-400 font-mono">dataService.getAssets(), .simulateDegradation()</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Features -->
        <div class="card-premium p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-1.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                Funcionalidades Principais
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        <h4 class="font-bold text-white">Dashboard Interativo</h4>
                    </div>
                    <p class="text-sm text-slate-400">KPIs em tempo real (MTBF, MTTR, Disponibilidade) com gráficos ApexCharts animados.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <h4 class="font-bold text-white">Pesquisa Dinâmica</h4>
                    </div>
                    <p class="text-sm text-slate-400">Filtros em tempo real na tabela de ativos sem recarregar a página.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <h4 class="font-bold text-white">Simulação de Desgaste</h4>
                    </div>
                    <p class="text-sm text-slate-400">Algoritmo que simula degradação aleatória de ativos para demonstração de IA preditiva.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                        <h4 class="font-bold text-white">Persistência Local</h4>
                    </div>
                    <p class="text-sm text-slate-400">Dados salvos automaticamente no navegador, mantendo estado entre sessões.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        <h4 class="font-bold text-white">Cálculo de RUL</h4>
                    </div>
                    <p class="text-sm text-slate-400">Remaining Useful Life calculado com base em health score e fatores de degradação.</p>
                </div>

                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div class="flex items-center gap-3 mb-3">
                        <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <h4 class="font-bold text-white">Otimização Automática</h4>
                    </div>
                    <p class="text-sm text-slate-400">Algoritmo que prioriza manutenções por criticidade e risco de falha.</p>
                </div>
            </div>
        </div>

        <!-- Installation -->
        <div class="card-premium p-8">
            <h3 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <span class="w-1.5 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                Como Executar Localmente
            </h3>

            <div class="space-y-4">
                <div class="p-4 rounded-xl bg-black/30 border border-white/5">
                    <p class="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">1. Clonar Repositório</p>
                    <code class="text-sm text-emerald-400 font-mono">git clone https://github.com/afonsoDomingos/Planeador-de-Manuntencao.git</code>
                </div>

                <div class="p-4 rounded-xl bg-black/30 border border-white/5">
                    <p class="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">2. Instalar Dependências</p>
                    <code class="text-sm text-emerald-400 font-mono">npm install</code>
                </div>

                <div class="p-4 rounded-xl bg-black/30 border border-white/5">
                    <p class="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">3. Executar Servidor de Desenvolvimento</p>
                    <code class="text-sm text-emerald-400 font-mono">npm run dev</code>
                </div>

                <div class="p-4 rounded-xl bg-black/30 border border-white/5">
                    <p class="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">4. Build para Produção</p>
                    <code class="text-sm text-emerald-400 font-mono">npm run build</code>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="card-premium p-6 text-center">
            <p class="text-slate-400 mb-2">Desenvolvido por <span class="text-white font-bold">Afonso Domingos (MUV)</span></p>
            <a href="https://www.linkedin.com/in/afonso-domingos-6b59361a5/" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                🔗 LinkedIn Profile
            </a>
        </div>
      </div>
    `;
};
