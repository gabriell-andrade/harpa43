package com.adbelem43.harpa.model;


import java.util.List;

public class Hino {

    private Integer numero;
    private String titulo;
    private List<String> versos;

    public Hino(Integer numero, String titulo, List<String> versos){
        this.numero = numero;
        this.titulo = titulo;
        this.versos = versos;
    }

    public Integer getNumero() {
        return numero;
    }

    public String getTitulo() {
        return titulo;
    }

    public List<String> getVersos() {
        return versos;
    }
}
