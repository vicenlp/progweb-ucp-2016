var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Cristian Vicente Gimenez";
    }

    self.items = function (cantidad) {
        var lista = '<ul>'
        var form = '<form action="/cristian/demo.html" method="get" >'
        for (var i = 0; i < cantidad; i++) {
            var item = '<li type="disc">Item ' + (i + 1) + '</li>' + form + '<input type="submit" name="numero" value="' + (i + 1) + '" >' ;
            lista = lista + item;
        }
        form = form + '</form>';
        lista = lista + '</ul>';
        return lista;
    }
    

    self.preguntaArmar = function (id) {
        //var esCorrecta;
        var pregunta = {
           
            id: 1,
            descripcion : '¿En que país se encuentra el gran Templo de la “Sagrada Familia”?',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'Israel'
                    //var esCorrecta = false 
                },
                {
                    id: 2,
                    descripcion: 'España'
                    //var esCorrecta = false 
                },
                {
                    id: 3,
                    descripcion: 'Argentina'
                    //var esCorrecta = false
                },
            ]
            };

        var pregunta = {
            id: 2,
            descripcion : '¿En que pais se encuentra la “Acropolis de Atenas”?',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'Egipto'
                },
                {
                    id: 2,
                    descripcion: 'Siria'
                },
                {
                    id: 3,
                    descripcion: 'Grecia'
                },
        ]
        };
            
        var pregunta = {
            id: 3,
            descripcion : '¿En que pais se encuentra el “Taj Mahal” un complejo de edificios realizado por el emperador Shah Jahan?',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'china'
                },
                {
                    id: 2,
                    descripcion: 'India'
                },
                {
                    id: 3,
                    descripcion: 'Ecuador'
                },
            ]
        };

        var pregunta = {
            id: 4,
            descripcion : '¿Dónde se encuentran las estatuas gigantes de priedra llamadas “moái” que pesan alrededor de 50 toneladas?',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'Chile'
                },
                {
                    id: 2,
                    descripcion: 'Peru'
                },
                {
                    id: 3,
                    descripcion: 'Uruguay'
                },
            ]
        };
        var pregunta = preguntas[
            
            ]

        var html = '';
        html += '<div class="row">';
        
        //titulo
        html += '<div class="col-md-12 pregunta-titulo">';
        html += '<h2>';
        html += pregunta.descripcion;
        html += '</h2>';
        html += '</div>'; //fin de pregunta-titulo
        
        
        
        
        //respuestas
        html += '<div class="col-md-offset-3 col-md-6 pregunta-respuestas">';
        
        html += '<form action="" method="get">';
        for (i = 0; i < pregunta.respuestas.length; i++) {
            var r = pregunta.respuestas[i];
            html += '<br>';
            html += '<form action="" method="get">'
            html += '<input type="hidden" name="preguntaId" value="' + pregunta.id + '" />'
            html += '<input type="submin" name="elegir" class="btn btn-primary col-md-12 col-xs-12 " value="' + r.descripcion + '" />';
            html += '<input type="hidden" name="respuestaId" value="' + r.id + '" />'
            html += '</form>';
            html += '</br>';
        }
        html += '</form>';
        html += '</div>'; //fin de pregunta-respuestas
        
        
        html += '</div>'; //fin de row
        
        
        return html;
    }
    
    self.respuesta = function () {
    
    
    }
    
    return self;
}();

module.exports = app;