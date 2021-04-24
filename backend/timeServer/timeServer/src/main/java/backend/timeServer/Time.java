package backend.timeServer;

import java.util.TimeZone;
import java.time.ZonedDateTime;

/**
 * 
 * @author Marcel Unkauf
 */
public class Time {
    private final String timezone;

    //Europe/Berlin
    //America/New_York
    public Time(String timezone) {
        switch(timezone) {
            case "NewYork":
                this.timezone = "America/New_York";  //getNewYorkTime();
                break;
            case "Germany":
            default:
                this.timezone = "Europe/Berlin";    //getGermanTime();
        }
    }

    public String getTimeZone() {
        return timezone;
    }

    // private String getGermanTime() {
    //     TimeZone tz = TimeZone.getTimeZone("Germany/Berlin");
    //     return tz.getDisplayName();
    // }
    
    // private String getNewYorkTime() {
    //     TimeZone tz = TimeZone.getTimeZone("America/New_York");
    //     return tz.getDisplayName();
    // }
}
