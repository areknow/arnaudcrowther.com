function initialize() {
    hideAllPages();
    showProfile();
    scrollToTop();
}

function hideAllPages() {
    $( "#page-profile" ).hide();
    $( "#btn-profile" ).removeClass('selected');
    $( "#page-work" ).hide();
    $( "#btn-work" ).removeClass('selected');
    $( "#page-resume" ).hide();
    $( "#btn-resume" ).removeClass('selected');
    $( "#page-contact" ).hide();
    $( "#btn-contact" ).removeClass('selected');
}

function showProfile() {
    $( "#page-profile" ).show();
    $( "#btn-profile" ).addClass('selected');
}

function showWork() {
    $( "#page-work" ).show();
    $( "#btn-work" ).addClass('selected');
}

function showResume() {
    $( "#page-resume" ).show();
    $( "#btn-resume" ).addClass('selected');
}

function showContact() {
    $( "#page-contact" ).show();
    $( "#btn-contact" ).addClass('selected');
    initializeMap();
}

function ifMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $( "#mobile-profile-info" ).removeClass('animated flipInXSmall'); 
        $( "#mobile-profile-info" ).delay().addClass('animated fadeInUp');
        $( "#portfolio .work" ).removeClass('animated flipInYSmall'); 
        $( "#portfolio .work" ).addClass('animated zoomIn');
        $( "#map_canvas" ).removeClass('animated flipInXSmall'); 
        $( "#map_canvas" ).addClass('animated fadeInDownSmall');
    }
}
function scrollToTop() {
    $('body,html').animate({scrollTop: 0}, 100);
    return false;
}

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}








$( document ).ready(function() {
    initialize();
    ifMobile();
	
	

    //regular nav buttons
    $( "#btn-profile" ).click(function() {
        hideAllPages();
        showProfile();
    });
    $( "#btn-work" ).click(function() {
        hideAllPages();
        showWork();
    });
    $( "#btn-resume" ).click(function() {
        hideAllPages();
        showResume();
    });
    $( "#btn-contact" ).click(function() {
        hideAllPages();
        showContact();
    });

    //mobile nav buttons
    $( "#mbl-btn-profile" ).click(function() {
        hideAllPages();
        showProfile();
        scrollToTop();
    });
    $( "#mbl-btn-work" ).click(function() {
        hideAllPages();
        showWork();
        scrollToTop();
    });
    $( "#mbl-btn-resume" ).click(function() {
        hideAllPages();
        showResume();
        scrollToTop();
    });
    $( "#mbl-btn-contact" ).click(function() {
        hideAllPages();
        showContact();
        scrollToTop();
    });
    
    $('.tooltip').tooltipster({
       animation: 'grow',
       delay: 20,
       theme: 'my-custom-theme',
       touchDevices: false,
       onlyOne: true,
       trigger: 'hover'
    });
	
});