define(function(pubsub){
    'use strict';

    var topics = {};


    function register(topic,cb){

        if(!topics[topic]){

            topics[topic] = [];

        }

        topics[topic].push(cb);

        var idx =  topics[topic].length -1;



        function unregister(){
            topics[topic].splice(idx,1);
        }

        return unregister;


    }

    function publish(topic,data){
        if(!topics[topic]){
            return;
        }

        topics[topic].forEach(function(callback){

            callback(data);

        });


    }

    return {
        register:register,
        publish:publish
    }


});