public with sharing class PropertyImage {
    public PropertyImage() {

    }
    @AuraEnabled(cacheable=true)
    public static list<ContentDocumentLink> getPropertyImages(string PropertyId){
        list<ContentDocumentLink> propImage =[SELECT ContentDocumentId 
                                                FROM ContentDocumentLink 
                                                WHERE LinkedEntityId ='0155g000001aKG0']  ;  
        return propImage;    
    }
}