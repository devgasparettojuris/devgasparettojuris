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
// Scroll Event..

$('#wpp-btn').on('click', ()=>{
    window.location.href="https://api.whatsapp.com/send/?phone=551933295879&text=Ol%C3%A1+gostaria+de+atendimento+jurídico";
})
$('#insta-btn').on('click', ()=>{
    window.location.href="https://www.instagram.com/karoline_gasparetto/";
})
$('#maps-btn').on('click', ()=>{
    window.location.href="https://www.google.com/maps?ll=-23.095518,-47.223748&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+das+Orqu%C3%ADdeas,+777+-+Vila+Bergamo+Indaiatuba+-+SP+13345-040";
})


// Scroll Event..


