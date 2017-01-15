define(['pubsub/pubsub'],function(pubsub){
    'use strict';

    return {
        register:function(topic,cb){
            var ret = pubsub.register(topic,cb);

            return ret;
        }
    }


});