document.addEventListener("DOMContentLoaded", function() {
    // Elegant context menu prevention
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Audio integration logic allowing it to seamlessly link with the CSS :active pseudo-class interactions
    const holdTrigger = document.getElementById("glass-trigger");
    const audioTrack = document.getElementById("activeAudio");

    if (holdTrigger && audioTrack) {
        const startMagic = () => {
            audioTrack.currentTime = 0;
            audioTrack.play().catch(e => {
                console.log("Audio requires initial DOM interaction from user.");
            });
        };
        
        const stopMagic = () => {
            audioTrack.pause();
        };

        // Hook up mouse and touch events
        holdTrigger.addEventListener("mousedown", startMagic);
        holdTrigger.addEventListener("touchstart", startMagic, { passive: true });
        
        window.addEventListener("mouseup", stopMagic);
        window.addEventListener("touchend", stopMagic);
    }
});
