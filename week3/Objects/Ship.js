/**
 * Created by MacBookDjordan on 01/06/15.
 */
function Ship(owner, weight, cargo){
    Tranport.call(this, owner, weight);
    Object.defineProperties(Ship,{
        licenseplate : {
            value : cargo,
            enumerable : true
        }
    });
}
Ship.prototype = object.create(Tranport.prototype,{
    constructor : {
        confugurable : true,
        enumerable : true,
        writable : true,
        value : Ship
    }
});