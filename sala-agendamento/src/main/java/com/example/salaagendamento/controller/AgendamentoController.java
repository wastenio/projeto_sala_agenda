
package com.example.salaagendamento.controller;

import com.example.salaagendamento.model.Agendamento;
import com.example.salaagendamento.repository.AgendamentoRepository;
import com.example.salaagendamento.repository.SalaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/agendamentos")
@CrossOrigin(origins = "${cors.allowed.origin:}")
public class AgendamentoController {

    private final AgendamentoRepository agRepo;
    private final SalaRepository salaRepo;

    public AgendamentoController(AgendamentoRepository agRepo, SalaRepository salaRepo) {
        this.agRepo = agRepo;
        this.salaRepo = salaRepo;
    }

    @GetMapping
    public List<Agendamento> listAll() {
        return agRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agendamento> getById(@PathVariable UUID id) {
        return agRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Agendamento> create(@RequestBody Agendamento request) {
        if (request.getSala() == null || request.getSala().getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        var salaOpt = salaRepo.findById(request.getSala().getId());
        if (salaOpt.isEmpty()) return ResponseEntity.badRequest().build();

        request.setSala(salaOpt.get());
        var saved = agRepo.save(request);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agendamento> update(@PathVariable UUID id, @RequestBody Agendamento request) {
        return agRepo.findById(id).map(existing -> {
            existing.setData(request.getData());
            existing.setDescricao(request.getDescricao());
            existing.setHorario(request.getHorario());
            existing.setTurno(request.getTurno());
            if (request.getSala()!=null && request.getSala().getId()!=null) {
                salaRepo.findById(request.getSala().getId()).ifPresent(existing::setSala);
            }
            var saved = agRepo.save(existing);
            return ResponseEntity.ok(saved);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        if (!agRepo.existsById(id)) return ResponseEntity.notFound().build();
        agRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
