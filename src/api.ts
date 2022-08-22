const BASE_URL = 'https://pokeapi.co/api/v2';

export function fetchPoketmons() {
  return fetch(`${BASE_URL}/pokemon/?offset=0&limit=300`).then((response) =>
    response.json()
  );
}

export function fetchPokeImg(url: string) {
  return fetch(url).then((response) => response.json());
}
