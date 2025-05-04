const startBtn = document.getElementById('startBtn');  
    const stopBtn = document.getElementById('stopBtn');  
    const textGuide = document.getElementById('textGuide');  
    const timeInput = document.getElementById('timeInput');  
    const timeUnit = document.getElementById('timeUnit');  
    const strobeDiv = document.getElementById('strobe');  
    const music = document.getElementById('music');  
  
    let audioCtx, oscLeft, oscRight, gainNode, pannerLeft, pannerRight;  
    let strobeInterval;  
  
    function startSession() {  
      startBtn.disabled = true;  
      stopBtn.disabled = false;  
  
      const synth = window.speechSynthesis;  
      const utterance = new SpeechSynthesisUtterance(textGuide.value.trim());  
      utterance.lang = 'bn-BD';  
      utterance.pitch = 0.7;  
      utterance.rate = 0.85;  
      synth.speak(utterance);  
  
      music.play();  
  
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();  
      oscLeft = audioCtx.createOscillator();  
      oscRight = audioCtx.createOscillator();  
      oscLeft.type = 'sine';  
      oscRight.type = 'sine';  
      const baseFreq = 200;  
      const deltaFreq = 6;  
      oscLeft.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);  
      oscRight.frequency.setValueAtTime(baseFreq + deltaFreq, audioCtx.currentTime);  
  
      pannerLeft = audioCtx.createStereoPanner();  
      pannerRight = audioCtx.createStereoPanner();  
      pannerLeft.pan.setValueAtTime(-1, audioCtx.currentTime);  
      pannerRight.pan.setValueAtTime(1, audioCtx.currentTime);  
  
      gainNode = audioCtx.createGain();  
      gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);  
  
      oscLeft.connect(gainNode).connect(pannerLeft).connect(audioCtx.destination);  
      oscRight.connect(gainNode).connect(pannerRight).connect(audioCtx.destination);  
      oscLeft.start();  
      oscRight.start();  
  
      strobeInterval = setInterval(() => {  
        strobeDiv.style.display = (strobeDiv.style.display === 'block' ? 'none' : 'block');  
      }, 600);  
  
      let timeVal = parseInt(timeInput.value) || 0;  
      if (timeUnit.value === 'minutes') timeVal *= 60;  
      setTimeout(stopSession, timeVal * 1000);  
    }  
  
    function stopSession() {  
      startBtn.disabled = false;  
      stopBtn.disabled = true;  
  
      window.speechSynthesis.cancel();  
      music.pause();  
      music.currentTime = 0;  
  
      if (oscLeft) oscLeft.stop();  
      if (oscRight) oscRight.stop();  
      clearInterval(strobeInterval);  
      strobeDiv.style.display = 'none';  
  
      if (audioCtx) audioCtx.close();  
    }  
  
    startBtn.addEventListener('click', startSession);  
    stopBtn.addEventListener('click', stopSession);  