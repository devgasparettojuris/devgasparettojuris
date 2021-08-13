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
document.addEventListener('scroll', function (){
    if(document.body.getBoundingClientRect().top < -20){
        console.log("Rolou para baixo");
    }else{
        console.log("Não rolou para baixo.");
    }
});
