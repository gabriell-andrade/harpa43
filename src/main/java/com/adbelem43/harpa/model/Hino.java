package com.adbelem43.harpa.model;


import lombok.Getter;

import java.util.List;

@Getter
public class Hino {

    private Integer numero;
    private String titulo;
    private List<List<String>> estrofes;
    private List<String> refrao;

    public Hino(Integer numero, String titulo, List<List<String>> estrofes, List<String> refrao) {
        this.numero = numero;
        this.titulo = titulo;
        this.estrofes = estrofes;
        this.refrao = refrao;
    }

    public Integer getNumero() {
        return numero;
    }

    public String getTitulo() {
        return titulo;
    }

    public List<List<String>> getEstrofes() {
        return estrofes;
    }

    public List<String> getRefrao() {
        return refrao;
    }
}
