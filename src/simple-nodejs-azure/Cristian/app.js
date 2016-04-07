var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristian Vicente Gimenez";
    }

    self.items = function () {
        return "Estoy desde mi App";
    }
    
    self.lista = function () {

        var lista = '<ul>'
        for (var i = 0; i < 50; i++) {
            var item = '<li type="disc">Item ' + (i+1) + '</li>';
            lista = lista + item;
        }
        lista = lista + '</ul>';
        return lista;

    }
    return self;
}();

module.exports = app;