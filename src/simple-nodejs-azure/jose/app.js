var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Jose A. Fernandez";
    }

    self.items = function () {
        return "Estoy desde mi App";
    }
    
    return self;
}();

module.exports = app;