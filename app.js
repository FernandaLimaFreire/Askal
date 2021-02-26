var express = require('express');
var app = express();


/*==============================
            HOME
  ==============================*/
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html')
});
app.get('/contato', function(req, res) {
    res.sendFile(__dirname + '/src/Contato.html')
});
app.get('/como-ajudar', function(req, res) {
    res.sendFile(__dirname + '/src/Como_ajudar.html')
});
app.get('/quem-somos', function(req, res) {
    res.sendFile(__dirname + '/src/Quem_somos.html')
});
app.get('/sobre', function(req, res) {
    res.sendFile(__dirname + '/src/Sobre.html')
});

/* ENGLISH */
app.get('/en', function(req, res) {
    res.sendFile(__dirname + '/src/languages/EN/index_en.html')
});
app.get('/en/contato', function(req, res) {
    res.sendFile(__dirname + '/src/languages/EN/Contato_en.html')
});
app.get('/en/como-ajudar', function(req, res) {
    res.sendFile(__dirname + '/src/languages/EN/Como_ajudar_en.html')
});
app.get('/en/quem-somos', function(req, res) {
    res.sendFile(__dirname + '/src/languages/EN/Quem_somos_en.html')
});
app.get('/en/sobre', function(req, res) {
    res.sendFile(__dirname + '/src/languages/EN/Sobre_en.html')
});

/* SPANISH */
app.get('/es', function(req, res) {
    res.sendFile(__dirname + '/src/languages/ES/index_es.html')
});
app.get('/es/contato', function(req, res) {
    res.sendFile(__dirname + '/src/languages/ES/Contato_es.html')
});
app.get('/es/como-ajudar', function(req, res) {
    res.sendFile(__dirname + '/src/languages/ES/Como_ajudar_es.html')
});
app.get('/es/quem-somos', function(req, res) {
    res.sendFile(__dirname + '/src/languages/ES/Quem_somos_es.html')
});
app.get('/es/sobre', function(req, res) {
    res.sendFile(__dirname + '/src/languages/ES/Sobre_es.html')
});


/*==============================
          Static Files
  ==============================*/
  app.use(express.static(__dirname + '/src/assets'));
  

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});



app.listen(process.env.PORT || 5000, function() {
    console.log('Running done!')
});