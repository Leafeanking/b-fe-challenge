const BASE_URL = "https://api.disneyapi.dev";

export default {
  characterList: () => `${BASE_URL}/character/`,
  characterDetail: (id: string) => `${BASE_URL}/character/${id}`,
};
