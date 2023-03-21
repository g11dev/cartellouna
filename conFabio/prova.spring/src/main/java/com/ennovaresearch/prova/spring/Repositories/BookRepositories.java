package com.ennovaresearch.prova.spring.Repositories;

import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepositories  extends JpaRepository <Book, Long> {          // long -> stesso tipo dell'ID   |   book -> classe
    // una repository è una classe che estende questa
        // i metodi che chiamo qua dentro è perchè non sono chiamabili direttamente da services(e ovunque)
        // metodi complicati da inserire qui, nell'altro caso ci sono già di base
    List<Book> findByTitle(String title);
    List<Book> findByTitleContaining(String title);
    Optional<Book> findById(long id);                       // tramite findByid -> riceve id (che mando io da input) e poi dopo mi restituisce un elemento List<Book>
}

