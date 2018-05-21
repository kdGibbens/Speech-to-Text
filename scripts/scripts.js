window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

var p = document.createElement('p');
var speech = document.querySelector('.speech');
speech.appendChild(p);
  

recognition.addEventListener('result', e => {
    var transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      console.log(transcript);
      p.textContent = transcript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        speech.appendChild(p);
        }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
