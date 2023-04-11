package ComplexClasses;

import java.time.LocalDate;

class Cane {                                    //non posso mettere 'public class cane' -> non posso usarla perchè serve che nome si uguale a nomenome.java
    public String nome;
    public String razza;
    public int età;
    public int zampe;
    public void abbaia() {
        System.out.println("bau bau!!");
    }
    public int getAnnoNascita() {
        int anno = LocalDate.now().getYear();                  // per ottenere "timestamp"
                  //CLASSE.metodo().metodo()
        return anno - this.età;                                // "this" -> prende l'attributo dell'ISTANZA che ha chiamato il metodo
    }
}



public class MethodsAttributes {
    public static void main(String[] args) {
        Cane fufi = new Cane();
        fufi.nome = "Fufi";                                                    // fufi è un "ISTANZA"
        fufi.razza = "San Bernanrdo";
        fufi.età = 10;
        fufi.zampe = 4;

        System.out.println(fufi.nome + " ha " + fufi.età + " anni");

        fufi.abbaia();
        System.out.println("fufi è nato nel " + fufi.getAnnoNascita());

    }
}
