function Order(id, customerId, itemCode, qty, price) {
    var __id = id;
    var __itemCode = itemCode;
    var __customerId = customerId;
    var __qty = qty;
    var __price = price;

    this.setId = function (id) {
        __id = id;
    }

    this.getId = function () {
        return __id;
    }

    this.setItemCode = function (itemCode) {
        __itemCode = itemCode;
    }

    this.getItmCode = function () {
        return __itemCode;
    }

    this.setCustomerId = function (customerId) {
        __customerId = customerId;
    }

    this.getCustomerId = function () {
        return __customerId;
    }

    this.setQty = function (qty) {
        __qty = qty;
    }

    this.getQty = function () {
        return __qty;
    }

    this.setPrice = function (price) {
        __price = price;
    }

    this.getPrice = function () {
        return __price;
    }
}