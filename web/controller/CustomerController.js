$('#saveCustomer').click(function () {

    let id = $('#customerId').val();
    let name = $('#customerName').val();
    let mobile = $('#customerMobile').val();
    let address = $('#customerAddress').val();

    if (checkFields()) {
        if (checkCustomerID()){
            if (checkCustomerName()){
                if (checkCustomerAddress()){
                    if (checkMobile()){
                        let isAdded = cusList(new Customer(id, name, mobile, address));
                        if (isAdded > 0) {
                            showTableData();
                            clearFields();
                            $('#customerId').focus();
                        } else {
                            alert('Wrong Data');
                        }
                    }
                }
            }
        }
    }

    $('#customerTBody>tr').last().on('click', function () {
        $('#customerId').val($($(this).children().get(0)).text());
        $('#customerName').val($($(this).children().get(1)).text());
        $('#customerMobile').val($($(this).children().get(2)).text());
        $('#customerAddress').val($($(this).children().get(3)).text());
    });


    $('#customerTBody>tr').last().on('dblclick', function () {
        for (var i = 0; i < customerDB.length; i++) {
            if (($($(this).children().get(0)).text()) == customerDB[i].getCusId()) {
                customerDB.splice(i, 1);
                $(this).remove();
                clearFields();
            }
        }

    });
});

function checkFields() {
    let id = $('#customerId').val();
    let name = $('#customerName').val();
    let mobile = $('#customerMobile').val();
    let address = $('#customerAddress').val();

    if (id == '') {
        $('#customerId').css({
            'border': '2px red solid'
        });
        $('#customerId').focus();
        return false;
    } else {
        $('#customerId').css({
            'border': '2px #CED4DA solid'
        });
        if (name == '') {
            $('#customerName').css({
                'border': '2px red solid'
            });
            $('#customerName').focus();
            return false;
        } else {
            $('#customerName').css({
                'border': '2px #CED4DA solid'
            });
            if (mobile == '') {
                $('#customerMobile').css({
                    'border': '2px red solid'
                });
                $('#customerMobile').focus();
                return false;
            } else {
                $('#customerMobile').css({
                    'border': '2px #CED4DA solid'
                });
                if (address == '') {
                    $('#customerAddress').css({
                        'border': '2px red solid'
                    });
                    $('#customerAddress').focus();
                    return false;
                } else {
                    $('#customerAddress').css({
                        'border': '2px #CED4DA solid'
                    });
                    return true;
                }
            }
        }
    }
}

function showTableData() {
    let data;
    for (var i = 0; i < customerDB.length; i++) {
        data = `<tr><th scope="row">${customerDB[i].getCusId()}</th><td>${customerDB[i].getName()}</td><td>${customerDB[i].getMobile()}</td><td>${customerDB[i].getAddress()}</td></tr>`;
    }
    $('#customerTBody').append(data);
}

function clearFields() {
    $('#customerId').val('');
    $('#customerName').val('');
    $('#customerMobile').val('');
    $('#customerAddress').val('');
}

$('#customerId').on('keyup', function (data) {
    if (data.key == 'Enter') {
        if (checkFields()) {
            $('#customerName').focus();
        }
    }
});

$('#customerName').on('keyup', function (data) {
    if (data.key == 'Enter') {
        if (checkFields()) {
            $('#customerMobile').focus();
        }
    }
});

$('#customerMobile').on('keyup', function (data) {
    if (data.key == 'Enter') {
        if (checkFields()) {
            $('#customerAddress').focus();
        }
    }
});

$('#customerAddress').on('keyup', function (data) {
    if (data.key == 'Enter') {
        if (checkFields()) {
            $('#saveCustomer').focus();
        }
    }
});

$('#saveCustomer').on('keyup', function (data) {
    if (data.key == 'Enter') {
        if (checkFields()) {
            $('#customerId').focus();
        }
    }
});

$('#updateCustomer').on('click', function () {
    let id = $('#customerId').val();
    let name = $('#customerName').val();
    let mobile = $('#customerMobile').val();
    let address = $('#customerAddress').val();

    if (checkCustomerID()){
        if (checkCustomerName()){
            if (checkCustomerAddress()){
                if (checkMobile()){
                    $('#customerTBody>tr').each(function () {
                        if (id == $($(this).children().get(0)).text()) {
                            $($(this).children().get(1)).text(name);
                            $($(this).children().get(2)).text(mobile);
                            $($(this).children().get(3)).text(address);
                        }
                    });
                    clearFields();
                }
            }

        }
    }
});

$('#clearCustomer').on('click', function () {
    clearFields();
});

function checkCustomerID() {
    if (/^(C)[0-9]{1,3}$/.test($('#customerId').val())) {

        $('#customerId').css('border', '2px solid green');
        $("#customerId").text(" ");
        return true;

    } else {
        $('#customerId').css('border', '2px solid red');
        $("#customerId").text("Your Input Data Format is Wrong (C1)");
    }
    return false;

}
function checkCustomerName() {
    if (/^[A-z ]{1,}$/.test($('#customerName').val())) {
        $('#customerName').css('border', '2px solid green');
        $("#customerName").text(" ");
        return true;
    } else {
        $('#customerName').css('border', '2px solid red');
        $("#customerName").text("Your Input Data Format is Wrong (Kamal)");
    }
    return false;

}

function checkCustomerAddress() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#customerAddress').val())) {
        $('#customerAddress').css('border', '2px solid green');
        $("#customerAddress").text(" ");
        return true;
    } else {
        $('#customerAddress').css('border', '2px solid red');
        $("#customerAddress").text("Your Input Data Format is Wrong (No9:Matara)");
    }
    return false;
}

function checkMobile() {
    if (/^[0-9]{10}$/.test($('#customerMobile').val())) {//  ("^\\d{10}$")
        $('#customerMobile').css('border', '2px solid green');
        $("#customerMobile").text(" ");
        return true;
    } else {
        $('#customerMobile').css('border', '2px solid red');
        $("#customerMobile").text("Your Input Data Format is Wrong (0712345678)");

    }
    return false;
}

