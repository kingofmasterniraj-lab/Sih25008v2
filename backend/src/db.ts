// Fake DB (replace with real DB later)
interface User {
  id: number;
  username: string;
  password: string; // hashed
}

interface Drill {
  id: number;
  title: string;
  description: string;
  region: string;
}

export const db = {
  users: [] as User[],
  drills: [] as Drill[],
};
