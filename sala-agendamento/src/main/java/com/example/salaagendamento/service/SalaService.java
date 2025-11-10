
package com.example.salaagendamento.service;

import com.example.salaagendamento.model.Sala;
import com.example.salaagendamento.repository.SalaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SalaService {
    private final SalaRepository repo;

    public SalaService(SalaRepository repo) {
        this.repo = repo;
    }

    public List<Sala> findAll() { return repo.findAll(); }
    public Optional<Sala> findById(UUID id) { return repo.findById(id); }
    public Sala save(Sala s) { return repo.save(s); }
    public void deleteById(UUID id) { repo.deleteById(id); }
}
