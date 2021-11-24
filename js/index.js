var headerSelect = $('.header-select')[0]
$('#btnDropDown').on('click', ()=>{
    if(headerSelect.style.display=="block"){
        headerSelect.style.display="none";
        $('#btnDropDown').removeClass("rotated");
        $('#btnDropDown').addClass("unrotated");

    }else{
        $('html,body').scrollTop(0);
        headerSelect.style.display="block";
        $('#btnDropDown').addClass("rotated");
        $('#btnDropDown').removeClass("unrotated");
    }
    
    
    // grid-template-rows: auto 0vh 100vh auto;
});
$('#wpp-btn').on('click', ()=>{
    window.location.href="https://api.whatsapp.com/send/?phone=5519994071517&text=Ol%C3%A1+gostaria+de+saber+mais+sobre+voc%C3%AA";
})
// Scroll Event..
document.addEventListener('scroll', function (){
    if(document.body.getBoundingClientRect().top < -20){
        console.log("Rolou para baixo");
    }else{
        console.log("Não rolou para baixo.");
    }
});

