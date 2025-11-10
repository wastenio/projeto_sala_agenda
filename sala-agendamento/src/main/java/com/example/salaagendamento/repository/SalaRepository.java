package com.example.salaagendamento.repository;

import com.example.salaagendamento.model.Sala;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SalaRepository extends JpaRepository<Sala, UUID> {
}
