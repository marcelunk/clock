package backend.timeServer;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TimeController {

    @GetMapping("/timezone")
    public Time timeZone(@RequestParam(value="timezone", defaultValue = "Europe/Berlin") String timeZone) {
        return new Time(timeZone);
    }

    // @GetMapping("/addOneHour")
    // public int 
}
