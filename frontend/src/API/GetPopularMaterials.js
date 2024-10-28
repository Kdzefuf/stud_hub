import APIClient from "./APIClient";
import PopularMaterialsStubs from "./stubs/PopularMaterialsStubs";

/**
 * Класс содержащий API для получение данных о списке самых популярных вопросов
 * @class
 */
class GetPopularMaterials {
  /**
   * Функция возвращающая список самых популярных вопросов
   * @function
   * @async
   * @static
   * @author RedStrike_rf(https://github.com/RedStrikeRF)
   * @author Kdzefuf(https://github.com/Kdzefuf)
   * @borrows axios for HTTPrequests
   * @example getPopularMaterials() - получение данных о списке самых популярных вопросов
   * @returns {object} возвращает список самых популярных вопросов
   */
  static async getPopularMaterials() {
    try {
      const response = await APIClient.get('/popularMaterials');
      return response.data;
    }
    catch(e) {
      console.log(e);
      // return PopularMaterialsStubs;
    }
  }
}

export default GetPopularMaterials;