package java1syntax;


// STRING -> non serve importarla perchè fa parte dello starter pack nativo std di java (nel built-in)
public class ContinueInstruction {
    public static void main(String[] args) {
        for (int i=0; i<100; i++) {
            if (i %2 !=0) continue;         // salta in cima al ciclo se viene attivata
            String msg = String.format("il numero è %d", i);
            System.out.println(msg);

        }
    }
}
