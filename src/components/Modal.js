export const Modal = (id, title, content) => `
    <div id="${id}" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 hidden items-center justify-center p-4 transition-all duration-300">
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up">
            <!-- Header -->
            <div class="p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/10">
                <h3 class="text-2xl font-display font-bold text-slate-900 dark:text-white">${title}</h3>
                <button class="modal-close w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            
            <!-- Content -->
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                ${content}
            </div>
        </div>
    </div>
`;

export const showModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Close handlers
        modal.querySelectorAll('.modal-close').forEach(btn => {
            btn.onclick = () => hideModal(modalId);
        });

        // Click outside to close
        modal.onclick = (e) => {
            if (e.target === modal) hideModal(modalId);
        };
    }
};

export const hideModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
};
