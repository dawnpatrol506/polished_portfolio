$(document).ready(() =>{
    const viewRoot = $('.view-root');
    var currentView = '';
    
    function aboutView(){

        currentView = "about";
    }

    function contactView(){

    }

    function portfolioView(){

    }

    $(document).on('click', '.change-view', function(event){
        aboutView();
    })

    //listeners
    $('.sidenav').sidenav();


});