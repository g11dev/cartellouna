package java1syntax;

import java.util.Scanner;
import java.lang.Math;
import java.text.MessageFormat;

public class MCM {                  //MCM = numero minimo che può essere diviso per entrambi i fattori
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("inserisci il primo numero");
        int a = sc.nextInt();
        System.out.println("inserisci il secondo numero");
        int b = sc.nextInt();

        int c = a*b;

        int aresto = 0;
        int bresto = 0;

        for (int i= Math.max(a, b); i<=a*b; i++) {
            c = i;
            aresto = i%a;
            bresto = i%b;
            if ((aresto == 0) && (bresto==0))
                break;
        }
        String d = String.format("Il MCM è di %d ", c);               // %d -> inserisce numero intero (e accetta solo quello)
        System.out.println(d);
        String msg = MessageFormat.format("Il MCM è di {0} ", c);
        System.out.println(msg);
    }
}































