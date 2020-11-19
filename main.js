let texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {

    let text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p); 

    if(e.results[0].isFinal){
        if (text.includes('hello')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        if (text.includes('What Is your name')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'My name is Pman, yours?';
            texts.appendChild(p);
        }
        if (text.includes('open reddit')) {
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Opening Reddit';
            texts.appendChild(p);
            window.open('https://www.reddit.com/')
        }
        p = document.createElement('p');
    }

    console.log(text);
})

recognition.addEventListener('end', () => {
 recognition.start();
})

recognition.start();

