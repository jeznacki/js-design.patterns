define(['factory/constructor'],function(constructors){


    return {
        create:function(type,dataObj){
            var constructor = constructors.getConstructor(type);
            return new constructor(dataObj);
        }
    }


});