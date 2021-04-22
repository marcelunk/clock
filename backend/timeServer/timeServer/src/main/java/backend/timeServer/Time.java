package backend.timeServer;

import java.util.TimeZone;

/**
 * 
 * @author Marcel Unkauf
 */
public class Time {
    private final String timeZone;

    //Europe/Berlin
    //America/New_York
    public Time(String timeZone) {
        switch(timeZone) {
            case "NewYork":
                this.timeZone = getNewYorkTime();
                break;
            case "Germany":
            default:
                this.timeZone = getGermanTime();
        }
    }

    public String getTimeZone() {
        return timeZone;
    }

    private String getGermanTime() {
        TimeZone tz = TimeZone.getTimeZone("Germany/Berlin");
        return tz.getDisplayName();
    }
    
    private String getNewYorkTime() {
        TimeZone tz = TimeZone.getTimeZone("America/New_York");
        return tz.getDisplayName();
    }
}
