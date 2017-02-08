// var t = ['a','b','c','d','e','f','g','h','i','j'];
//
// t.forEach(function(element,index,array){
//   console.log(index,element);
// });
//
// var filtered = t.filter(function(v){
//   return v > 5;
// })
//
// console.log(filtered.length);


var units = [
  {
    id: 10,
    nazwa: 'Narodowe Centrum Nauki',
    opis: '',
    symbol: 'NCN',
    nadrzedny: ''
  },
  {
    id: 11,
    nazwa: 'Dział Badań Naukowych i Rozwoju Naukowców',
    opis: '',
    symbol: 'BDR',
    nadrzedny: 'NCN'
  },
  {
    id: 12,
    nazwa: 'Zespół ds. Nauk Humanistycznych, Społecznych i o Sztuce',
    opis: '',
    symbol: 'ZHS',
    nadrzedny: 'DBR'
  },
  {
    id: 13,
    nazwa: 'Zespół ds. Nauk o Życiu',
    opis: '',
    symbol: 'ZNZ',
    nadrzedny: 'DBR'
  },
  {
    id: 14,
    nazwa: 'Zespół ds. Nauk Ścisłych i Technicznych',
    opis: '',
    symbol: 'ZST',
    nadrzedny: 'DBR'
  },
  {
    id: 15,
    nazwa: 'Zespół ds. Obsługi Dokumentacji Ekspertów',
    opis: '',
    symbol: 'ZDE',
    nadrzedny: 'DBR'
  }
];


var filteredUnits = units.filter(function(unit) {
  return unit.nadrzedny === 'NCN';
});


console.log(filteredUnits.length);
