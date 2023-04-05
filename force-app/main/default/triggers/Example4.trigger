trigger Example4  on Account (after update) {
    integer amount=20000;
    For(Account acc:trigger.new){
        List<opportunity> opps=[select id from opportunity where Account.id=:acc.id And Amount > 20000];
        If(opps.size()>0){
            acc.Is_Gold__c=True;
        }Else{
            acc.Is_Gold__c=False;
        }
        update acc;
    }
    
}