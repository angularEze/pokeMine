/**/
(function(){
  var app = angular.module('pokedex',[]);//creamos un modulo sin dependencia
  app.controller('PokemonController', function () {//creamos un controlador y le pasamos un segundo argumento funcion anonima
    this.pokemon = {
      id: 001,
      name: 'Bulbasaur',
      species: 'Seed Pokemon',
      type: ['Grass', 'Poison'],
      height: '2,4',
      weight '15.2 lbs',
      abilities: ['Overgrow', 'Chlorophyll']
    };
  });

})();
