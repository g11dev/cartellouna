package esercizi;


import java.text.MessageFormat;

class Cerchio {
    float raggio;
    static double pgreco;

    public Cerchio(float raggio) {
        setRaggio(raggio);
        pgreco = 3.14;

    }

    @Override
    public String toString() {
        return "Cerchio{" +
                "raggio=" + raggio +
                '}';
    }

    public float getRaggio() {
        return raggio;
    }

    public void setRaggio(float raggio) {
        if (raggio <= 0) {
            System.err.println("il raggio dle cerchio non puo essere negativo! verrà impostato 1 di default");
            this.raggio = 1;
        }
        this.raggio =raggio;
    }

    public Double getArea(){
        return raggio*raggio*pgreco;
    }

    public Double getPerimetro() {
        return 2*pgreco*raggio;
    }

    public Boolean piuGrandeDi(Cerchio c) {
        return this.raggio > c.raggio;
    }
}

public class ese3 {
    public static void main(String[] args) {
        Cerchio biggie = new Cerchio (10111);
        Cerchio sma = new Cerchio((float) 11.2);             // uso il casting per trasformare dato prima di inserirlo (float vs double)

        // format dentro sout (MIA)
        String s= MessageFormat.format("l'area di biggie è {0}", biggie.getArea());
        System.out.println(s);
        System.out.println(biggie.getPerimetro());
        System.out.println(sma.piuGrandeDi(biggie));
        System.out.println(biggie.toString());
    }
}
