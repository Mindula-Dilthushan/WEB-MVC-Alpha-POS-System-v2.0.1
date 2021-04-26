function loadAllCus() {
    let data;
    $('#orderCustomer').empty();

    for (var i = 0; i < customerDB.length; i++) {
        data = `<option value="${customerDB[i].getCusId()}">${customerDB[i].getCusId()}</option>`;
        $('#orderCustomer').append(data);
    }
}

$('#orderCustomer').on('change', function (data) {
    let slectedValue = $('#orderCustomer :selected').val();

    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() == slectedValue) {
            $('#orderCustomerId').val(customerDB[i].getCusId());
            $('#orderCustomerName').val(customerDB[i].getName());
            $('#orderCustomerMobile').val(customerDB[i].getMobile());
            $('#orderCustomerAddress').val(customerDB[i].getAddress());
        }
    }
});

function loadAllItm() {
    let data;
    $('#orderItem').empty();

    for (var i = 0; i < itemDB.length; i++) {
        data = `<option value="${itemDB[i].getCode()}">${itemDB[i].getCode()}</option>`;
        $('#orderItem').append(data);
    }
}

$('#orderItem').on('change', function (data) {
    let slectedValue = $('#orderItem :selected').val();

    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == slectedValue) {
            $('#orderItemCode').val(itemDB[i].getCode());
            $('#orderItemName').val(itemDB[i].getName());
            $('#orderQtyOnHand').val(itemDB[i].getQty());
            $('#orderItemPrice').val(itemDB[i].getPrice());
        }
    }
});

function checkOrderFields() {
    if (checkByOne($('#orderId').val(), $('#orderId'))) {
        if (checkByOne($('#orderDate').val(), $('#orderDate'))) {
            if (checkByOne($('#orderCustomer').val(), $('#orderCustomer'))) {
                if (checkByOne($('#orderCustomerId').val(), $('#orderCustomerId'))) {
                    if (checkByOne($('#orderCustomerName').val(), $('#orderCustomerName'))) {
                        if (checkByOne($('#orderCustomerMobile').val(), $('#orderCustomerMobile'))) {
                            if (checkByOne($('#orderCustomerAddress').val(), $('#orderCustomerAddress'))) {
                                if (checkByOne($('#orderItem').val(), $('#orderItem'))) {
                                    if (checkByOne($('#orderItemCode').val(), $('#orderItemCode'))) {
                                        if (checkByOne($('#orderItemName').val(), $('#orderItemName'))) {
                                            if (checkByOne($('#orderItemPrice').val(), $('#orderItemPrice'))) {
                                                if (checkByOne($('#orderQtyOnHand').val(), $('#orderQtyOnHand'))) {
                                                    if (checkByOne($('#orderQty').val(), $('#orderQty'))) {
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function checkByOne(val, field) {
    if (val == '') {
        field.css({
            'border': '2px red solid'
        });
        field.focus();
        return false;
    } else {
        field.css({
            'border': '2px #CED4DA solid'
        });
        return true;
    }
}

$('#btnAddToCart').on('click', function () {
    if (checkOrderFields()) {
        let oId = $('#orderId').val();
        let oItmCode = $('#orderItemCode').val();
        let oCusId = $('#orderCustomerId').val();
        let oQty = parseFloat($('#orderQty').val());
        let oItmPrice = parseFloat($('#orderItemPrice').val());

        showOrderTableData(oId, oItmCode, oCusId, oQty, oItmPrice);
    }
});

$('#orderQty').on('keyup', function () {
    let qtyOnHand = parseFloat($('#orderQtyOnHand').val());
    let qty = parseFloat($('#orderQty').val());

    if (qtyOnHand < qty) {
        $('#oqty').show();
    } else {
        $('#oqty').hide();
    }
});

function showOrderTableData(orderId, itemCode, customerId, qty, price) {
    let checkRows = true;

    if (checkOrderFields()) {
        let itmcode = $('#orderitmcode').val();

        for (var i = 0; i < $('#tblOrder>tr').length; i++) {
            let tblitmcode = $($($('#tblOrder>tr').get(i)).children().get(1)).text();
            let tblitmqty = parseFloat($($($('#tblOrder>tr').get(i)).children().get(3)).text());

            if (itmcode == tblitmcode) {
                $($($('#tblOrder>tr').get(i)).children().get(3)).text(qty + tblitmqty);
                $($($('#tblOrder>tr').get(i)).children().get(4)).text((tblitmqty + qty) * price);
                checkRows = false;
            }
        }
    }

    if (checkRows) {
        let data = `<tr><th scope="row">${orderId}</th><td>${itemCode}</td><td>${customerId}</td><td>${qty}</td><td>${price * qty}</td></tr>`;
        $('#tblOrder').append(data);
    }
    setTotal();
}

function setTotal() {
    let tot = 0;
    $('#tblOrder>tr').each(function () {
        tot = tot + parseFloat($($(this).children().get(4)).text());
        $('#lblTotal').text(tot).append('.00');
    });
    t = tot;
}

$('#txtCash').on('keyup', function () {
    if ($('#txtCash').val() == '') {
        $('#lbLabel').text('0.00');
    } else {
        let subtot = parseFloat($('#lblSubTot').text());
        let cash = parseFloat($('#txtCash').val());

        let last = cash - subtot;
        $('#lbLabel').text(last).append('.00 Rs/=');
    }
});

$('#txtDiscount').on('keyup', function () {
    if ($('#txtDiscount').val() == '') {
        $('#lblSubTot').text('0.00');
    } else {
        let tot = parseFloat(t);
        let dis = parseFloat($('#txtDiscount').val());

        $('#lblSubTot').text(tot - dis).append('.00');
    }
});

$('#txtDiscount').on('blur', function () {
    if ($('#txtDiscount').val() == '') {
        $('#lblDis').css({
            'display': 'block'
        });
    } else {
        $('#lblDis').css({
            'display': 'none'
        });
    }
});

$('#purchase').on('click', function () {
    let isAdded;
    $('#tblOrder>tr').each(function () {
        let oId = $($(this).children().get(0)).text();
        let oItmCode = $($(this).children().get(1)).text();
        let oCusId = $($(this).children().get(2)).text();
        let oQty = $($(this).children().get(3)).text();
        let oItmPrice = $($(this).children().get(4)).text();

        isAdded = orderList(new Order(oId, oCusId, oItmCode, oQty, oItmPrice));
    });

    if (isAdded) {
        alert('Order Purchased!');
    }
});