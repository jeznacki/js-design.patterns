define(function(){
    'use strict';

    function _testProtoObj(protoObj){

        if(!protoObj) throw('You have to provide prototype object !');

        if(protoObj.constructor.name != 'Object' ) throw('Should be passed to the constructor function !');

        for(var prop in protoObj){
            if(protoObj.hasOwnProperty(prop) && typeof protoObj[prop] !== 'object'){

                throw('Values of prototype object properties must be an Object type !');

            }
        }

    }


    function Mixin(protoObj){


        try{
           _testProtoObj(protoObj);
        }
        catch(ex){
            throw(ex);
        }


        this.prototypes = protoObj;

    }


    Mixin.prototype.updatePrototypes = function(protoObj){

        _testProtoObj(protoObj);

        var mixin = this,
            prototypes = Object.keys(protoObj);

        prototypes.forEach(function(proto){

            var methods = Object.keys(protoObj[proto]);

            if(methods.length > 0){

                methods.forEach(function(method){

                    if(!mixin.prototypes[proto]){  mixin.prototypes[proto] = {}; }
                    mixin.prototypes[proto][method] = protoObj[proto][method];

                });

            }else {

                mixin.prototypes[proto] = protoObj[proto];

            }

        });

    }




    return Mixin;


});