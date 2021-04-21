import java.util.TimeZone;

/**
 * 
 * @author Marcel Unkauf
 */
public class Time {

    public static String getGermanTime(){
        TimeZone tz = TimeZone.getTimeZone("Germany/Berlin");
        return tz.getDisplayName();
    }
    
    public static String getNewYorkTime(){
        TimeZone tz = TimeZone.getTimeZone("America/New_York");
        return tz.getDisplayName();
    }

    public static String addOneHour(){
        // What time zone is running currently? -> Add one hour
        return null;
    }
}
