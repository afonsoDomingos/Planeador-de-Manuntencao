export const Sidebar = () => `
    <aside class="w-20 lg:w-72 bg-dark-900/80 backdrop-blur-md border-r border-white/5 flex flex-col justify-between shrink-0 transition-all duration-300 z-50 h-full relative">
        <div>
            <!-- Brand -->
            <div class="h-20 flex items-center px-6 lg:px-8 border-b border-white/5">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span class="text-xl font-display font-bold text-white tracking-tight hidden lg:block">PredictAI</span>
                </div>
            </div>

            <!-- Nav -->
            <nav class="p-4 space-y-2">
                <a href="/" class="nav-link group" data-page="dashboard">
                    <svg class="w-5 h-5 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    <span class="hidden lg:block">Dashboard</span>
                </a>
                <a href="/assets" class="nav-link group" data-page="assets">
                    <svg class="w-5 h-5 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    <span class="hidden lg:block">Ativos & Sensores</span>
                </a>
                <a href="/predictions" class="nav-link group" data-page="predictions">
                    <svg class="w-5 h-5 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <span class="hidden lg:block">Preditivo (IA)</span>
                </a>
                <a href="/maintenance" class="nav-link group" data-page="maintenance">
                    <svg class="w-5 h-5 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span class="hidden lg:block">Cronograma</span>
                </a>
            </nav>
        </div>

        <!-- User -->
        <div class="p-4 lg:p-6 border-t border-white/5">
            <div class="flex items-center gap-3">
                <div class="relative">
                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=random&color=fff" class="w-10 h-10 rounded-full border-2 border-primary-500/50">
                    <span class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-dark-900 rounded-full"></span>
                </div>
                <div class="hidden lg:block">
                    <div class="text-sm font-bold text-white">Eng. Chefe</div>
                    <div class="text-xs text-slate-400">Planta #04</div>
                </div>
            </div>
        </div>
    </aside>
`;
