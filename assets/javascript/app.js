$( document ).ready(function() {

    $('#first-question').hide();

    $('.btn').on('click', function(){
        $('#start').hide();
        $('#first-question').show();
    })
});