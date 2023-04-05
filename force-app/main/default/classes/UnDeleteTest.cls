public with sharing class UnDeleteTest
{
    public static void UnDeleteTest() 
    {
      List<apex_customer__c> fetchDElCustomer=[select id from apex_customer__c where apex_customer__c.Name LIKE 'Test%' ALL ROWS];  
      undelete fetchDElCustomer;
      System.debug('Success '+fetchDElCustomer.size()+' records has been restored');
    }
}