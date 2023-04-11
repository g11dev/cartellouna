package Liste;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Comparator;

public class Liste {
    public static void main(String[] args) {
        ArrayList<String> lista = new ArrayList<>();
        lista.add("fanny");
        lista.add("fabio");
        lista.add("marco");
        lista.add("angela");


        // CONTO gli elementi della lista
        System.out.println(lista.size());

        // CICLO sugli elementi della lista
        System.out.println("\nI nomi sono:");
        for (String nome: lista)
            System.out.println(nome);
        // RIMUOVO UN ELEMENTO dalla lista
        lista.remove("fabio");

        // CONTROLLO CONTENUTO della lista
        if (lista.contains("fabio"))
            System.out.println("fabio è nella lista");
        else System.out.println("susanna non è nella lista");

        // PRINTO LISTA
        System.out.println(lista);

        // PULISCO TUTTA LISTA
        lista.clear();

        // Metodo FOR EACH
        lista.forEach(x -> System.out.println(x +" di lunghezza " + x.length()));

        //Versione ALTERNATIVA
        lista.forEach(System.out::println);             // '::' -> sostituiscono lambda con 1 solo elemento e la sua (x)

        // ORDINARE STRINGHE
        lista.sort(String.CASE_INSENSITIVE_ORDER);
        lista.forEach(System.out::println);

        //IN TEORIA ORDINA TUTTO
        // lista.sort(Comparator.naturalOrder());
        // lista.forEach(System.out::println);
    }

}
