package esercizi;

class Impiegato {
    public String nome;
    public String cognome;
    public Double stipendioLordo;
    public String ruolo;

    public Impiegato (String nome, String surname, Double lordo, String ruolo) {
        this.nome = nome;
        cognome = surname;
        this.ruolo = ruolo;
        stipendioLordo = lordo;
    }

    public Impiegato (String nome, String surname) {
        this.nome = nome;
        cognome = surname;
        ruolo = null;
        stipendioLordo = -1.00;
    }

   public void stipendioNetto() {
        if (this.ruolo.equals("amministratore")) {
            System.out.println("lo stipendio dell' amministratore è" + this.stipendioLordo * 1.1);
        }
        else System.out.println("lo stipendio dell' impiegato è" + this.stipendioLordo*0.72);
    }

}

public class ese2 {
    public static void main(String[] args) {
        Impiegato spike = new Impiegato("spike", "lee",100.00,"impiegato" );
        Impiegato boss = new Impiegato("buu","io", 1000.00, "amministratore");
        spike.stipendioNetto();
        boss.stipendioNetto();

    }
}
