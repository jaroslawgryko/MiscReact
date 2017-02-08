units = [
    {
        id: 1,
        nazwa: 'Narodowe Centrum Nauki',
        opis: '',
        symbol: 'NCN',
        nadrzedny: 'BRAK'
    },
    {
        id: 2,
        nazwa: 'Dział Badań Naukowych i Rozwoju Naukowców',
        opis: '',
        symbol: 'DBR',
        nadrzedny: 'NCN'
    },
    {
        id: 3,
        nazwa: 'Zespół ds. Nauk Humanistycznych, Społecznych i o Sztuce',
        opis: '',
        symbol: 'ZHS',
        nadrzedny: 'DBR'
    },
    {
        id: 4,
        nazwa: 'Zespół ds. Nauk o Życiu',
        opis: '',
        symbol: 'ZNZ',
        nadrzedny: 'DBR'
    },
    {
        id: 5,
        nazwa: 'Zespół ds. Nauk Ścisłych i Technicznych',
        opis: '',
        symbol: 'ZST',
        nadrzedny: 'DBR'
    },
    {
        id: 6,
        nazwa: 'Zespół ds. Obsługi Dokumentacji Ekspertów',
        opis: '',
        symbol: 'ZDE',
        nadrzedny: 'DBR'
    }
];

var jednostki = [
    {
        nazwa: units[0].nazwa,
        symbol: units[0].symbol,
        jednostki: []
    }
];

function traverse(x, s) {
    if (Object.prototype.toString.call(x) === '[object Array]') {

        x.forEach(function (x) {
            traverse(x, s);
        });

    } else if ((typeof x === 'object') && (x !== null) && x.hasOwnProperty('nazwa')) {

        if (x.symbol === s.nadrzedny) {

            var ss = {
                nazwa: s.nazwa,
                symbol: s.symbol,
                jednostki: []
            };
            x.jednostki.push(ss);
        }
        traverse(x.jednostki, s);
    }
}

for (var i = 1; i < units.length; i++) {

    traverse(jednostki, units[i]);
}

console.log(JSON.stringify(jednostki));