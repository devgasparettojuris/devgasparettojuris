var headerSelect = $('.header-select')[0]
$('#btnDropDown').on('click', ()=>{
    if(headerSelect.style.display=="block"){
        headerSelect.style.display="none";
    }else{
        headerSelect.style.display="block";
    }
    
    // grid-template-rows: auto 0vh 100vh auto;
});
