package ComplexClasses;


class Animale {
    private String nome;
    private String specie;
    private String colore;

    public Animale(String nome, String specie, String colore) {
        this.nome = nome;
        this.specie = specie;
        this.colore = colore;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSpecie() {
        return specie;
    }

    public void setSpecie(String specie) {
        this.specie = specie;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }
}

class Gatto extends Animale {
    public Gatto(String nome, String colore) {
        super(nome, "felino", colore);
    }
}


public class Ereditarietà {
    public static void main(String[] args) {

    }
}
