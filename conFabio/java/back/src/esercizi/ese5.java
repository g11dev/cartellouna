package esercizi;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

class Film {
    private Integer year;
    private Integer score;
    private String title;

    public Film(Integer year, Integer score, String title) {
        this.year = year;
        this.score = score;
        this.title = title;
    }

    public Film() {
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Film{" +
                "year=" + year +
                ", score=" + score +
                ", title='" + title + '\'' +
                '}';
    }
}


public class ese5 {
    public static void main(String[] args) {
        File f = new File("dati/deniro.csv");

        ArrayList<Film> listaFilm = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(f))) {
            while(true) {
                // LEGGO UNA RIGA
                String s = br.readLine();
                if (s==null) break;
                System.out.println(s);
                String[] a = s.split(",");

                System.out.println((Arrays.asList(a)));
                ArrayList<String> monovect = Arrays.asList(a[1]);
                Arrays.toString(a)

                            }
        } catch (IOException e){
            System.err.println("C'è stato un errore nella lettura del file");
        }
    }
}
