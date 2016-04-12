var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristhian Chocron";
    }

    self.items = function (cantidad) {
        
        var miLista = '<ul>';

        for (i = 1; i <= cantidad; i++) {
            miLista += '<li> Item ' + 
                        i + 
                        '<form action="" method="get">'+
                        '<input type="hidden" name="cantidad" value="' +
                        i
                        +'">' +
                        '<input type="submit" value="Item' + i +'">'+
                        '</form></li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    return self;
}();

module.exports = app;