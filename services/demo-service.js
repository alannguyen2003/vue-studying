import axios from "axios";
import API from "../constant/api-constant";

export default class DemoService {
  static getListOfApi() {
    return axios.get(process.env.VUE_APP_API + process.env.VUE_APP_API_VERSION + 
      API.GET_ALL_EMPLOYEE
    );
  }
}