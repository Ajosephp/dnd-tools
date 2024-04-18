// lib/open5eApi.server.ts

export async function fetchDataFromOpen5e(file: string) {
    const endpoint = `https://api.open5e.com/v1/${file}/`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file} from ${endpoint}`);
    }
    console.log(response);
    return response.json();
}
