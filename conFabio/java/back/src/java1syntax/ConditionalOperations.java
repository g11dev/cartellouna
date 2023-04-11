package java1syntax;

import java.util.Scanner;                           // importo classe 'Scanner', da package 'util', da package Java

public class ConditionalOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Come ti chiami??");
        String nome = sc.nextLine();                        //nextLine() -> input del python
        System.out.println("Buongiorno " + nome);
        if ((nome.length()) >= 3) {
            System.out.println("Come ti chiami" + nome);
        } else {
            System.out.println("Nome troppo corto");
        }

    }
}
