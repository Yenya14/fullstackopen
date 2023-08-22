import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((result) => result.data);
};

const create = (personObj) => {
  const createPromise= axios.post(baseUrl, personObj);
  return createPromise.then((result) => result.data)
};

const update = (id, newObj) => {
  const updatePromise = axios.put(`${baseUrl}/${id}`, newObj)
  return updatePromise.then((result) => result.data)
}

const remove = (id, updatedNote) => {
  const removePromise =axios.delete(`${baseUrl}/${id}`, updatedNote);
  return removePromise.then((result) => result.data)
};

const servicePerson= { create, getAll, remove, update};

export default servicePerson;