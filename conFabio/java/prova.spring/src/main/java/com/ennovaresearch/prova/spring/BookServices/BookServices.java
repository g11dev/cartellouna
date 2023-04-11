package com.ennovaresearch.prova.spring.BookServices;


import com.ennovaresearch.prova.spring.Repositories.BookRepositories;
import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServices {

    @Autowired
    BookRepositories bookRepositories;          // perchè se no non posso usare il metodo a linea 18
    //ma BookRepositories è una 'interfaccia'!! -> quindi java crea classe per poi poter usare il metodo

    public List<Book> allBooks() {                  //List -> INTERFACCIA (padre di ArrayList)
        return bookRepositories.findAll();
    }


    //RESTITUISCE LIBRI che nel titolo hanno una parola
    public List<Book> booksWithTitle(String title) {
        return bookRepositories.findByTitle(title);                   // metodo già pronto che mi permette di trovare elemento -> io devo solo cambiare la parola chiave "Title"
    }

    //SALVA UN LIBRO nella base di dati
    public void saveBook(Book book) {
        bookRepositories.save(book);                //.SAVE() -> gestisce sia INSERT INTO e UPDATE
    }

    public List<Book> findByTitleContains(String title) {
        return bookRepositories.findByTitleContaining(title);         // metodo già pronto che mi permette di trovare elemento -> io devo solo cambiare la parola chiave "Title"
    }

}
