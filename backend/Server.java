import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

public class Server {
    public static void main(String[] args) {
        new Server();
    }

    public Server() {
        HttpServer server = null;
        try {
            server = HttpServer.create(new InetSocketAddress(8000), 0);
            server.createContext("/", new ClockHandler());
        } catch(IOException e) {
            e.printStackTrace();
        }
        server.setExecutor(null); // creates a default executor
        server.start();
    }

    class ClockHandler implements HttpHandler {
        public void handle(HttpExchange t) throws IOException {
            InputStream in = t.getRequestBody();
            InputStreamReader inReader = new InputStreamReader(in);
            BufferedReader reader = new BufferedReader(inReader);
            String line = reader.readLine();
            System.out.println("REQUEST: " + line);

            String response = "This is the response";
            t.sendResponseHeaders(200, response.length());
            OutputStream out = t.getResponseBody();
            out.write(response.getBytes());
            out.close();
        }
    }
}

