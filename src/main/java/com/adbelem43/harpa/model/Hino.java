package com.adbelem43.harpa.model;


import lombok.Getter;

import java.util.List;

@Getter
public class Hino {

    private Integer numero;
    private String titulo;
    private List<String> versos;

    public Hino(Integer numero, String titulo, List<String> versos){
        this.numero = numero;
        this.titulo = titulo;
        this.versos = versos;
    }

}
