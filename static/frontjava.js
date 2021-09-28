$('#drp-dwn').on('click', function(e) {
    $('#drp-dwn ul').toggleClass('active');
    e.stopPropagation();
});
$(document).on('click', function() {

    if ($('.active').length > 0) {
        $('#drp-dwn ul').toggleClass('active');
    }
});

//------------------------------- making anchor tag a button---------------------------------
$('#btn_sec a').on('mousedown', function() {
    $('#btn_sec a').css({ "border-color": "black gray gray black", "border-style": "solid" });
    console.log("jkj");
});
$('#btn_sec a').on('mouseup', function() {
    $('#btn_sec a').css({ "border-color": "gray black black gray", "border-style": "solid" });
    console.log("jkj");
});
//-------------------------------------------------------------------------------------------