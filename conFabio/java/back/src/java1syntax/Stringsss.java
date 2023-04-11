package java1syntax;

public class Stringsss {
    public static void main(String[] args) {            //scrivo 'main' + tab -> mi restituisce tutta la scritta del main
        String a = "Buon" + "giorno";
        System.out.println(a);
        // carattere alla posizione n. 3 della stringa
        System.out.println(a.charAt(3));
        // trasformo tutto in minuscolo
        System.out.println(a.toLowerCase());            //a tutto minuscolo
        System.out.println(a.length());                 //numero caratteri/ lunghezza
        System.out.println(a.replace("B","Y"));     // replace carattere
        System.out.println(a.substring(4,10));
    }
}
