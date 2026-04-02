package com.adbelem43.harpa.repository;

import com.adbelem43.harpa.model.Hino;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class HinoRepository {

    private final Map<Integer, Hino> hinos = new HashMap<>();

    public HinoRepository() {
        hinos.put(15, new Hino(
                15,
                "Grandioso és Tu",
                List.of(
                        "Senhor, meu Deus, quando eu maravilhado",
                        "Contemplo a Tua imensa criação",
                        "A terra e o mar e o céu todo estrelado",
                        "Me vêm falar da tua perfeição"
                )
        ));
    }

    public Optional<Hino> buscarPorNumero(Integer numero) {
        return Optional.ofNullable(hinos.get(numero));
    }

    public List<Hino> listarTodos() {
        return new ArrayList<>(hinos.values());
    }
}
