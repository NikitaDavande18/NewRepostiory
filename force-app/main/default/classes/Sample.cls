public with Sharing class Sample
{   
    public List<Account> acc {get;set;}
    //public List<Member__c> mem {get;set;}   
      
    public sample()
    {
        acc = [SELECT Name, AccountNumber FROM Account where Name like 'ABC%' limit 1000 ];
      //  mem = [SELECT Name FROM Member__c];
    }
}