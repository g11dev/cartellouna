package models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id; private String author; private String title;
    // standard constructor
    public Book() { this.id = null;
        this.author = "";
        this.title = ""; }
    public Book(String author, String title) { this.id = null;
        this.author = author;
        this.title = title; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
}