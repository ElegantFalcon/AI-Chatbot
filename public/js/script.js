const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

document.querySelector('button').addEventListener('click', () => {
    recognition.start();
  });
  

  recognition.addEventListener('result', (e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
  
    console.log('Confidence: ' + e.results[0][0].confidence);
  
    const socket = io();

  });

  function synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
  }
  
  
  socket.on('bot reply', function(replyText) {
    synthVoice(replyText);
  });
  