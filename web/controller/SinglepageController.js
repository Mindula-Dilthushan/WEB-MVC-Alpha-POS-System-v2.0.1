$('#btnHome').on('click', function () {
    $('#selectHome').css({
        'display': 'block'
    });
    $('#selectCustomer').css({
        'display': 'none'
    });
    $('#selectItem').css({
        'display': 'none'
    });
    $('#selectOrder').css({
        'display': 'none'
    });
});

$('#btnCust').on('click', function () {
    $('#selectHome').css({
        'display': 'none'
    });
    $('#selectCustomer').css({
        'display': 'block'
    });
    $('#selectItem').css({
        'display': 'none'
    });
    $('#selectOrder').css({
        'display': 'none'
    });
});

$('#btnItem').on('click', function () {
    $('#selectHome').css({
        'display': 'none'
    });
    $('#selectCustomer').css({
        'display': 'none'
    });
    $('#selectItem').css({
        'display': 'block'
    });
    $('#selectOrder').css({
        'display': 'none'
    });
});

$('#btnOrder').on('click', function () {
    $('#selectHome').css({
        'display': 'none'
    });
    $('#selectCustomer').css({
        'display': 'none'
    });
    $('#selectItem').css({
        'display': 'none'
    });
    $('#selectOrder').css({
        'display': 'block'
    });

    loadAllCus();
    loadAllItm();
});