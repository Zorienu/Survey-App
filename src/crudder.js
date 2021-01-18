const crudder = (resource) => {
  const domain = "http://localhost:3000";
  const url = `${domain}/${resource}`;

  const create = (x, token = null) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(x),
    }).then((res) => res.json());
  };

  const update = (x, token = null) => {
    return fetch(url, {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(x),
    }).then((res) => res.json());
  };

  const get = () => fetch(url).then((res) => res.json());

  const getById = (id) => fetch(`${url}/${id}`).then((res) => res.json());

  const del = (x, token = null) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return { create, update, get, getById, del };
};

export default crudder;
