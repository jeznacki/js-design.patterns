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

