let timers = {}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 100); // Adding milliseconds

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  }

function startClock(clock1) {
    if (!timers[clock1]) {
      let time = 0;
      timers[clock1] = setInterval(() => {
        time += 0.01; // Increase time by 0.01 seconds
        document.getElementById(`clock${clock1}`).textContent = formatTime(time);
      }, 10);
    }
  };

function startClock(clock2) {
    if (!timers[clock2]) {
      let time = 0;
      timers[clock2] = setInterval(() => {
        time += 0.01;
        document.getElementById(`clock${clock2}`).textContent = formatTime(time);
      }, 10);
    }
  };

  function stopClock(clock1) {
    clearInterval(timers[clock1]);
    timers[clock1] = null;
    document.getElementById(`clock${clock1}`).textContent = '00:00.00'; 
  };

  function stopClock(clock2) {
    clearInterval(timers[clock2]);
    timers[clock2] = null;
    document.getElementById(`clock${clock2}`).textContent = '00:00.00'; 
  };

  function stopAllClocks() {
    for (let chrono in timers) {
      clearInterval(timers[chrono]);
      timers[chrono] = null;
      document.getElementById(`clock${chrono}`).textContent = '00:00.00'; // Reset time
    }
  }
