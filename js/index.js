<<<<<<< HEAD

=======
//
>>>>>>> 5dccc57c8f4f1466223e40137352d4d0ad093b8f
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
    window.location.href="https://api.whatsapp.com/send/?phone=5519994071517&text=Ol%C3%A1+gostaria+de+atendimento+jurídico";
})

// Scroll Event..


