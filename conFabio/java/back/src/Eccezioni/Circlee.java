package Eccezioni;

class RaggioWrongException extends Exception {

    }

class Circle {
    public static final double PI = Math.PI;
    private float raggio;

    public Circle (float raggio) throws RaggioWrongException {
        this.setRaggio(raggio);
    }

    public float getRaggio() {
        return raggio;
    }

    public void setRaggio(float raggio) throws RaggioWrongException {         //con throws rimando gestione eccezione al metodo
        if (raggio<0)
            throw new RaggioWrongException();              //essendo che non c'è il try catch, glielo scrivo affianco al metodo
        this.raggio = raggio;
    }
}



public class Circlee {
    public static void main(String[] args) {
        Circle c = null;
        try {
            c = new Circle(-3);
        } catch (RaggioWrongException e) {
            System.err.println("Occhio che hai immesso un raggio sbagliato");
        }
    }
}
