package backend.timeServer;

/**
 * Representation of an hour of the day.
 * 
 * @author Marcel Unkauf
 */
public class Hour {
    private int hour;

    public Hour() {   
    }

    public Hour(int hour) {
        this.hour = hour;
    }

    public int getHour() {
        this.hour = hour%24;
        return this.hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }
}
