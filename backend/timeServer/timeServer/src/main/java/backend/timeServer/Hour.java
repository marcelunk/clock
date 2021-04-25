package backend.timeServer;

public class Hour {
    private int hour;

    public Hour(int hour) {
        computeHour(hour);
    }

    public int getHour() {
        return this.hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    private void computeHour(int hour) {
        this.hour = hour%24;
    }
}
