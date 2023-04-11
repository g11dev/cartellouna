package Liste;

import org.w3c.dom.ls.LSOutput;

import java.util.ArrayList;
import java.util.Arrays;

public class GliArray {
    public static void main(String[] args) {
        int[] a = new int[10];
        Arrays.stream(a).forEach(System.out::println);              //pesco dalla libreria "Arrays" il metodo 'stream' e lo uso sull'array 'a'

        a[0] = 4;
        a[1] = 56;
        a[3] = 7;

        for (int i = 0; i < 10; i++)
            System.out.println(a[i]);


    }
}
