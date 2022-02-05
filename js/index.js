const buttonStart = document.querySelector('#btn-start');
const buttonStop = document.querySelector('#btn-stop');
//конст дата
const tHours = document.querySelector('[data-hours]');
const tMinutes = document.querySelector('[data-minutes]');
const tSeconds = document.querySelector('[data-seconds]');



const timer = {
    intervalId: null,
    start() {
        const startTime = Date.now(); 
        
        this.intervalId = setInterval(() => {
            const currentTime = Date.now(); 
            const deltaTime = currentTime - startTime; 
            const { hours, minute, sec } = getTimeComponents(deltaTime);
            
            tHours.textContent = hours;
            tMinutes.textContent = minute;
            tSeconds.textContent = sec;
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
    }
};
buttonStart.addEventListener('click', () => {
    timer.start()
}); 
buttonStop.addEventListener('click', () => {
    timer.stop()
});


function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const hours = pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minute = pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
    const sec = pad(Math.floor(time % (1000 * 60) / 1000)); 

    return { hours, minute, sec }; 
}

  // console.log(`${hours}:${minute}:${sec}`);