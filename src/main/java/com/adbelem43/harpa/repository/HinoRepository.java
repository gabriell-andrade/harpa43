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

        hinos.put(467, new Hino(
                467,
                "Sobre as Ondas do Mar",
                List.of(
                        List.of(
                                "Oh! Por que duvidar",
                                "Sobre as ondas do mar",
                                "Quando Cristo caminho abriu?",
                                "Quando forçado és, contra as ondas lutar",
                                "Seu amor a ti quer revelar"
                        ),
                        List.of(
                                "Trevas vêm te assustar",
                                "Tempestades no mar?",
                                "Da montanha o Mestre te vê",
                                "E na tribulação",
                                "Ele vem socorrer",
                                "Sua mão bem te pode suster"
                        ),
                        List.of(
                                "Podes tu recordar",
                                "Maravilhas, sem par?",
                                "No deserto ao povo fartou",
                                "E o mesmo poder",
                                "Ele sempre terá",
                                "Pois não muda e não falhará"
                        ),
                        List.of(
                                "Quando pedes mais fé",
                                "Ele ouve, ó crê!",
                                "Mesmo sendo em tribulação",
                                "Quando a mão de poder o teu ego tirar",
                                "Sobre as ondas poderás andar"
                        )
                ),
                List.of(
                        "Solta o cabo da nau",
                        "Toma os remos na mão",
                        "E navega com fé em Jesus",
                        "E então, tu verás que bonança se faz",
                        " Pois com Ele, seguro serás"
                )
        ));
    }

    public Optional<Hino> buscarPorNumero(Integer numero) {

        return Optional.ofNullable(hinos.get(numero));
    }
}
