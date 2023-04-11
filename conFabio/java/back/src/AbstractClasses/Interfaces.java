package AbstractClasses;


import java.util.ArrayList;

interface Linea {
    // Restituisce le coordinate x, y di una estremità
        //se passo 1 è la prima estremità, se passo 2 è la seconda
    // le coordinate sono restituite come un array di 2 interi

    float [] getPunto(int n);

    // Restituisce la lunghezza della linea
    float getLunghezza();

    // Restituisce vero se la linea è contigua alla linea passata
    boolean contigua(Linea l);
}

class LineaImpl implements Linea {

    float[] punto1;
    float[] punto2;

    public LineaImpl(float[] punto1, float[] punto2) {
        this.punto1 = punto1;
        this.punto2 = punto2;
    }

    public float[] getPunto(int n) {
        switch(n) {
            case 1 -> {
                return punto1;
            }
            case 2 -> {
                return punto2;
            }
            default -> {
                System.out.println("Hai chiesto un estremità sbagliata");
                return null;
            }
        }
    }

    @Override
    public float getLunghezza() {
        double quadrati = Math.pow(punto2[0] - punto1[0],2) + Math.pow(punto2[1] - punto1[1],2);                // ",2" indica la potenza a cui elevo tutto
        return  (float) Math.sqrt(quadrati);
    }

    @Override
    public boolean contigua(Linea l) {
        return false;
    }
}

public class Interfaces {
    public static void main(String[] args) {
        LineaImpl l = new LineaImpl(new float []{2f, 3},new float [2]);         //creo lista con "new + float[] {valore1, valore2} (con new float[2])
    }
}
