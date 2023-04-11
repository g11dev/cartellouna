package AbstractClasses;

import java.util.*;

interface Pila {
    // RESTITUISCE TRUE se è vuota
    boolean vuota();

    // AGGIUNGE un elemento in cima alla pila
    void aggiungi(String s);

    // TOGLIE un elemento in cima alla pila e lo restituisce
    // SE VUOTA, RESTITUISCE null
    String togli();

    //STAMPA LA PILA IN CONSOLE, una dopo l'altra (quella in cima la mettiamo per prima)
    void stampa();

    //SVUOTA totalmente la pila
    void svuota();
}


class Stack implements Pila {
    ArrayList<String> stack;

    public Stack() {
        this.stack = new ArrayList<String>();
    }

    @Override
    public boolean vuota() {
        if (stack.isEmpty())
            return true;
        else return false;
    }

    @Override
    public void aggiungi(String s) {
        stack.add(s);
    }

    @Override
    public String togli() {
        String rimosso;
        if (stack.isEmpty()) {
            return null;
        } else
            rimosso = stack.get(stack.indexOf(stack.size() - 1));
        stack.remove(stack.indexOf(stack.size() - 1));
        return rimosso;
    }

    @Override
    public void stampa() {
        ArrayList<String> x = new ArrayList<>(stack);               //FROZEN COPY di task
            Collections.reverse(x);
        System.out.println(x);
    }

    @Override
    public void svuota() {
        stack.clear();
    }
}

public class Interfaces2 {
    public static void main(String[] args) {
        Stack stack1 = new Stack();
        System.out.println(stack1.vuota());
        System.out.println("scrivi il nome dell'elemento che vuoi aggiungere");
        Scanner sc = new Scanner(System.in);

        int i = 0;
        while (i<5) {
            String s = sc.nextLine();
            stack1.aggiungi(s);
            i = i + 1;
        }
        stack1.stampa();
        System.out.println(stack1.vuota());
    }
}
