
package com.example.salaagendamento.service;

import com.example.salaagendamento.model.Agendamento;
import com.example.salaagendamento.repository.AgendamentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AgendamentoService {
    private final AgendamentoRepository repo;

    public AgendamentoService(AgendamentoRepository repo) {
        this.repo = repo;
    }

    public List<Agendamento> findAll() { return repo.findAll(); }
    public Optional<Agendamento> findById(UUID id) { return repo.findById(id); }
    public Agendamento save(Agendamento a) { return repo.save(a); }
    public void deleteById(UUID id) { repo.deleteById(id); }
}
