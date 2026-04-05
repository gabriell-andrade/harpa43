package com.adbelem43.harpa.repository;

import com.adbelem43.harpa.model.Hino;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class HinoRepository {

    private final Map<Integer, Hino> hinos = new HashMap<>();

    public HinoRepository() {

        hinos.put(7, new Hino(
                7,
                "Cristo Cura Sim!",
                List.of(
                        List.of(
                                "Contra os males deste mundo",
                                "Deus nos vale só",
                                "Não há mal que Deus não cure",
                                "Pois de nós tem dó"
                        ),
                        List.of(
                                "Derramou seu sangue puro",
                                "Pra remir a mim",
                                "Quando ungido sou de azeite",
                                "Sou curado, enfim!"

                        ),
                        List.of(
                                "Só nossa alma é bem segura",
                                "Oculta em Jesus",
                                "Ele, o bálsamo da vida",
                                "Derramou na cruz"
                        ),
                        List.of(
                                "Glória a Deus! Eterna glória",
                                "Demos-Lhe louvor",
                                "Glória, cânticos e hosanas",
                                "Dai ao Redentor!"
                        )
                ),
                List.of(
                        "Cristo cura, sim",
                        "Cristo cura, sim",
                        "Seu amor por nós é imenso",
                        "Ele cura, sim!"
                )
        ));
    }

    public Optional<Hino> buscarPorNumero(Integer numero) {

        return Optional.ofNullable(hinos.get(numero));
    }
}
