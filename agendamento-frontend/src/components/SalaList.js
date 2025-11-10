import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { getSalas, updateSala, deleteSala, getStatusSalas } from '../services/api';

export default function SalaList() {
  const [salas, setSalas] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ descricao: '', andar: '', capacidade: '', status: 'DISPONIVEL' });
  const [showConfirm, setShowConfirm] = useState(false);
  const [salaToDelete, setSalaToDelete] = useState(null);

  // 👉 Função de formatação reutilizável
  const formatStatusLabel = (status) => {
    if (!status) return '';
    return status
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const loadSalas = async () => {
    try {
      const data = await getSalas();
      setSalas(data);
    } catch (err) {
      console.error('Erro ao carregar salas', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSalas();
    getStatusSalas()
      .then((data) => {
        setStatusOptions(data);
      })
      .catch((err) => console.error("Erro ao carregar status", err));
  }, []);

  const handleEdit = (sala) => {
    setEditing(sala);
    setForm({
      descricao: sala.descricao || '',
      andar: sala.andar || '',
      capacidade: sala.capacidade || '',
      status: sala.status || 'DISPONIVEL',
    });
  };

  const handleSave = async () => {
    try {
      await updateSala(editing.id, {
        descricao: form.descricao,
        andar: form.andar,
        capacidade: parseInt(form.capacidade, 10),
        status: form.status,
      });
      setEditing(null);
      await loadSalas();
    } catch (err) {
      console.error('Erro ao atualizar sala', err);
      alert('Erro ao atualizar sala.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSala(salaToDelete.id);
      setShowConfirm(false);
      setSalaToDelete(null);
      await loadSalas();
    } catch (err) {
      console.error('Erro ao deletar sala', err);
      alert('Erro ao deletar sala.');
    }
  };

  if (loading) return <p>Carregando salas...</p>;

  return (
    <div>
      <h4 className="mb-3">🏫 Salas Cadastradas</h4>

      {salas.length === 0 ? (
        <p>Nenhuma sala cadastrada.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Andar</th>
              <th>Capacidade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {salas.map((sala) => (
              <tr key={sala.id}>
                <td>{sala.descricao}</td>
                <td>{sala.andar}</td>
                <td>{sala.capacidade}</td>
                <td>{formatStatusLabel(sala.status) || 'Disponível'}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(sala)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setSalaToDelete(sala);
                      setShowConfirm(true);
                    }}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal de edição */}
      <Modal show={!!editing} onHide={() => setEditing(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Sala</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Andar</Form.Label>
              <Form.Control
                type="text"
                value={form.andar}
                onChange={(e) => setForm({ ...form, andar: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Capacidade</Form.Label>
              <Form.Control
                type="number"
                value={form.capacidade}
                onChange={(e) => setForm({ ...form, capacidade: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={form.status || ''}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="">Selecione o status...</option>
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {formatStatusLabel(s)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditing(null)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmação de exclusão */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a sala "{salaToDelete?.descricao}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
