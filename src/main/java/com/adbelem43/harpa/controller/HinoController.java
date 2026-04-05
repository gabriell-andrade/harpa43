package com.adbelem43.harpa.controller;

import com.adbelem43.harpa.model.Hino;
import com.adbelem43.harpa.service.HinoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hinos")
public class HinoController {

    private final HinoService service;

    public HinoController(HinoService service) {
        this.service = service;
    }

    @GetMapping("/{numero}")
    public Hino buscar(@PathVariable Integer numero) {
        return service.buscarPorNumero(numero);
    }
}
