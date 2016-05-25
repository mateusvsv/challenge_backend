var test = require('unit.js');
var app = require('../index.js')

it('Formata frases corretamente', function(){
    var frase = app._test.formataFrase('a-b-a');
    test.assert(frase === 'ABA');
});

it('Remove acentos corretamente', function(){
    var frase = app._test.formataFrase('á');
    test.assert(frase === 'A');
});

it('ABA é palíndromo', function(){
    test.bool(app._test.isPalindrome('aba')).isTrue();
});

it('MACACO NÃO é palíndromo', function(){
    test.bool(app._test.isPalindrome('MACACO')).isFalse();
});

it('Deve ser palíndromo mesmo com separação de palavras', function(){
    test.bool(app._test.isPalindrome('A-MAN-A-PLAN-A-CANAL-PANAMA')).isTrue();
});

it('Deve ser palíndromo mesmo com acentuação', function(){
    test.bool(app._test.isPalindrome('ÁBBÃ')).isTrue();
});
