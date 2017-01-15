define([''],function(){


   function Employee(dataObj){

       this.firstName = dataObj.firstName || '';
       this.lastName = dataObj.lastName || '';
       this.age = dataObj.age || 0 ;

   }

    function Manager(dataObj){

       this.firstName = dataObj.firstName || '';
       this.lastName = dataObj.lastName || '';
       this.age = dataObj.age || 0;
       this.department = dataObj.department || '';


   }

    var proto = Object.create(Object.prototype,{

        name: {
            get: function() {

                 return this.firstName + ' ' + this.lastName;

            }
        }


    })

    Employee.prototype = proto;
    Manager.prototype = proto;


    return {

        getConstructor:function(type){

            switch(type){

                case 'Employee':
                    return Employee;

                case 'Manager':
                    return Manager;


            }


        }


    }





});
