package DateCalendario;

import org.w3c.dom.ls.LSOutput;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static java.time.temporal.ChronoUnit.DAYS;

public class DateCalendario {
    public static final DateTimeFormatter dtf =
            DateTimeFormatter.ofPattern("dd/MM/YYYY");

    public static void main(String[] args) {
        LocalDate oggi = LocalDate.now();
        System.out.println(oggi);
        LocalDate primoGennaio = LocalDate.of(2023, 1, 1);

        long giorni = DAYS.between(primoGennaio, oggi);
        System.out.println("giorni");

        LocalDate scadenza = oggi.plusDays(60);
        System.out.println(dtf.format(scadenza));

    }
}



















































































