package ComplexClasses;

class Auto {
    private static int ruote = 4;
    private static int volante = 1;
    public String colore;
    public String targa;
    public Cane caneDentro;

    //Esempio Metodo STATICO
    public static void stampaRuote() {
        System.out.println("l'auto ha" + ruote + "ruote");
    }

    //Esempio Metodo DINAMICO
    public String getNomeCane() {
        return this.caneDentro.nome;
    }
}


public class StaticDynamic {
    public static void main(String[] args) {                //serve perchè parte da qui la ricerca delle classi
    //Richiamo Metodo STATICO
    Auto.stampaRuote();


    //Richiamo Metodo DINAMICO
    Auto miaAuto = new Auto();
    miaAuto.targa = "AA123AA";
    miaAuto.colore = "rosso";
    miaAuto.caneDentro = new Cane();                    // all'attributo 'caneDentro' -> assegno una istanza della classe Cane()
    miaAuto.caneDentro.nome = "Jack";
    miaAuto.caneDentro.razza = "Jack Russel";

    //Richiamo il metodo DINAMICO
    String nomeCane = miaAuto.getNomeCane();
    System.out.println(nomeCane);
    }
}
