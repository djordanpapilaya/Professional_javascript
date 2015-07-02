//Aanmaken object manier 1
var athlete01 = {
    dayOfBirth : 1996,
    name : "Djordan",
    surname : "Papilaya",
    stamina : 10,
    strength : 7,
    length : 1.20
};

//Aanmaken object manier 2
var athlete02 = new Object();

athlete02.dayOfBirth = 1996;
athlete02.name = "Djordan";
athlete02.surname = "Papilaya";
athlete02.stamina = 10;
athlete02.strength = 7;
athlete02.length = 1.20;

//Factory function

var createAthelete = function(dayOfBirth, name, surname, stamina, strength, length){
    var athelete = {};
    Object.defineProperties(athelete, {
       dayOfBirth : {
           value : dayOfBirth,
           enumerable : true
       },
        name : {
            value : name,
            enumerable : true
        },
        surname : {
            value : surname,
            enumerable : true
        },
        stamina : {
            value : stamina,
            enumerable : false
        },
        strength : {
            value : strength
        },
        length : {
            value : length
        },
        profile : {
            get : function(){
                return this.dayOfBirth + " " + this.name + " " + this.surname+ " " + this.stamina+ " " + this.strength+ " " + this.length;
            },
            enumerable : true
        }
    });
    return athelete;
};

var createAthlethes = function(data){
     var athlets = [];
    [].forEach.call(data, function(val, index){
        var athlete = createAthelete(val);
        athlets.push(athelete);
    })
};



var athelete = createAthelete(1996, "Djordan", "pap", 12, 4, 186);
var athelete1 = createAthelete(1996, "Djordan1", "pap", 12, 4, 186);
var athelete2 = createAthelete(1996, "Djordan2", "pap", 12, 4, 186);
var athelete3 = createAthelete(1996, "Djordan3", "pap", 12, 4, 186);