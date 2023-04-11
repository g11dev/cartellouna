package ComplexClasses;

import java.time.LocalDate;

class Persona {
    public String nome;
    public String cognome;
    public int annoNascita;
    public String gender;

    public Persona (String nome, String cognome, int annoNascita, String genere) {    //con il costruttore sono OBBLIGATO ad inserire tutti i parametri
    //COSTRUTTORE
        this.nome = nome;
        this.cognome = cognome;
        this.annoNascita = annoNascita;
        gender = genere;
    }

    public int getEta() {
        return LocalDate.now().getYear() - this.annoNascita;                       //TIMESTAMP -> .Adesso.getAnno
    }
}

public class Costruttore {
    public static void main(String[] args) {
        Persona mj = new Persona("micheal", "jordan", 1963, "m");
        System.out.println(mj.getEta());

    }
}
