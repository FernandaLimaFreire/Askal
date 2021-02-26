function send2form(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe36Ao6fTPgiVoazqSDdod4vCO-rKKYwaFLbjuHrHZ0o27X7A/viewform', '_blank');
}

function redirect(){
    window.location.href = "mailto:ASKAL.RacaoSolidaria@gmail.com";
}
function toInsta(){
    window.open('https://www.instagram.com/askalprojetosolidario/', '_blank');
}

var portuguese = document.getElementById('pt_click'),
    english = document.getElementById('en_click'),
    spanish = document.getElementById('fr_click')

portuguese.addEventListener('click', function() {
    var page = window.location.pathname;
    page = page.replace("es/","")
    page = page.replace("/es","")
    page = page.replace("en/","")
    page = page.replace("/en","")
    console.log(page)
    if(!page.startsWith('/')){
        page='/'+page
    }
    if(page===""){
        window.location.replace("/")
    }else{
        window.location.replace('http://'+window.location.host+page)
    }
}, false);

english.addEventListener('click', function() {
    var page = window.location.pathname;
    page = page.replace("/es/","")
    page = page.replace("/es","")
    page = page.replace("/en","")
    if(!page.startsWith('/')){
        page='/'+page
    }
    if(page===""){
        window.location.replace("/en")
    }else{
        window.location.replace('http://'+window.location.host+"/en"+page)
    }
}, false);

spanish.addEventListener('click', function() {
    var page = window.location.pathname;
    page = page.replace("/en/","")
    page = page.replace("/en","")
    window.location.replace("/es")
    if(!page.startsWith('/')){
        page='/'+page
    }
    if(page===""){
        window.location.replace("/")
    }else{
        window.location.replace('http://'+window.location.host+"/es"+page)
    }
}, false);