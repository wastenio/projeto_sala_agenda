import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { createSala, getStatusSalas } from '../services/api';

export default function SalaFormModal({ show, onHide, onSaved }) {
  const [form, setForm] = useState({ descricao: '', andar: '', capacidade: '', status: '' });
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    if (show) carregarStatus();
  }, [show]);

  const carregarStatus = async () => {
    try {
      const response = await getStatusSalas();
      console.log('Status retornado pelo backend:', response);

      // 🔽 Normalização do formato de enum
      if (Array.isArray(response)) {
        setStatusList(response);
      } else if (typeof response === 'object' && response !== null) {
        // Caso venha como objeto (ex: { "ATIVO": "ATIVO", "INATIVO": "INATIVO" })
        setStatusList(Object.keys(response));
      } else {
        console.warn('Formato inesperado de status recebido:', response);
        setStatusList([]);
      }
    } catch (err) {
      console.error('Erro ao carregar status:', err);
      setStatusList([]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.descricao || !form.andar || !form.capacidade || !form.status) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    try {
      await createSala({
        descricao: form.descricao,
        andar: form.andar,
        capacidade: parseInt(form.capacidade, 10),
        status: form.status
      });
      onSaved && onSaved();
      onHide();
    } catch (err) {
      console.error('Erro ao criar sala', err);
      alert('Erro ao criar sala');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>🏫 Nova Sala</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Descrição</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder="Ex: Laboratório de Anatomia"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Andar</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="andar"
                value={form.andar}
                onChange={handleChange}
                placeholder="Ex: 2º Andar"
              />
            </Col>
          </Form.Group>

          {/* 🔽 Campo STATUS (Dropdown com enum tratado) */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>Status</Form.Label>
            <Col sm={9}>
              <Form.Select
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                {statusList.map((status) => {
                  const label = status
                    .toLowerCase()            // transforma tudo em minúsculas
                    .replace(/_/g, ' ')       // substitui "_" por espaço
                    .replace(/\b\w/g, c => c.toUpperCase()); // deixa a primeira letra de cada palavra maiúscula
                  return (
                    <option key={status} value={status}>
                      {label}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Capacidade</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="number"
                name="capacidade"
                value={form.capacidade}
                onChange={handleChange}
                placeholder="Ex: 30"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}
