function Tranport (owner, weight){
    Object.defineProperties(transport,{
        owner : {
            value : owner,
            enumerable : true
        },
        weight : {
            value : weight,
            enumerable : true
        },
        horn : {
            value : function(){
                return "NONE"
            }
        }
    });
}

Tranport.prototype.horn = function(sound){
    console.log("WA");
    return "gluid: " + sound;
};