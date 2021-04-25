package backend.timeServer;

import java.time.ZonedDateTime;
import java.time.ZoneId;

/**
 *
 * @author Marcel Unkauf
 */
public class Time {
    private final int hour;
    private final int minute;
    private final int second;

    //Europe/Berlin
    //America/New_York
    public Time(String timeZone) {
      ZonedDateTime time = ZonedDateTime.now(ZoneId.of(timeZone));
      // ZonedDateTime time = ZonedDateTime.now(ZoneId.of("Europe/Berlin"));
      this.hour = time.getHour();
      this.minute = time.getMinute();
      this.second = time.getSecond();
    }

    public int getHour() {
      return this.hour;
    }

    public int getMinute() {
      return this.minute;
    }

    public int getSecond() {
      return this.second;
    }
}
