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
      method: "PUT",
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
    fetch(`${url}/${x}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    }).then(() => console.log("the survey has been deleted"));
    //.then(console.log);
  };

  return { create, update, get, getById, del };
};

export default crudder;
