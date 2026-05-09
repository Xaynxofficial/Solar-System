const orbits = document.querySelectorAll('.orbit');

orbits.forEach(o => {
    const planet = o.querySelector('.planet');
    
    planet.onclick = (e) => {
        e.stopPropagation(); 
        o.style.animationPlayState = (o.style.animationPlayState === 'paused') ? 'running' : 'paused';
    };

    planet.onmouseenter = () => {
        if (o.style.animationPlayState !== 'paused') {
            o.dataset.wasRunning = "true";
            o.style.animationPlayState = 'paused';
        }
    };
    
    planet.onmouseleave = () => {
        if (o.dataset.wasRunning === "true") {
            o.style.animationPlayState = 'running';
            o.dataset.wasRunning = "false";
        }
    };
});

console.log('✅ Sistem Başarıyla Çalışıyor!');
