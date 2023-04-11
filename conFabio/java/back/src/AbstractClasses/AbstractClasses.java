package AbstractClasses;

import java.util.ArrayList;

abstract class Scacchiera {
    ArrayList<Pezzo> pezzi;

    public Scacchiera() {
        this.pezzi = new ArrayList<Pezzo>();
    }
}

abstract class Pezzo {
    String tipo;
    boolean colore;                                         //quando colore bianco -> true (E viceversa) (tutte queste cose si mettono nella documentazione e possono essere scritti come commenti
    int[] posizione;

    public abstract boolean mossa(int[] dest);
    abstract boolean mossaConsentita(int[] dest);           //tutte queste cose andrebbero scritte nella documentazione
    abstract boolean vivo();
}

class Torre extends Pezzo {
    public Torre(boolean colore, int[] pos) {
        this.tipo = "Torre";
        this.colore = colore;
        this.posizione = pos;
    }
    @Override
    public boolean mossa(int[] dest) {
        // Setto la Scacchiera a null ma in un programma vero andrebbe recuperata e utilizzata per determinare se la mossa è consentita piu o meno
        if (mossaConsentita(dest)) {
            this.posizione = dest;
            return true;
        }
        else {
            System.err.println("Mossa non consentita");
            return false;
        }
    }

    @Override
    boolean mossaConsentita(int[] dest) {
        return true;
    }

    @Override
    boolean vivo() {
        return this.posizione[0] != -1 && this.posizione[1] != -1;
    }
}


public class AbstractClasses {
    public static void main(String[] args) {
        Pezzo tb1 = new Torre(true, new int[]{0,0});
        Pezzo tb2 = new Torre(true, new int[]{0,7});
        Pezzo tn1 = new Torre(false, new int[]{7,0});
        Pezzo tn2 = new Torre(false, new int[]{7,7});
    }
}
