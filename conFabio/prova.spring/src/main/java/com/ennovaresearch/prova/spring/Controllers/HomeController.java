package com.ennovaresearch.prova.spring.Controllers;

import com.ennovaresearch.prova.spring.BookServices.BookServices;
import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;

@Controller
public class HomeController {

    @Autowired                                      //per fare DEPENDENCES INJECTION
    BookServices bs;                                // tramite la classe "BookServices" (che ho creato) -> variabile che punta istanza (che poi usero per accedere ai metodi)
    @RequestMapping(value = "/")                    // quello che c'è appena dopo "il nome del sito/indirizzo del server"
    public ModelAndView requestBooks() {
        List<Book> libri = bs.allBooks();
        HashMap<String, Object> params = new HashMap<>();           // HASHMAP -> per usare "dict" (map in java), prende coppia valori, con il primo accedo al secondo
        params.put("libri", libri);                           // params.put(chiave, valore) -> chiave (univoca): valore(qualsiasi)
        return new ModelAndView("index", params);          // file che creeremo (e concateneremo a View)
    }

    @RequestMapping(value = "/harry")                    // quello che c'è appena dopo "il nome del sito/indirizzo del server"
    public ModelAndView cercaHarry() {

        HashMap<String, Object> params = new HashMap<>();           // HASHMAP -> per usare "dict" (map in java), prende coppia valori, con il primo accedo al secondo
        List<Book> libri = bs.findByTitleContains("Harry");
        params.put("libri", libri);                           // params.put(chiave, valore) -> chiave (univoca): valore(qualsiasi)
        return new ModelAndView("index", params);          // file che creeremo (e concateneremo a View)
    }



}