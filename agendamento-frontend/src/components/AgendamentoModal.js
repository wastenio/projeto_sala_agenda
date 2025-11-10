import React from 'react';
import { Modal, Button, Row, Col, Badge } from 'react-bootstrap';
import { deleteAgendamento } from '../services/api';

export default function AgendamentoModal({ show, onHide, agendamento, onDeleted, onEdit }) {
  if (!agendamento) return null;

  const handleDelete = async () => {
    if (!window.confirm('Confirma exclusão?')) return;
    try {
      await deleteAgendamento(agendamento.id);
      onDeleted && onDeleted(agendamento.id);
      onHide();
    } catch (err) {
      alert('Erro ao deletar');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>📅 Detalhes do Agendamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={8}>
            <h5>{agendamento.descricao}</h5>
            <p>
              <strong>Data:</strong> {agendamento.data}<br />
              <strong>Turno:</strong> {agendamento.turno}<br />
              <strong>Horário:</strong> {agendamento.horario}<br />
              <strong>Sala:</strong> {agendamento.sala?.descricao || agendamento.sala?.id}
            </p>
            <Badge bg="info">{agendamento.turno}</Badge>{' '}
            <Badge bg="secondary">Horário {agendamento.horario}</Badge>
          </Col>
          <Col md={4} className="text-end border-start">
            <h6 className="mb-3">Ações</h6>
            <Button
              variant="outline-primary"
              size="sm"
              className="mb-2 w-100"
              onClick={() => onEdit && onEdit(agendamento)}
            >
              ✏️ Editar
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              className="mb-2 w-100"
              onClick={handleDelete}
            >
              🗑️ Excluir
            </Button>
            <Button variant="outline-secondary" size="sm" className="w-100" onClick={onHide}>
              Fechar
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
