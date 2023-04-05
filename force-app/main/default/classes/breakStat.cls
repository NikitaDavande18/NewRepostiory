public class breakStat
{
  public static Void sample()
  {
      Integer gooseBumpsAfter = 4;
      Integer n =  1000;
        for(Integer i=1;i<=n;i++)
        {
            if (i == gooseBumpsAfter)
            {
                break;
            }
            System.debug('Listening to song' + i + 'times');
        }
	}
}