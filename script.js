const instagram = document.getElementById('instagram'); 
const email = document.getElementById('email'); 
const whatsapp = document.getElementById('whatsapp');
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
function redWhatsapp(){
    whatsapp.classList.add('ativo');
    setTimeout(() => {
        window.open("https://api.whatsapp.com/send?phone=5562993471007&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQCzt_aYLsNIfCdbRl9FQx50n3SOCjIz8ysQJq29SG2-dac5KWZ9lMva0GvA_aem_woJffrlJsmsKHU4NCUug4g", "_blank")
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
whatsapp.addEventListener('click', redWhatsapp); 
tiktok.addEventListener('click', redTiktok);
