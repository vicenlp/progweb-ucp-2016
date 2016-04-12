var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristian Vicente Gimenez";
    }

    self.items = function (cantidad) {
        var lista = '<ul>'
        var form = '<form action="/cristian/demo.html" method="get" >'
        for (var i = 0; i < cantidad; i++) {
            var item = '<li type="disc">Item ' + (i + 1) + '</li>' + form + '<input type="submit" name="numero" value="' + (i + 1) + '" >' + '<input type >;
            lista = lista + item;
        }
        form = form + '</form>';
        lista = lista + '</ul>';
        return lista;
    }
    
    return self;
}();

module.exports = app;