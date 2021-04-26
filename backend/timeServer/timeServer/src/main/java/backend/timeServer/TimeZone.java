package backend.timeServer;

public class TimeZone {
    private String region;
    private String city;

    public TimeZone(String region, String city) {
        this.region = region;
        this.city = city;
    }

    public String getRegion() {
        System.out.println("From TimeZone: " + region);
        return this.region;
    }

    public String getCity() {
        return this.city;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
