package backend.timeServer;

public class AddHour {
    private int hour;

    public AddHour() {   
    }

    public AddHour(int hour) {
        this.hour = hour;
    }

    public int getHour() {
        this.hour = (hour+1)%25;
        return this.hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }
}
