package ComplexClasses;

class Film {
    private String titolo;
    private String regista;
    private int durata;
    private int anno;               // niente attributi ridondanti, non elevare età se hai anno di nascita

    public Film(String titolo, String regista, int durata, int anno) {
        this.titolo = titolo;
        this.regista = regista;
        setDurata(durata);
        setAnno(anno);
    }

    public String getRegista() {
        return regista;
    }

    public void setRegista(String regista) {
        this.regista = regista;
    }

    public int getDurata() {
        return durata;
    }

    public void setDurata(int durata) {
        if (durata<1)
            System.err.println("La durata impostata è sbagliata");
        this.durata = durata;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        if (anno < 1887) {
            System.err.println(("l'anno impostato è sbagliato"));
            return;
        }
            this.anno = anno;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    @Override
    public String toString() {
        return String.format("%s (%d)", this.titolo, this.anno);
    }

    public boolean piuVecchioDi(Film altrofilm) {
        return this.anno < altrofilm.anno;
    }
}

public class GetterSetter {
    public static void main(String[] args) {
        Film shiny = new Film("shiny", "spike lee", 5000, 1);
        System.out.println(shiny);

    }
}
