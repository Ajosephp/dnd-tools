// api/open5eApi.ts

export async function fetchDataFromOpen5e(file: string) {
    const endpoint = `https://api.open5e.com/v1/${file}/`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file} from ${endpoint}`);
    }
    return response.json();
}
