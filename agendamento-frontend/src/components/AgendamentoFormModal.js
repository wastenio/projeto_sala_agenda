import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { createAgendamento, updateAgendamento } from '../services/api';

export default function AgendamentoFormModal({ show, onHide, agendamento, salas, onSaved }) {
  const [form, setForm] = useState({
    sala: '',
    data: '',
    turno: 'MANHA',
    horario: 'A',
    descricao: ''
  });

  useEffect(() => {
    if (agendamento) {
      setForm({
        sala: agendamento.sala?.id || '',
        data: agendamento.data,
        turno: agendamento.turno,
        horario: agendamento.horario,
        descricao: agendamento.descricao
      });
    } else {
      setForm({
        sala: '',
        data: '',
        turno: 'MANHA',
        horario: 'A',
        descricao: ''
      });
    }
  }, [agendamento]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.sala || !form.data || !form.descricao) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const body = {
      sala: { id: form.sala },
      data: form.data,
      turno: form.turno,
      horario: form.horario,
      descricao: form.descricao
    };

    try {
      if (agendamento) {
        await updateAgendamento(agendamento.id, body);
      } else {
        await createAgendamento(body);
      }
      onSaved && onSaved();
      onHide();
    } catch (err) {
      console.error('Erro ao salvar agendamento', err);
      alert('Erro ao salvar agendamento');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{agendamento ? '✏️ Editar Agendamento' : '➕ Novo Agendamento'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Sala</Form.Label>
            <Col sm={9}>
              <Form.Select name="sala" value={form.sala} onChange={handleChange}>
                <option value="">Selecione...</option>
                {salas.map(s => (
                  <option key={s.id} value={s.id}>{s.descricao} ({s.andar})</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Data</Form.Label>
            <Col sm={9}>
              <Form.Control type="date" name="data" value={form.data} onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Turno</Form.Label>
            <Col sm={9}>
              <Form.Select name="turno" value={form.turno} onChange={handleChange}>
                <option value="MANHA">Manhã</option>
                <option value="TARDE">Tarde</option>
                <option value="NOITE">Noite</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Horário</Form.Label>
            <Col sm={9}>
              <Form.Select name="horario" value={form.horario} onChange={handleChange}>
                {['A','B','C','D','E','F'].map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Descrição</Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                rows={3}
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder="Ex: Aula teórica de anatomia humana - Turma 55A123B"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {agendamento ? 'Salvar Alterações' : 'Criar Agendamento'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
