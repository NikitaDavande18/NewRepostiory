trigger CustomerAfterinsert on APEX_Customer__c (after update)
 {
    CustomerTriggerHelper.createInvoiceRecords(Trigger.new, trigger.oldMap);//Trigger calls the helper class and does not have any code in Trigger
}