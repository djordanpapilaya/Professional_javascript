/**
 * Created by MacBookDjordan on 01/06/15.
 */
function Car(owner, weight, licensePlate){

    Object.defineProperties(Car,{
        owner : {
            value : owner,
            enumerable : true
        },
        weight : {
            value : weight,
            enumerable : true
        },
        licenseplate : {
            value : licensePlate,
            enumerable : true
        },
        horn : {
            value : function(){
                return ""
            }
        }
    });
}

Car.prototype = object.create(Tranport.prototype,{
   constructor : {
       confugurable : true,
       enumerable : true,
       writable : true,
       value : Car
   }
});