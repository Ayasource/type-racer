// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const sampleTextEl = document.getElementById('sample-text');
    const difficultySelect = document.getElementById('difficulty');
    const levelDisplay = document.getElementById('level');
    const startBtn = document.getElementById('start-btn');

    const samples = {
        easy: [
            "The quick brown fox jumps over the lazy dog.",
            "Typing is fun when you take it slow and steady.",
            "Practice every day to improve your speed and accuracy."
        ],
        medium: [
            "Autumn leaves fell softly, creating a patchwork on the ground.",
            "She navigated the crowded market while humming an old tune.",
            "Technology advances quickly; adapt to stay productive and relevant."
        ],
        hard: [
            "Quizzical researchers juxtaposed complex hypotheses against empirical anomalies.",
            "Synthesis of disparate datasets requires meticulous normalization and validation.",
            "Perseverance, precision, and patience propel practitioners past persistent obstacles."
        ]
    };

    function getRandomSample(level) {
        const arr = samples[level] || samples.easy;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function displaySampleForCurrentDifficulty() {
        const level = difficultySelect.value;
        const sample = getRandomSample(level);
        sampleTextEl.textContent = sample;
        if (levelDisplay) {
            levelDisplay.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        }
    }

    // initial sample
    displaySampleForCurrentDifficulty();

    // update when difficulty changes
    difficultySelect.addEventListener('change', displaySampleForCurrentDifficulty);

    // pick a new sample when the user clicks Start
    if (startBtn) startBtn.addEventListener('click', displaySampleForCurrentDifficulty);
});
// ...existing code...
