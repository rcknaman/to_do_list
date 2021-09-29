var flag;
$('#drp-dwn #drp-txt').on('click', function(e) {
    $('#drp-dwn ul').toggleClass('active');
    e.stopPropagation();
    flag = 1;
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



//-----------------------------------------------fetching value----------------------------

$('#drp-dwn ul li').mouseleave(function() {
    if ($('#drp-dwn input').attr('value') == "") {
        $('#drp-txt p').text('Category');
    }
});
$('#drp-dwn ul li').mouseenter(function() {
    if (flag == 1) {
        $('#drp-txt p').text($(this).text());

        $('#drp-dwn ul li').on('click', function() {
            $('#drp-dwn input').attr('value', $(this).text());
            $('#drp-txt p').text($(this).text());
            flag = 0;
        });
    }
});



//------------------------------------------------------------

$('.todo input').on('click',function(){

    $(this).toggleClass('checked');

})
$('#btn_sec a').on('click',function(){
    let arr=document.querySelectorAll('.todo input');
    for(let i=0;i<arr.length;i++){
        let elem=arr[i];
        if(elem.classList.contains('checked')){
            if(i==arr.length-1){
                $(this).attr('href',$(this).attr('href')+""+elem.getAttribute("value"));
            }
            else{
                $(this).attr('href',$(this).attr('href')+elem.getAttribute("value"))+",";
            }
        }
    }
});
//--------------------------------------------------------------------------------

// setInterval(function(){
    
//     setTimeout(function(){
//         $('#todolist').css('background-color','red');
//     },200);
//     setTimeout(function(){
//         $('#todolist').css('background-color','green');
//     },400);
//     setTimeout(function(){
//         $('#todolist').css('background-color','blue');
//     },600);
// },600)


// setInterval(function(){
//     document.getElementById('todolist').style.opacity=1-document.getElementById('todolist').style.opacity;
// },200)
// $('#todolist').css('background-color','green');