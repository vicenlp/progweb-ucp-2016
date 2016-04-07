var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Jose A. Fernandez";
    }

    self.items = function (cantidad) {
        
        var miLista = '<ul>';
        
        for (i = 1; i <= cantidad; i++) {
            miLista += '<li> J ' + i + '</li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    
    return self;
}();

module.exports = app;