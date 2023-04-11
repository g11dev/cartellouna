package java1syntax;

import java.sql.SQLOutput;
import java.util.Scanner;

public class CicloWhile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Come ti chiami amic*?");
        String nome = sc.nextLine();
        while (nome.length() < 3) {
            System.out.println("Il nome è troppo corto ");
            System.out.println("Come ti chiami amic*?");
            nome = sc.nextLine();
        }
        System.out.println("Il tuo nome è " + nome);
    }
}
