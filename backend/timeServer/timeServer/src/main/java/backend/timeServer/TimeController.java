package backend.timeServer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeController {

    @GetMapping("/timezone")
    public Time timeZone(@RequestParam(value="timezone", defaultValue = "Germany") String timeZone) {
        return new Time(timeZone);
    }

    // @GetMapping("/addOneHour")
    // public int 
}
