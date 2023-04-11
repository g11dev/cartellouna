package Eccezioni;

import java.sql.SQLOutput;
import java.util.Scanner;

public class Eccezioni {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Inserisci un numero: ");
        try {
            String l = sc.nextLine();
            int n = Integer.parseInt(l);
            System.out.println("hai scritto " + n);
        } catch (NumberFormatException e) {          //metto la 'e' perchè serve, istanza di classe "NumberFormatExceptio
            System.out.println("Hai scritto un numero sbagliato");
            System.out.println("Messaggio di errore " + e.getMessage());
        }
        System.out.println("Fine del programma");

    }



}
