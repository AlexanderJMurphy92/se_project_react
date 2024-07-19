const baseUrl = "http://localhost:3000";

const processResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(`Error: ${res.status} ${text}`);
  });
};

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(processResponse)
    .catch((error) => {
      console.error("Error fetching items:", error);
      throw error;
    });
}

function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(processResponse)
    .catch((error) => {
      console.error("Error adding item:", error);
      throw error;
    });
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then(processResponse)
    .catch((error) => {
      console.error("Error deleting item:", error);
      throw error;
    });
}

export { getItems, addItem, deleteItem };
