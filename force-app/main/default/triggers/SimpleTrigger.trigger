trigger SimpleTrigger on Account (after insert)
{
List <Contact> ContctList= new List <Contact>();
for(Account a:Trigger.new)
{
//it should create the cooresponding contact record for the newly added account record.
Contact c=new contact();
c.lastName=a.Name;
ContctList.add(c);
 
}
insert ContctList;
}