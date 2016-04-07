var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Enzo Medina";
    }
    
    self.items = function (cantidad) {
        var unaLista='<ul>';
        for (var i = 1; i <= cantidad; i++) {
            unaLista = unaLista + '<li>Item'+i+' </li>';
        };   
        unaLista += '</ul>';
        return unaLista;
    }
    

    
    return self;
}();

module.exports = app;