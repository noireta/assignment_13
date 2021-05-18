
let savings_ac = document.getElementById("name_user");
let savingsDeposit  = document.getElementById("savingsDeposit");
let savingsWithdraw  = document.getElementById("savingsWithdraw");

var bankAccount = (function() {
    var name="";
    var balance=0;
    let user_name = document.getElementById("balance_user");
    let user_balance = document.getElementById("balance_amount");

    function showBalance(){
        user_name.innerHTML = name;
        user_balance.innerHTML = balance;
    }
    
    return {
      setName: function(aName) {
        name = aName;
        showBalance();
      },
  
      withdraw: function(amount) {
        if ( balance > 0 &&  name != "")
        {
            if ( amount > 0 && amount <= balance ){
                balance = balance - amount;
                showBalance();
            }
        }
      },

      deposit: function(amount) {
        if ( amount > 0 && name != ""){
            balance = balance + amount;
            showBalance();
        }
      },
  
    };
  })();

savings_ac.onclick = function () {
    let user_name = prompt ("Please enter your name?");  
    bankAccount.setName(user_name);

}

savingsDeposit.onclick = function () {
    let user_dep = prompt ("Please enter an amount to deposit.");  
    bankAccount.deposit(parseInt(user_dep));
   
}

savingsWithdraw.onclick = function () {
    let user_withdraw = prompt ("Please enter an amount to withdrawa.");  
    bankAccount.withdraw(parseInt(user_withdraw))
}

