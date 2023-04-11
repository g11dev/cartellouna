package java1syntax;

import java.util.Scanner;

public class FirstNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("inserisci un numero intero");
        String num = sc.nextLine();
        int n = Integer.parseInt(num);
        boolean primo = true;
        for (int i= 2; i<n ; i++)
        {
            System.out.println("Non è un numero primo");
            primo = false;
            break;
        }
        if (primo)                                          //se inserisco valore booleano -> intendo 'se è vero'
            System.out.println("è un numero primo");        //se è un istruzione sola, posso non mettere le graffe (vale anche per else)
    }
}
