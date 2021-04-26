function Item(code, name, price, qty) {
    var __code = code;
    var __name = name;
    var __price = price;
    var __qty = qty;

    this.setCode = function (code) {
        __code = code;
    }

    this.getCode = function () {
        return __code;
    }

    this.setName = function (name) {
        __name = name;
    }

    this.getName = function () {
        return __name;
    }

    this.setPrice = function (price) {
        __price = price;
    }

    this.getPrice = function () {
        return __price;
    }

    this.setQty = function (qty) {
        __qty = qty;
    }

    this.getQty = function () {
        return __qty;
    }
}