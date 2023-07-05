/*ACHIEVEMENT*/
$(document).ready(function() {
    $('.filter li').click(function() {
        $('.filter li').removeClass('active');
        $(this).addClass('active');
  
        var selectedFilter = $(this).data('filter');
        if (selectedFilter === 'all') {
            $('.images .image').show();
        } else {
            $('.images .image').hide();
            $('.images .image.' + selectedFilter).show();
        }
    });
});
/*ACHIEVEMENT*/