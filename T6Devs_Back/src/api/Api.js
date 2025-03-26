import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Funções para Softwares
export const getSoftwares = async () => {
  const response = await axios.get(`${API_URL}/softwares`);
  return response.data;
};

export const createSoftware = async (software) => {
  const response = await axios.post(`${API_URL}/softwares`, software);
  return response.data;
};

export const updateSoftware = async (id, software) => {
  const response = await axios.put(`${API_URL}/softwares/${id}`, software);
  return response.data;
};

export const deleteSoftware = async (id) => {
  const response = await axios.delete(`${API_URL}/softwares/${id}`);
  return response.data;
};

// Funções para Professores
export const getProfessores = async () => {
  const response = await axios.get(`${API_URL}/professores`);
  return response.data;
};

export const createProfessor = async (professor) => {
  const response = await axios.post(`${API_URL}/professores`, professor);
  return response.data;
};

// Funções para Laboratórios
export const getLaboratorios = async () => {
  const response = await axios.get(`${API_URL}/laboratorios`);
  return response.data;
};

export const requestInstallation = async (installationRequest) => {
  const response = await axios.post(`${API_URL}/installations`, installationRequest);
  return response.data;
};