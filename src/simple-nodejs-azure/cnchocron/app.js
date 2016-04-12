var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristhian Chocron";
    }

    self.items = function (cantidad) {
        
        var miLista = '<ul>';

        for (i = 1; i <= cantidad; i++) {            
            miLista += '<li> Item ' + i + '</li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    return self;
}();

module.exports = app;