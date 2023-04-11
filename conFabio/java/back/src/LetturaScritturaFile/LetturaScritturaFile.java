package LetturaScritturaFile;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.sql.SQLOutput;

public class LetturaScritturaFile {
    public static void main(String[] args) {
        File f = new File("dati/numeri.txt");

        int somma = 0;
        int conta = 0;
        float media = 0;

        try (BufferedReader br = new BufferedReader(new FileReader(f))) {
            while(true) {
                // LEGGO UNA RIGA
                String s = br.readLine();
                if (s==null) break;
                System.out.println(s);
                int n = Integer.parseInt(s);
                conta ++;
                somma += n;

            }
        } catch (IOException e){
            System.err.println("C'è stato un errore nella lettura del file");
        }
        System.out.println("la somma è " + somma);
        System.out.println("la media è " + (float) somma/conta);
    }
}
