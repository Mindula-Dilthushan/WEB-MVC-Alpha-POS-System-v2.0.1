$('#saveItem').on('click', function () {

    let itemCode = $('#itemCode').val();
    let itemName = $('#itemName').val();
    let itemPrice = $('#itemPrice').val();
    let itemQty = $('#itemQty').val();

    if (checkItemFields()) {
        let isAdded = itemList(new Item(itemCode, itemName, itemPrice, itemQty));
        if (isAdded > 0) {
            showItemTableData();
            clearItemFields();
            $('#itemCode').focus();
        } else {
            alert('Wrong Data');
        }
    }

    $('#itemTBody>tr').last().on('click', function () {
        $('#itemCode').val($($(this).children().get(0)).text());
        $('#itemName').val($($(this).children().get(1)).text());
        $('#itemPrice').val($($(this).children().get(2)).text());
        $('#itemQty').val($($(this).children().get(3)).text());
    });

    $('#itemTBody>tr').last().on('dblclick', function () {
        $(this).remove();
    });
});

function checkItemFields() {
    let code = $('#itemCode').val();
    let name = $('#itemName').val();
    let price = $('#itemPrice').val();
    let qty = $('#itemQty').val();

    if (code == '') {
        $('#itemCode').css({
            'border': '2px red solid'
        });
        $('#itemCode').focus();
        return false;
    } else {
        $('#itemCode').css({
            'border': '2px #CED4DA solid'
        });
        if (name == '') {
            $('#itemName').css({
                'border': '2px red solid'
            });
            $('#itemName').focus();
            return false;
        } else {
            $('#itemName').css({
                'border': '2px #CED4DA solid'
            });
            if (price == '') {
                $('#itemPrice').css({
                    'border': '2px red solid'
                });
                $('#itemPrice').focus();
                return false;
            } else {
                $('#itemPrice').css({
                    'border': '2px #CED4DA solid'
                });
                if (qty == '') {
                    $('#itemQty').css({
                        'border': '2px red solid'
                    });
                    $('#itemQty').focus();
                    return false;
                } else {
                    $('#itemQty').css({
                        'border': '2px #CED4DA solid'
                    });
                    return true;
                }
            }
        }
    }
}

function showItemTableData() {
    let data;
    for (var i = 0; i < itemDB.length; i++) {
        data = `<tr><th scope="row">${itemDB[i].getCode()}</th><td>${itemDB[i].getName()}</td><td>${itemDB[i].getPrice()}</td><td>${itemDB[i].getQty()}</td></tr>`;
    }
    $('#itemTBody').append(data);
}

function clearItemFields() {
    $('#itemCode').val('');
    $('#itemName').val('');
    $('#itemPrice').val('');
    $('#itemQty').val('');
}

$('#updateItem').on('click', function () {
    let itemCode = $('#itemCode').val();
    let itemName = $('#itemName').val();
    let itemPrice = $('#itemPrice').val();
    let itemQty = $('#itemQty').val();

    $('#itemTBody>tr').each(function () {
        if (itemCode == $($(this).children().get(0)).text()) {
            $($(this).children().get(1)).text(itemName);
            $($(this).children().get(2)).text(itemPrice);
            $($(this).children().get(3)).text(itemQty);
        }
    });
    clearItemFields();
});
$('#clearItem').on('click', function () {
    clearItemFields();
});

$('#itemCode').on('keypress', function (data) {
    if (data.key == 'Enter') {
        if (checkItemFields()) {
            $('#itemName').focus();
        }
    }
});

$('#itemName').on('keypress', function (data) {
    if (data.key == 'Enter') {
        if (checkItemFields()) {
            $('#itemPrice').focus();
        }
    }
});

$('#itemPrice').on('keypress', function (data) {
    if (data.key == 'Enter') {
        if (checkItemFields()) {
            $('#itemQty').focus();
        }
    }
});

$('#itemQty').on('keypress', function (data) {
    if (data.key == 'Enter') {
        if (checkItemFields()) {
            $('#saveItem').focus();
        }
    }
});
