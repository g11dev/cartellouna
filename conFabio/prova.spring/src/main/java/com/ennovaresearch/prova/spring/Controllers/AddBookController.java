package com.ennovaresearch.prova.spring.Controllers;


import com.ennovaresearch.prova.spring.BookServices.BookServices;
import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;

@Controller
public class AddBookController {

    public AddBookController() {
    }

    @Autowired
    BookServices bs;
   //@RequestMapping(value = "/addBook", method = RequestMethod.GET)
    @GetMapping(value="/addBook")
    public ModelAndView addBook(@RequestParam(required = true) String autore, @RequestParam(required = true) String titolo, @RequestParam(required=true) int anno) {

        // Assumo che tutti i parametri ci sono e sono validi
        Book nuovoLibro = new Book(autore, titolo, anno);

        //SALVIAMO il libro nella base di dati
        bs.saveBook(nuovoLibro);
        HashMap<String, Object> params = new HashMap<>();                                //'params' -> nome della variabile (poteva essere anche pippo
        params.put("libro",nuovoLibro);
        return new ModelAndView("libro-aggiunto", params);                      //libro-aggiunto è il nome del nuovo file.ftl di questa pagina

    }




}
