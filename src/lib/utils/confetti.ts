import confetti from "canvas-confetti";

const duration = 1200;
const animationEnd = Date.now() + duration;

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

/**
 * 🎆 Fireworks effect
 */
function fireFireworks() {
    const duration = 1200;
    const animationEnd = Date.now() + duration;
    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
    (function frame() {
        var timeLeft = animationEnd - Date.now();
        var particleCount = 50 * (timeLeft / duration);
        confetti({
            particleCount,
            spread: 360,
            startVelocity: 50,
            ticks: 300,
            origin: {
                x: randomInRange(0.2, 0.8),
                y: randomInRange(0.1, 0.4),
            },
        });
        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    })();
}

/**
 * 🎓 School Pride effect
 */
function fireSchoolPride() {
    const duration = 1200;
    const animationEnd = Date.now() + duration;
    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0 },
            startVelocity: 55,
            ticks: 100,
            colors: ["#2563eb", "#22c55e", "#eab308"],
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            startVelocity: 55,
            ticks: 100,
            origin: { x: 1 },
            colors: ["#2563eb", "#22c55e", "#eab308"],
        });
        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}

/**
 * 🎉 Combined Celebration
 */
export function fireMegaCelebration() {
    const frame = () => {
        fireFireworks();
        fireSchoolPride();

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    };

    frame();
}
