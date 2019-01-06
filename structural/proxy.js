/*

The Proxy pattern provides a surrogate or placeholder object for another object
and controls access to this other object.

*/

/* ES 6 */

class BankAccounts{

    constructor(){ }

    add(bankAccountData) {
        console.log(bankAccountData);
    }
    find(bankAccount) {
        console.log(bankAccount);
    }
    getList() {
        console.log('list');
    }
}

class BankAccountsProxy{

    constructor(){
        this.bankAccounts = new BankAccounts();
    }

    addBankAccount(bankAccountData) {
        // some funtionality before calling the add method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.add(bankAccountData);
    }

    findBankAccount(bankAccount) {
        // some funtionality before calling the find method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.find(bankAccount);
    }

    getBankAccountsList() {
        // some funtionality before calling the getList method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.getList();
    }

}

var proxy = new BankAccountsProxy();
proxy.addBankAccount(123465787);

/* ES 5 */

function BankAccounts() {
    //constructor
};

BankAccounts.prototype = {
    add: function(bankAccountData) {
        console.log(bankAccountData);
    },
    find: function(bankAccount) {
        console.log(bankAccount);
    },
    getList: function() {
        console.log('list');
    }
};

// creating the proxy
function BankAccountsProxy() {
    // getting a reference to the original object
    this.bankAccounts = new BankAccounts();
};

BankAccountsProxy.prototype = {
    addBankAccount: function(bankAccountData) {
        // some funtionality before calling the add method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.add(bankAccountData);
    },
    findBankAccount: function(bankAccount) {
        // some funtionality before calling the find method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.find(bankAccount);
    },
    getBankAccountsList: function() {
        // some funtionality before calling the getList method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.getList();
    }
};

var proxy = new BankAccountsProxy();
proxy.addBankAccount(123465787);

