let gold = 0;
let goldPerClick = 1;
let goldPerSecond = 0;
const startTime = Math.floor(Date.now() / 1000);

// Historias para las mejoras
const upgradeStories = {
    click: [
        "Comienzas a recibir una mesada de tus padres (Nivel 1)",
        "Consigues un trabajo a tiempo parcial (Nivel 2)",
        "Terminas tus estudios secundarios (Nivel 3)",
        "Consigues tu primer trabajo a tiempo completo (Nivel 4)",
        "Obtienes un ascenso en tu trabajo (Nivel 5)",
        "Alcanzas el puesto de gerente (Nivel 6)",
        "Fundas tu propia empresa (Nivel 7)",
        "Tu empresa se convierte en un éxito y ganas un bono (Nivel 8)",
        "Te conviertes en un empresario exitoso (Nivel 9)",
        "Eres un magnate de los negocios (Nivel 10)"
    ],
    auto1: [
        "Consigues tu primer título universitario (Nivel 1)",
        "Te especializas en un área específica (Nivel 2)",
        "Realizas un curso de capacitación (Nivel 3)",
        "Obtienes una certificación profesional (Nivel 4)",
        "Te conviertes en un experto en tu campo (Nivel 5)",
        "Comienzas a enseñar tu especialidad (Nivel 6)",
        "Publicas un libro sobre tu tema (Nivel 7)",
        "Ganas reconocimiento internacional (Nivel 8)",
        "Fundas tu propia escuela o institución (Nivel 9)",
        "Tu legado se convierte en una referencia en tu campo (Nivel 10)"
    ],
    auto2: [
        "Realizas tu primera inversión (Nivel 1)",
        "Consigues un mentor en inversiones (Nivel 2)",
        "Aprendes sobre el mercado de valores (Nivel 3)",
        "Obtienes ganancias significativas en el mercado (Nivel 4)",
        "Diversificas tu cartera de inversiones (Nivel 5)",
        "Inviertes en bienes raíces (Nivel 6)",
        "Te conviertes en un ángel inversionista (Nivel 7)",
        "Fundas tu propia firma de inversión (Nivel 8)",
        "Eres un inversionista exitoso y respetado (Nivel 9)",
        "Tu filantropía influye en la economía global (Nivel 10)"
    ],
    auto3: [
        "Haces tu primera inversión en la Bolsa de Valores (Nivel 1)",
        "Consigues un mentor en inversiones (Nivel 2)",
        "Aprendes sobre el mercado de valores (Nivel 3)",
        "Obtienes ganancias significativas en el mercado (Nivel 4)",
        "Diversificas tu cartera de inversiones (Nivel 5)",
        "Inviertes en bienes raíces (Nivel 6)",
        "Te conviertes en un ángel inversionista (Nivel 7)",
        "Fundas tu propia firma de inversión (Nivel 8)",
        "Eres un inversionista exitoso y respetado (Nivel 9)",
        "Tu filantropía influye en la economía global (Nivel 10)"
    ],
    auto4: [
        "Comienzas un negocio online (Nivel 1)",
        "Consigues tus primeros clientes en línea (Nivel 2)",
        "Tu negocio online crece rápidamente (Nivel 3)",
        "Contratas a tu primer empleado virtual (Nivel 4)",
        "Expandes tu negocio a nivel internacional (Nivel 5)",
        "Ganas reconocimiento en la comunidad online (Nivel 6)",
        "Eres un referente en tu nicho de mercado (Nivel 7)",
        "Tu negocio online se convierte en una marca reconocida (Nivel 8)",
        "Inviertes en nuevas tecnologías para tu empresa (Nivel 9)",
        "Tu negocio online transforma la industria (Nivel 10)"
    ]
};

// Función para formatear el tiempo en HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Función para actualizar el temporizador
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = Math.floor(Date.now() / 1000);
    const elapsedTime = now - startTime;
    timerElement.textContent = formatTime(elapsedTime);
}

document.getElementById('clicker').addEventListener('click', () => {
    gold += goldPerClick;
    document.getElementById('gold').textContent = `$ ${gold}`;
    updateUpgradeButtons();
    showGoldGainAnimation(goldPerClick);
});

// Función para crear y animar el texto de ganancia de oro en una posición aleatoria
function showGoldGainAnimation(amount) {
    const goldGain = document.createElement('div');
    goldGain.textContent = `$${amount}`;
    goldGain.classList.add('gold-gain');
    document.body.appendChild(goldGain);

    // Posicionar el texto en una posición aleatoria dentro de los límites de la ventana
    const goldGainWidth = 50;  // Ancho estimado del elemento de ganancia de oro
    const goldGainHeight = 30; // Alto estimado del elemento de ganancia de oro
    const x = Math.random() * (window.innerWidth - goldGainWidth);
    const y = Math.random() * (window.innerHeight - goldGainHeight);
    goldGain.style.left = `${x}px`;
    goldGain.style.top = `${y}px`;

    // Remover el texto después de la animación
    goldGain.addEventListener('animationend', () => {
        goldGain.remove();
    });
}

