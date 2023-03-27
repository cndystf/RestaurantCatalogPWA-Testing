import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id === id
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite resto array contract test', () => {
  afterEach(() => (favoriteRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
