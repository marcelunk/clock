package backend.timeServer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TimeController {

    @PostMapping(value = "/time", consumes = "application/json", produces = "application/json")
    public Time timeZone(@RequestBody TimeZone zone) {
        return new Time(zone.getRegion() + "/" + zone.getCity());
    }

    @PostMapping(value = "/addhour", consumes = "application/json", produces = "application/json")
    public AddHour timeZone(@RequestBody AddHour hour) {
        return new AddHour(hour.getHour());
    }
}
