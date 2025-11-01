// utils/api.ts
const BASE_URL = "https://690460436b8dabde49636fe2.mockapi.io"; // ganti dengan base URL dari mockapi kamu

export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: number;
  images: string;
  derajat: string;
  description: string;
}

// GET semua destinasi
export async function getDestinations(): Promise<Destination[]> {
  const res = await fetch(`${BASE_URL}/destinations`);
  return res.json();
}

// GET detail destinasi berdasarkan id
export async function getDestinationById(id: string): Promise<Destination> {
  const res = await fetch(`${BASE_URL}/destinations/${id}`);
  return res.json();
}

// POST
export async function addDestination(data: Omit<Destination, "id">): Promise<Destination> {
  const res = await fetch(`${BASE_URL}/destinations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE
export async function deleteDestination(id: string): Promise<void> {
  await fetch(`${BASE_URL}/destinations/${id}`, { method: "DELETE" });
}
