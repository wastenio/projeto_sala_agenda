
package com.example.salaagendamento.model;

import jakarta.persistence.*;
import java.util.UUID;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Sala {

    @Id
    @Column(columnDefinition = "uuid")
    private UUID id;

    private String descricao;
    private String andar;
    private Integer capacidade;

    @Enumerated(EnumType.STRING)
    private StatusSala status;

    @PrePersist
    public void prePersist() {
        if (id == null) id = UUID.randomUUID();
    }
}
