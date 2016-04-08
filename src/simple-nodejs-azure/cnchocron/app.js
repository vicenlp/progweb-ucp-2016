var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristhian Chocron";
    }

    self.items = function () {
        
        var miLista = '<ul>';

        for (i = 1; i < 51; i++) {            
            miLista += '<li> Item ' + i + '</li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    return self;
}();

module.exports = app;