package com.ennovaresearch.prova.spring.Repositories;

import com.ennovaresearch.prova.spring.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepositories  extends JpaRepository <Book, Long> {          // long -> stesso tipo dell'ID   |   book -> classe
    List<Book> findByTitle(String title);
    List<Book> findByTitleContaining(String title);
}
