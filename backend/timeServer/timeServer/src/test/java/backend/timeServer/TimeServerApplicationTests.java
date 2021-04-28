package backend.timeServer;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class TimeServerApplicationTests {

	@Autowired
	private MockMvc mvc;

	/**
	 * Test the REST api on /time.
	 * The test does not test whether the time is correct,
	 * just if the request can successfully be made.
	 * 
	 * @throws Exception
	 */
	@Test
	public void testTime() throws Exception {
		mvc.perform(MockMvcRequestBuilders
			.post("/time")
			.content(asJsonString(new TimeZone("Europe", "Berlin")))
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk());
	}

	/**
	 * Test the REST api on /addhour.
	 * The test does not test whether the hour was correctly added,
	 * just if the request can successfully be made.
	 * 
	 * @throws Exception
	 */
	@Test
	public void testAddHour() throws Exception {
		mvc.perform(MockMvcRequestBuilders
			.post("/addhour")
			.content(asJsonString(new Hour(0)))
			.contentType(MediaType.APPLICATION_JSON)
			.accept(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk());
	}

	/**
	 * Helper method to stringify a Java object.
	 * 
	 * @param obj
	 * @return String
	 */
	private static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
