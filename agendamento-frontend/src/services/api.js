import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

// Instância padrão do Axios
const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  // Se o backend tiver autenticação, configure aqui:
  // auth: { username: 'user', password: 'password' }
});

// ---------------------------------------------
// AGENDAMENTOS
// ---------------------------------------------
export const getAgendamentos = () =>
  axiosInstance.get('/agendamentos').then((r) => r.data);

export const getAgendamento = (id) =>
  axiosInstance.get(`/agendamentos/${id}`).then((r) => r.data);

export const createAgendamento = (body) =>
  axiosInstance.post('/agendamentos', body).then((r) => r.data);

export const updateAgendamento = (id, body) =>
  axiosInstance.put(`/agendamentos/${id}`, body).then((r) => r.data);

export const deleteAgendamento = (id) =>
  axiosInstance.delete(`/agendamentos/${id}`).then((r) => r.data);

// ---------------------------------------------
// SALAS
// ---------------------------------------------
export const getSalas = () =>
  axiosInstance.get('/salas').then((r) => r.data);

export const getStatusSalas = () =>
  axiosInstance.get('/salas/status').then(r => r.data);


export const createSala = (body) =>
  axiosInstance.post('/salas', body).then((r) => r.data);

export const updateSala = (id, body) =>
  axiosInstance.put(`/salas/${id}`, body).then((r) => r.data);

export const deleteSala = (id) =>
  axiosInstance.delete(`/salas/${id}`).then((r) => r.data);
