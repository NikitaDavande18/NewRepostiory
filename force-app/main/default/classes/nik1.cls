public class nik1
{
    List<Account> acts = new List<Account>();
        public List<Account> getaccts()
        {
            return acts;
        }   
        public PageReference  channel_acts()
        {
            acts=[SELECT Name, Type, Industry,Phone FROM Account where Name='ABC'];
            return null;
        }
    public PageReference  direct_acts()
        {
            acts=[SELECT Name, Type, Industry,Phone FROM Account where Name='nikita'];
            return null;
        }
}