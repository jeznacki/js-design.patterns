//FACTORY
require (['factory/employeeFactory'],function(employeeFactory){

    'use strict';

    var employee, manager;

    employee = employeeFactory.create('Employee',{
        firstName:'Tom',
        lastName:'Smith',
        age:33
    });

    manager = employeeFactory.create('Manager',{
        firstName:'Jim',
        lastName:'White',
        age:33,
        department:'IT'
    });

    console.log(employee,manager);
    console.log(employee.name,manager.name);


});

//PUB SUB

require (['pubsub/a','pubsub/b'],function(a,b){

    'use strict';


     function cb(data){
         console.log(data);
     }

     var ur1 = a.register('topic1',cb),
     ur2 = a.register('topic2',cb);

     setTimeout(function(){
         b.publish('topic1','published');
         b.publish('topic2','published');
         ur1();
         ur2();

     },5000);


});

//OBSERVER

require (['observer/Observer'],function(Observer){

    'use strict';

    var obj = {
        foo:1,
        bar:2
    };

    var callback = function(dataObj){
        console.log(dataObj);
    }

    var obs = new Observer(obj);

    obs.observe('foo',callback);

    setTimeout(function(){

        obj.foo = 10;


    },4000);

    obs.unobserve('foo');

    window.obj = obj;


});

//MIXIN
require (['mixin/Mixin'],function(Mixin){

    'use strict';


    var mixin = new Mixin({

            proto1: {
                m1:function(){  console.log('proto m1'); },
                m2:function(){  console.log('proto m2'); }

            },
            proto2: {
                m1:function(){  console.log('proto2 m1'); },
                m2:function(){  console.log('proto2 m2'); }

            }

        });


    mixin.updatePrototypes({

        proto1: {
           m3:function(){ console.log('Proto1 m3'); }
        },
        proto2: {

            m3:function(){ console.log('Proto1 m3'); }


        }

    })


    window.mixin = mixin;




});

//MEDIATOR

require (['mediator/Mediator'],function(Mixin){

    'use strict';


    var mixin = new Mixin({

            proto1: {
                m1:function(){  console.log('proto m1'); },
                m2:function(){  console.log('proto m2'); }

            },
            proto2: {
                m1:function(){  console.log('proto2 m1'); },
                m2:function(){  console.log('proto2 m2'); }

            }

        });


    mixin.updatePrototypes({

        proto1: {
           m3:function(){ console.log('Proto1 m3'); }
        },
        proto2: {

            m3:function(){ console.log('Proto1 m3'); }


        }

    })


    window.mixin = mixin;




});


