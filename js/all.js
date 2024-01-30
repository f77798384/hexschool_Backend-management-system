//sidebar
$('#toggle-btn').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('sidebar-toggled');
});
//order-delete
$('#deleteModal').on('show.bs.modal', function (e) {
    const button = e.relatedTarget;
    const orderId = $(button).attr('data-bs-order-id');
    $('#deleteText').text(orderId)
});
//toggle-#menu-order
$('#collapse-Menu').click(function(e){
    e.preventDefault();
    $('#collapse-Menu i').toggleClass('bi-caret-right-fill')
    $('#collapse-Menu i').toggleClass('bi-caret-down')
})