package com.example.salaagendamento.controller;

import com.example.salaagendamento.model.Sala;
import com.example.salaagendamento.repository.SalaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.Arrays;


@RestController
@RequestMapping("/api/salas")
@CrossOrigin(origins = "*")
public class SalaController {

    private final SalaRepository salaRepository;

    public SalaController(SalaRepository salaRepository) {
        this.salaRepository = salaRepository;
    }

    @GetMapping
    public List<Sala> listarSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sala> buscarPorId(@PathVariable UUID id) {
        Optional<Sala> sala = salaRepository.findById(id);
        return sala.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Sala> criarSala(@RequestBody Sala sala) {
        if (sala.getStatus() == null) {
            sala.setStatus(com.example.salaagendamento.model.StatusSala.DISPONIVEL);
        }
        Sala novaSala = salaRepository.save(sala);
        return ResponseEntity.ok(novaSala);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sala> atualizarSala(@PathVariable UUID id, @RequestBody Sala salaAtualizada) {
        return salaRepository.findById(id)
                .map(sala -> {
                    sala.setDescricao(salaAtualizada.getDescricao());
                    sala.setAndar(salaAtualizada.getAndar());
                    sala.setCapacidade(salaAtualizada.getCapacidade());
                    sala.setStatus(salaAtualizada.getStatus());
                    salaRepository.save(sala);
                    return ResponseEntity.ok(sala);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirSala(@PathVariable UUID id) {
        return salaRepository.findById(id)
                .map(sala -> {
                    salaRepository.delete(sala);
                    return ResponseEntity.noContent().<Void>build(); // 👈 Aqui está a correção
                })
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/status")
    public ResponseEntity<List<String>> listarStatus() {
        List<String> statusList = Arrays.stream(com.example.salaagendamento.model.StatusSala.values())
                .map(Enum::name)
                .toList();
        return ResponseEntity.ok(statusList);
    }



}
