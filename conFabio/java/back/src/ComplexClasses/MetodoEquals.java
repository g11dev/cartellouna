package ComplexClasses;


import java.util.Objects;
import java.util.Scanner;


class Squadra {
    private String nome;
    private String sede;
    private int annoFondazione;

    public Squadra(String nome, String sede, int annoFondazione) {
        this.nome = nome;
        this.sede = sede;
        this.annoFondazione = annoFondazione;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }

    public int getAnnoFondazione() {
        return annoFondazione;
    }

    public void setAnnoFondazione(int annoFondazione) {
        this.annoFondazione = annoFondazione;
    }

    @Override
    public String toString() {
        return "Squadra{" +
                "nome='" + nome + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {                                    // pesco da o (istanza della libreria fondatrice -> )
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;       //uso getClass() -> perchè fornito da classe
        Squadra squadra = (Squadra) o;                                   // CASTING dell'elemento puntato da o e reso come 'classe -> squadra'
        return nome.equals(squadra.nome);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome);
    }
}

public class MetodoEquals {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Che squadra tifi?");
        String sq = sc.nextLine();
        if (sq.equals("Napoli"))
            System.out.println("Vincerai lo scudetto");
        else System.out.println(("quest'anno pannocchie!!!!"));

    }
}
