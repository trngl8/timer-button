const buttonTimer = document.querySelector('#btn-timer');
buttonTimer.addEventListener('click', () => {
    timer.start()
}); 
//конст дата
const tHours = document.querySelector('[data-hours]');
const tMinutes = document.querySelector('[data-minutes]');
const tSeconds = document.querySelector('[data-seconds]');



const timer = {
    start() {
        const startTime = Date.now(); 
        
        setInterval(() => {
            const currentTime = Date.now(); 
            const deltaTime = currentTime - startTime; 
            const { hours, minute, sec } = getTimeComponents(deltaTime);
            
            tHours.textContent = hours;
            tMinutes.textContent = minute;
            tSeconds.textContent = sec;
            // console.log(`${hours}:${minute}:${sec}`);
        }, 1000);
    },
};


function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const hours = pad(Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minute = pad(Math.floor(time % (1000 * 60 * 60) / (1000 * 60)));
    const sec = pad(Math.floor(time % (1000 * 60) / 1000)); 

    return { hours, minute, sec }; 
}
