import { Wine } from "../db/index.js";
import { User } from "../db/index.js";

class detailService {
  //와인의 index를 받아 와인 객체 하나를 return 받습니다. 결과값은 배열로 보내지기 때문에 항상 result[0]이 해당 와인이 됩니다.
  static async findByIndex({ index }) {
    const result = await Wine.findByIndex({ index });
    return result;
  }

  //찾은 와인과 비슷한 와인의 url들을 return합니다.
  static async findSimilarUrl({ similarWine }) {
    const result = [];
    for (let i = 0; i < similarWine.length; i++) {
      const wineName = similarWine[i];
      const tmp = await Wine.FindByWineName({ wineName });
      result.push(tmp[0]);
    }
    return result;
  }
  //설명추가
  static async clickWine({ index, user_id }) {
    const hasWine = await User.hasFavoriteWine({ index, user_id });
    if (hasWine) {
      return await User.removeFavoriteWine({
        user_id,
        index,
      });
    }
    return await User.addFavoriteWine({ user_id, index });
  }
}
export { detailService };
