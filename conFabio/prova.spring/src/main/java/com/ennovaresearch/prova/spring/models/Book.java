package com.ennovaresearch.prova.spring.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Book {

    // JAVA BEAN -> quando credo classe, con suo costruttore e getter and setter di ogni attributo


    // classico esempio di DEPENDENCE INJECTION
    @Id             // per fargli capire che voglio che mi genera "id"
    @GeneratedValue // per generare valori per l'ide
    // ANNOTAZIONI -> agiscono sulla riga subito successiva
    private Long id;
    private String author;
    private String title;
    private Integer yearr;

    public Book(String author, String title, Integer yearr) {
        this.author = author;
        this.title = title;
        this.yearr = yearr;
    }

    public Book() {
        this.author = "";
        this.title = "";
        this.yearr = 0;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getyearr() {
        return yearr;
    }

    public void setyearr(Integer yearr) {
        this.yearr = yearr;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
