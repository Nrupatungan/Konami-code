const question = document.querySelector('.question')
const hint = document.querySelector('.hint')
const pressed = [];
const secretCode = ['sporange', 'blorenge'];

window.addEventListener('load', () => {
    if(window.innerWidth > 550){
        question.setAttribute('title', 'Type your answer on keyboard')
        question.innerText = "What rhymes with Orange?"
    }
    else{
        question.removeAttribute('title')
        question.innerText = "Click to see something weird"
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 550){
        question.setAttribute('title', 'Type your answer on keyboard')
        question.innerText = "What rhymes with Orange?"
    }
    else{
        question.removeAttribute('title')
        question.innerText = "Click to see something weird"
    }
})

document.body.addEventListener('click', () => {
    if(window.innerWidth <= 550){
        cornify_add();
        question.style.display = "none";
        hint.style.display = "none";
    }
})

window.addEventListener('keyup', e => {
    pressed.push(e.key)
    pressed.splice(-secretCode - 1, pressed.length - secretCode[0].length)
    console.log(pressed)
    if(pressed.join('').includes(secretCode[0]) || pressed.join('').includes(secretCode[1])){
        cornify_add(); 
        question.style.display = "none";
        hint.style.display = "none";
    }
})