package esercizi;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.Arrays;

public class lavagna {
    public static void main(String[] args) {
        File f = new File("dati/deniro.csv");

        try (BufferedReader br = new BufferedReader(new FileReader(f))) {
            while(true) {
                // LEGGO UNA RIGA
                String s = br.readLine();
                if (s==null) break;
                System.out.println(s);
                String [] a = s.split(",");

                System.out.println((Arrays.asList(a[0])));

            }
        } catch (IOException e){
            System.err.println("C'è stato un errore nella lettura del file");
        }

    }
}
