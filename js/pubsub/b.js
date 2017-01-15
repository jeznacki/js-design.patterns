define(['pubsub/pubsub'],function(pubsub){
    'use strict';

    return {
        publish:function(topic,data){
            pubsub.publish(topic,data);

        }
    }


});