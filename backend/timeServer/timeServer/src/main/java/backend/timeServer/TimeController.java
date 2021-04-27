package backend.timeServer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller of the Spring Boot server which opens two routes
 * for the two different kind of buttons of the frontend.
 * 
 * @author Marcel Unkauf
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TimeController {

    @PostMapping(value = "/time", consumes = "application/json", produces = "application/json")
    public Time timeZone(@RequestBody TimeZone zone) {
        String timeZone = zone.getRegion() + "/" + zone.getCity();
        System.out.println("From TimeZone: " + timeZone);
        return new Time(timeZone);
    }

    @PostMapping(value = "/addhour", consumes = "application/json", produces = "application/json")
    public Hour timeZone(@RequestBody Hour hour) {
        System.out.println("Add 1 to hour: " + hour.getHour());
        return new Hour(hour.getHour() + 1);
    }
}
