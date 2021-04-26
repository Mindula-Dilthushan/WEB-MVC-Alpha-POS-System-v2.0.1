function Customer(id, name, mobile, address) {
    var __id = id;
    var __name = name;
    var __mobile = mobile;
    var __address = address;

    this.getCusId = function () {
        return __id;
    }

    this.setCusId = function (setId) {
        __id = setId;
    }

    this.getName = function () {
        return __name;
    }

    this.setName = function (setName) {
        __name = setName;
    }

    this.getMobile = function () {
        return __mobile;
    }

    this.setMobile = function (setMobile) {
        __mobile = setMobile;
    }

    this.getAddress = function () {
        return __address;
    }

    this.setAddress = function (setAddress) {
        __address = setAddress;
    }
}