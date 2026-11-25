const instagram = document.getElementById('instagram'); 
const email = document.getElementById('email'); 
const tiktok = document.getElementById('tiktok'); 

function redInsta(){
    instagram.classList.add('ativo');
    setTimeout(() => {
        window.open("https://www.instagram.com/mih.a_rts/", "_blank")
    }, 1700);
}
function redEmail(){
    email.classList.add('ativo');
    setTimeout(() => {
        window.open('https://mail.google.com/mail/u/0/?hl=pt-BR&tf=cm&fs=1&to=soaresribeiromillena91@gmail.com', '_blank');
    }, 1700);
}

function redTiktok(){
    tiktok.classList.add('ativo');
    setTimeout(() => {
        
        window.open("https://www.tiktok.com/@miharts01", "_blank")
    }, 1700);
}

instagram.addEventListener('click', redInsta); 
email.addEventListener('click', redEmail); 
tiktok.addEventListener('click', redTiktok);
