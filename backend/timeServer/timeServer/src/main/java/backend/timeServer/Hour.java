package backend.timeServer;

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
