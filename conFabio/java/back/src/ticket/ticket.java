package ticket;

class Biglietto {
    String partenza;
    String arrivo;
    Boolean convalidato;
    Double prezzo;
    static Double scontoAnziano = 0.1;

    Double getPrezzo() {
        return this.prezzo;
    }

    Double getPrezzoAnziano() {
        return this.prezzo* (1- scontoAnziano);
    }

    static void setScontoAnziano(double sconto) {
        Biglietto.scontoAnziano = sconto;
    }


}

public class ticket {
    public static void main(String[] args) {
        Biglietto ciccio = new Biglietto();
        ciccio.prezzo = 100000.00;
        ciccio.partenza = "milano";
        ciccio.arrivo = "singapore";
        ciccio.convalidato = true;
        System.out.println(ciccio.getPrezzo());
        System.out.println(ciccio.getPrezzoAnziano());
        Biglietto.setScontoAnziano(0.7);
        System.out.println(Biglietto.scontoAnziano);
        System.out.println(ciccio.getPrezzoAnziano());

    }
}
