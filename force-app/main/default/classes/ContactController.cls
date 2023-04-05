/*public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id contactsId) {
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
           
       ];
    }
}*/
/*
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        /return [
            SELECT FirstName, LastName, Email
            FROM Contact
           
        ];
    }
}
*/
public with sharing class ContactController 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() 
    {
            throw new AuraHandledException('Forced error');
    }
}