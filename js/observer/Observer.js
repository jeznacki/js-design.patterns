define(function(){
    'use strict';

    function Observer(o){


        this.obj = o;
        this.tmpObj = {};

        var that = this;


        Object.keys(this.obj).forEach(function(prop){

            that.tmpObj[prop] = that.obj[prop];
        })

    }

    Observer.prototype.observe = function(prop,cb){

        if(!(prop in this.obj)){
            throw ('Property not exist');
        }

        if(cb !== undefined && !(cb instanceof Function)){
              throw('Calback is not a function');
        }

        var that = this;
        Object.defineProperty(that.obj, prop , {

            get:function(){

                return that.tmpObj[prop];

            },
            set:function(v){

                var dataObj = {

                    oldValue: that.tmpObj[prop],
                    newValue:v,
                    prop:prop

                }

                that.tmpObj[prop] = v;
                cb(dataObj);

            }


        });

    }


    Observer.prototype.unobserve = function(prop){

        if(!(prop in this.obj)){
            throw ('Property not exist');
        }


        delete this.obj[prop];
        this.obj[prop] = this.tmpObj[prop];


    }

    return Observer;


});