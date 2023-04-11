package Liste;

import java.util.ArrayList;
import java.util.Random;

public class Liste2 {
    public static void main(String[] args) {
        Random r = new Random();
        ArrayList<Integer> lista = new ArrayList<>();

        //Inserisco numeri a caso
        r.ints(1000, 1, 100).forEach(lista::add);
        //dalla libreria 'r' -> uso metodo 'ints' -> che mi restituisce un elemento di tipo stream(flusso continuo che virtualmente non si sa se finisce (inseriamo noi un limite) e poi con 'foreach' dice "ogni volta che arriva un numero lo inserisce")
        System.out.println(lista);
    }
}
