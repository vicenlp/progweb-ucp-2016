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
    
    
    self.opciones = function (cantidad) {
        
        var miLista = '<ul>';
        miLista += '<form action="" method="get">';

        for (i = 1; i <= cantidad; i++) {
            miLista += '<li>';
            miLista += '<input type="radio" name="cantidad" value="' + i + '" /> ';
            miLista += 'Respuesta ' + i;
            miLista += '</li>';
        }
        
        miLista += '</form>';
        miLista += '</ul>';

        return miLista;
    }
    
    return self;
}();

module.exports = app;