// Función para mostrar efectos visuales de fondo
function showBackgroundEffects(type) {
    const backgroundEffect = document.createElement('div');
    if (type === 'auto1') {
        backgroundEffect.classList.add('auto1-jump');
    } else if (type === 'auto2') {
        backgroundEffect.classList.add('auto2-jump');
    } else if (type === 'auto3') {
        backgroundEffect.classList.add('auto3-jump');
    } else if (type === 'auto4') {
        backgroundEffect.classList.add('auto4-jump');
    } else if (type === 'click') {
        backgroundEffect.classList.add('click-jump');
    }

    // Dimensiones y posición aleatoria para el efecto de fondo dentro del contenedor de animaciones
    const upgradeAnimationContainer = document.getElementById('upgrade-animation-container');
    const upgradeAnimationContainerRect = upgradeAnimationContainer.getBoundingClientRect();
    const upgradeAnimationContainerStyle = window.getComputedStyle(upgradeAnimationContainer);
    const upgradeAnimationContainerLeft = parseInt(upgradeAnimationContainerStyle.getPropertyValue('left'));
    const upgradeAnimationContainerTop = parseInt(upgradeAnimationContainerStyle.getPropertyValue('top'));
    let x = Math.random() * (upgradeAnimationContainerRect.width - 50); // Ancho del efecto de fondo
    let y = Math.random() * (upgradeAnimationContainerRect.height - 50); // Alto del efecto de fondo

    // Agregar el efecto de fondo al contenedor de animaciones con las nuevas coordenadas
    backgroundEffect.style.left = `${upgradeAnimationContainerLeft + x}px`;
    backgroundEffect.style.top = `${upgradeAnimationContainerTop + y}px`;
    upgradeAnimationContainer.appendChild(backgroundEffect);
}

document.querySelectorAll('.buy-upgrade').forEach(button => {
    button.addEventListener('click', () => {
        const upgrade = button.closest('.upgrade');
        const cost = parseInt(upgrade.getAttribute('data-cost'));
        const increment = parseInt(upgrade.getAttribute('data-increment'));
        const type = upgrade.getAttribute('data-type');
        const textElement = upgrade.querySelector('.story');
        const costElement = upgrade.querySelector('.cost');
        let level = parseInt(upgrade.getAttribute('data-level'));

        if (gold >= cost && level < 10) {
            gold -= cost;         
            if (type === 'click') {
                goldPerClick += increment;
                textElement.textContent = upgradeStories.click[level];
                document.getElementById('gold-per-click').textContent = goldPerClick;
            } else if (type === 'auto1'){
                goldPerSecond += increment;
                textElement.textContent = upgradeStories.auto1[level];
                document.getElementById('gold-per-second').textContent = goldPerSecond;
            } else if (type === 'auto2'){
                goldPerSecond += increment;
                textElement.textContent = upgradeStories.auto2[level];
                document.getElementById('gold-per-second').textContent = goldPerSecond;
            } else if (type === 'auto3'){
                goldPerSecond += increment;
                textElement.textContent = upgradeStories.auto3[level];
                document.getElementById('gold-per-second').textContent = goldPerSecond;
            } else if (type === 'auto4'){
                goldPerSecond += increment;
                textElement.textContent = upgradeStories.auto4[level];
                document.getElementById('gold-per-second').textContent = goldPerSecond;
            }
            level++;
            document.getElementById('gold').textContent = `$ ${gold}`;         
            upgrade.setAttribute('data-level', level);
            if (level === 10) {
                button.textContent = "Nivel MAX";
            } else {
                const newCost = Math.floor(cost * 1.5);
                costElement.textContent = newCost;
                upgrade.setAttribute('data-cost', newCost);
            }
            updateUpgradeButtons();
            button.classList.add('bought');        
            showBackgroundEffects(type);

            // Actualizar historial de mejoras
            const historyList = document.getElementById('upgrade-history');
            const listItem = document.createElement('li');
            listItem.textContent = textElement.textContent;
            historyList.appendChild(listItem);
        }        
    });
});

function updateUpgradeButtons() {
    document.querySelectorAll('.buy-upgrade').forEach(button => {
        const upgrade = button.closest('.upgrade');
        const cost = parseInt(upgrade.getAttribute('data-cost'));
        const level = parseInt(upgrade.getAttribute('data-level'));
        if (gold >= cost && level < 10) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

// Generar oro automáticamente cada segundo y actualizar el temporizador
setInterval(() => {
    if (goldPerSecond > 0) {
        gold += goldPerSecond;
        document.getElementById('gold').textContent = `$ ${gold}`;
        updateUpgradeButtons();
        showGoldGainAnimation(goldPerSecond);
    }
    updateTimer();
}, 1000);