// Start the random lightning effect
startRandomLightning();


function flashLightning(count) {
    const lightning = document.querySelector('.lightning');
    
    // This function will flash the lightning multiple times
    let flashes = 0;
    
    const flashInterval = setInterval(() => {
        lightning.style.opacity = 1; // Show the flash
        setTimeout(() => {
            lightning.style.opacity = 0; // Hide the flash
        }, 100); // Duration of the flash effect (100 ms)

        flashes++;

        // Stop flashing after the specified count
        if (flashes >= count) {
            clearInterval(flashInterval);
        }
    }, 200); // Interval between flashes (200 ms)
}

function startRandomLightning() {
    const minInterval = 3000; // Minimum interval (3 seconds)
    const maxInterval = 6000; // Maximum interval (6 seconds)

    setInterval(() => {
        // Randomly choose how many times to flash (between 2 and 5 flashes)
        const flashCount = Math.floor(Math.random() * 4) + 2; // Between 2 and 5
        flashLightning(flashCount);
    }, Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval);
}

// Start the random lightning effect
startRandomLightning();
