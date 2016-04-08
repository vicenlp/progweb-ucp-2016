var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Enzo Medina";
    }
    
    self.items = function (cantidad) {
        var unaLista = '<ul>';
        var unForm = '<form action="/enzo/demo.html" method="get">';
        for (var i = 1; i <= cantidad; i++) {
            unaLista = unaLista + '<li>Item' + i + ' </li>' + unForm + '<input type="submit" name="cantidad" value="' + i + '">';//+ ' <input type="header" name="" value="">';
        };
        unForm += '</form>';        
        unaLista += '</ul>';
        
        return unaLista;
    }
    

    
    return self;
}();

module.exports = app;