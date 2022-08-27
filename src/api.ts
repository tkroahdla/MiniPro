const BASE_URL = 'https://pokeapi.co/api/v2';

export function fetchPoketmons() {
  return fetch(`${BASE_URL}/pokemon/?offset=0&limit=300`).then((response) =>
    response.json()
  );
}

export function fetchPokeTypes(number: string) {
  return fetch(`${BASE_URL}/pokemon/${number}`).then((response) =>
    response.json()
  );
}
