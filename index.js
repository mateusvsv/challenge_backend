var express = require("express");
var removeDiacritics = require('diacritics').remove;
var HttpStatus = require('http-status-codes');
var app = express();
 
app.get("/", function(req, res) {
    res.status(HttpStatus.OK);
    res.send("Utilize '/palindromo/SUA-FRASE' para verificar se sua frase é um palíndromo. :D");
});

app.get('/palindromo/:frase', function (req, res) {
    var frase = req.params.frase;
    palindromo = isPalindrome(frase);
    var status = HttpStatus.BAD_REQUEST;
    if (palindromo)
        status = HttpStatus.OK;
    res.sendStatus(status);
});

function isPalindrome(frase){
    var palindroma = true;
    frase = formataFrase(frase);
    meio_frase = frase.length/2;
    for(var i = 0; i < meio_frase; i++){
        if(frase.charAt(i) != frase.charAt(frase.length - i - 1))
            palindroma = false;
    }
    return palindroma;
}

function formataFrase(frase){
    frase = frase.toUpperCase();
    frase = frase.replace(/-/g,'');
    frase = removeDiacritics(frase);
    return frase;
}

var server = app.listen(8080, function () {
    console.log("Sua app rodando na porta %s...", server.address().port);
});

exports._test = {
    isPalindrome: isPalindrome,
    formataFrase: formataFrase
}
