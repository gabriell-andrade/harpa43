package com.adbelem43.harpa.service;

import com.adbelem43.harpa.model.Hino;
import com.adbelem43.harpa.repository.HinoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HinoService {

    private final HinoRepository repository;

    public HinoService(HinoRepository repository) {
        this.repository = repository;
    }

    public Hino buscarPorNumero(Integer numero) {
        return repository.buscarPorNumero(numero)
                .orElseThrow(() -> new RuntimeException("Hino não encontrado"));
    }
}
