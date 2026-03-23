console.log("Zemenaw Gozo AI is running 🚀");

// Live arrival time animation
const el = document.getElementById('liveMinutes');
if (el) {
    const values = [2, 3, 1, 4, 2, 3];
    let i = 0;
    setInterval(() => {
        el.innerText = values[i % values.length];
        i++;
    }, 2400);
}

// Bottom nav
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        alert(`✨ ${this.innerText.trim()} section — Hawassa smart services demo.`);
    });
});

// Transport buttons
document.querySelectorAll('.transport-btn').forEach(btn => {
    btn.addEventListener('click', () => alert(`🚖 ${btn.innerText.trim()} requested. Finding nearest driver...`));
});

// AI mic button
document.getElementById('micBtn')?.addEventListener('click', () => {
    alert("🎙️ AI Assistant: Ask me about transport, food, Eco-Shine, or payments in Amharic/Sidamic/English.");
});

// Fallback staging alert
setTimeout(() => {
    // initial greeting only from current script if needed
    console.log('Ready for Zemenaw Gozo AI interactions');
}, 1000);
