import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid';
import { getAgendamentos, getSalas } from '../services/api';
import AgendamentoModal from './AgendamentoModal';
import AgendamentoFormModal from './AgendamentoFormModal';
import { Tooltip } from 'bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CalendarView() {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [salas, setSalas] = useState([]);

  const load = async () => {
    try {
      const data = await getAgendamentos();
      const ev = data.map(a => ({
        id: a.id,
        title: a.sala?.descricao ? a.sala.descricao : 'Sala',
        start: a.data,
        backgroundColor: '#0d6efd',
        borderColor: '#0d6efd',
        textColor: 'white',
        extendedProps: {
          ...a,
          tooltip: `${a.turno} | ${a.horario} | ${a.descricao}`
        }
      }));
      setEvents(ev);
    } catch (err) {
      console.error('Erro ao carregar agendamentos', err);
      setEvents([]);
    }
  };

  const loadSalas = async () => {
    try {
      const data = await getSalas();
      setSalas(data);
    } catch (err) {
      console.error('Erro ao carregar salas', err);
    }
  };

  useEffect(() => { load(); loadSalas(); }, []);

  const handleEventDidMount = (info) => {
    new Tooltip(info.el, {
      title: info.event.extendedProps.tooltip,
      placement: 'top',
      trigger: 'hover',
      container: 'body'
    });
  };

  const handleEventClick = (info) => {
    setSelected(info.event.extendedProps);
    setShowModal(true);
  };

  const handleDeleted = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const handleEdit = (agendamento) => {
    setSelected(agendamento);
    setShowModal(false);
    setShowForm(true);
  };

  const handleSaved = () => {
    setShowForm(false);
    load(); // recarrega o calendário
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <Button onClick={() => { setSelected(null); setShowForm(true); }}>
          ➕ Novo Agendamento
        </Button>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        eventDidMount={handleEventDidMount}
        height="auto"
      />

      <AgendamentoModal
        show={showModal}
        onHide={() => setShowModal(false)}
        agendamento={selected}
        onDeleted={handleDeleted}
        onEdit={handleEdit}
      />

      <AgendamentoFormModal
        show={showForm}
        onHide={() => setShowForm(false)}
        agendamento={selected}
        salas={salas}
        onSaved={handleSaved}
      />
    </div>
  );
}
