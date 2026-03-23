// Live arrival time animation
const el = document.getElementById('liveMinutes');
if(el) {
    const values = [2,3,1,4,2,3];
    let i = 0;
    setInterval(() => { el.innerText = values[i % values.length]; i++; }, 2400);
}

// Bottom navigation - visual active state + demo alert
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        const section = this.innerText.trim();
        alert(`✨ ${section} section — Hawassa smart services demo.`);
    });
});

// Transport buttons with alert
const transportBtns = document.querySelectorAll('.transport-btn');
transportBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const vehicle = btn.innerText.trim();
        alert(`🚖 ${vehicle} requested. Finding nearest driver near you.`);
    });
});

// AI mic button
const micBtn = document.getElementById('micBtn');
if(micBtn) {
    micBtn.addEventListener('click', () => {
        alert("🎙️ AI Assistant: Ask me about transport, food, Eco-Shine, or payments in Amharic/Sidamic/English.");
    });
}
