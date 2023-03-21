package com.ennovaresearch.prova.spring.Controllers;

import com.ennovaresearch.prova.spring.BookServices.BookServices;
import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Optional;


@Controller
public class DeleteBookController {
    @Autowired
    BookServices bs;


    //MAPPING
    @GetMapping (value="/deleteBook")
    public ModelAndView deleteBook(@RequestParam(required=false) long id){
        boolean cancellato;


        //RECUPERA IL LIBRO
        Optional<Book> ob = bs.getBookById(id);
        if(ob.isEmpty())
            cancellato = false;
        else {
            bs.deleteBook(ob.get());
            cancellato = true;
        }


        //INFORMIAMO L'UTENTE che il libro è stato cancellato
        HashMap<String,Object> params = new HashMap<>();            // mettiamo "object" -> perchè così poi potrò inserire un dato qualsiasi
        params.put("cancellato", cancellato);
        ob.ifPresent(book -> params.put("libro", book));
        return new ModelAndView("libro-cancellato", params);
    }

}
