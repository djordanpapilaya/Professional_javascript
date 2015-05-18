/**
 * Created by MacBookDjordan on 18/05/15.
 */


var Athelete  = {};

Object.defineProperties(Athelete,{
    _name : {
        value : "Djordan",
        enumerable : true,
        configurable : false,
        writable : true
    },
    surname : {
        value : "Papilaya",
        enumerable : true,
        configurable : true,
        writable : true
    },
    dayOfBirth : {
        value : 1996,
        enumerable : true,
        configurable : true,
        writable : true
    },
    stamina : {
        value : 12,
        enumerable : true,
        configurable : true,
        writable : true
    },
    strength : {
        value : 7,
        enumerable : true,
        configurable : true,
        writable : true
    },
    length : {
        value : 184,
        enumerable : true,
        configurable : true,
        writable : true
    },
    name : {
        get : function (){
            console.log("READING NAME");
            return this._name;
        },
        set: function(value){
            console.log("SETTING THE NAME TO " + value);
            this._name = value;
        },
        enumerable : true,
        configurable : true
    }
});

var CreateAthelete = function(_name, _surname){
    var StrongAthelete = {};

    Object.defineProperties(StrongAthelete)
};