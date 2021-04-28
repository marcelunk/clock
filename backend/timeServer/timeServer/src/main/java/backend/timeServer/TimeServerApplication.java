package backend.timeServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot time server.
 * 
 * @author Marcel Unkauf
 */
@SpringBootApplication
public class TimeServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimeServerApplication.class, args);
	}
}
