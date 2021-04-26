package backend.timeServer;

public class AddHour {
    private int hour;

    public AddHour() {   
    }

    public AddHour(int hour) {
        this.hour = hour;
    }

    public int getHour() {
        System.out.println("From Hour.java: " + this.hour);
        this.hour = (hour+1)%25;
        System.out.println("From Hour.java: " + this.hour);
        return this.hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }
}
