package ComplexClasses;


class Strumento {
    public void suona() {
        System.out.println("Sono un generico strumento, non ho suono ");
    }
}

class Pianoforte extends Strumento{
    @Override
    public void suona() {
        System.out.println(" Don Don ");    }
}

class Chitarra extends Strumento {
    @Override
    public void suona() {
        System.out.println(" Drum drum ");
    }
}

public class Ereditarieta2 {
    public static void main(String[] args) {
        Strumento s = new Chitarra();                               //creo oggetto new nello spazio di memoria, "di tipo" Chitarra, che è puntato da s che è di tipo Strumento
        s.suona();
        s = new Pianoforte();
        s.suona();
    }
}
