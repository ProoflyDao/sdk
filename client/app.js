const API = "http://localhost:5000/api/proof";

async function createProof() {
  const data = document.getElementById("createData").value;

  const res = await fetch(`${API}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  });

  const result = await res.json();

  document.getElementById("createResult").innerText =
    `ID: ${result.id}`;
}

async function verifyProof() {
  const id = document.getElementById("verifyId").value;
  const data = document.getElementById("verifyData").value;

  const res = await fetch(`${API}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, data })
  });

  const result = await res.json();

  document.getElementById("verifyResult").innerText =
    result.message;
}
