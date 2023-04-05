trigger CustomerTrigger on APEX_Customer__c (before update)
{
    List<APEX_Customer__c>  customerList= new List<APEX_Customer__c>();
    for(APEX_Customer__c obj:Trigger.new)
    {
        System.debug('obj current value' +obj);
        if(obj.APEX_Active__c == true)
        {
            obj.APEX_Customer_Description__c='Updated';
            System.debug('the record which satisfied if condition'+obj);
            
        }
    }
}