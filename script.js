document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current copyright year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Highlight current active page link in Navigation
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('bg-brand-purple', 'text-white', 'shadow-md', 'shadow-brand-purple/30');
            link.classList.remove('hover:text-white');
        } else {
            link.classList.add('text-slate-400');
        }
    });

    // 4. Hero Background Audio Canvas Visualizer (if present)
    const visualizerCanvas = document.getElementById('heroVisualizer');
    if (visualizerCanvas) {
        const ctx = visualizerCanvas.getContext('2d');
        let width = visualizerCanvas.width = visualizerCanvas.offsetWidth;
        let height = visualizerCanvas.height = visualizerCanvas.offsetHeight;

        window.addEventListener('resize', () => {
            width = visualizerCanvas.width = visualizerCanvas.offsetWidth;
            height = visualizerCanvas.height = visualizerCanvas.offsetHeight;
        });

        const bars = 40;
        function renderVisualizer() {
            ctx.clearRect(0, 0, width, height);
            const barWidth = width / bars;
            for (let i = 0; i < bars; i++) {
                const barHeight = Math.sin(Date.now() * 0.003 + i * 0.2) * (height / 3) + (height / 3);
                const gradient = ctx.createLinearGradient(0, height, 0, height - barHeight);
                gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
                gradient.addColorStop(1, 'rgba(236, 72, 153, 0.6)');

                ctx.fillStyle = gradient;
                ctx.fillRect(i * barWidth, height - barHeight, barWidth - 4, barHeight);
            }
            requestAnimationFrame(renderVisualizer);
        }
        renderVisualizer();
    }
});