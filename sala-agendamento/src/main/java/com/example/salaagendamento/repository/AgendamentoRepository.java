
package com.example.salaagendamento.repository;

import com.example.salaagendamento.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;
import java.time.LocalDate;

public interface AgendamentoRepository extends JpaRepository<Agendamento, UUID> {
    List<Agendamento> findBySalaId(UUID salaId);
    List<Agendamento> findByData(LocalDate date);
}
