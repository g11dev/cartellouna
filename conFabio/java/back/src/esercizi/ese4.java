package esercizi;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Random;



public class ese4 {
    public static void main(String[] args) {
        Random r = new Random();
        ArrayList<Integer> lista = new ArrayList<>();

        //Inserisco numeri a caso
        r.ints(20, 1, 10).forEach(lista::add);
        System.out.println(lista);


        ArrayList<Integer> pari = new ArrayList<>();
        ArrayList<Integer> dispari = new ArrayList<>();


        // LISTA PARI E DISPARI
        lista.forEach(n ->
        {
            if (n % 2 == 0) pari.add(n);
            else dispari.add(n);
        });

        System.out.println(pari);
        System.out.println(dispari);

        //ORDINARE
        lista.sort(Comparator.naturalOrder());
        System.out.println("la lista ordinata è: \n" + lista);


        //SOMMA e MEDIA
        int sum = lista.stream().mapToInt(Integer::intValue).sum();
        System.out.println("la somma è " + sum);        // 15
        double mean = (double) sum / lista.size();
        System.out.println("la media è " + mean);

        System.out.println(lista.indexOf(3));


        // STAMPARE IL NUMERO CHE APPARE PIU VOLTE NELLA LISTA

        ///////////// VEDERE VERSIONI ESERCIZI FRA


        int numeroTop = 0;
        int numeroLive = 0;
        int contaTop = 0;
        int contaLive = 0;


        for (int i = 1; i < 10; i++) {
            for (int n = 0; n < 20; n++) {
                if (lista.get(n) == i) {
                    numeroLive = i;
                    contaLive = contaLive + 1;
                }
                if (contaLive > contaTop) numeroTop = numeroLive;
            }
        }
        System.out.println(numeroTop);
    }
}
