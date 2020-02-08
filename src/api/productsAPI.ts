import axios, {AxiosResponse} from 'axios';

import {ProductsResponse} from './types';

const SERVER_URL = 'http://localhost:3050';

const ROOT_URL = `${SERVER_URL}/products`;

class ProductsAPI {
  // Получить список всех сущностей
  public request(): Promise<ProductsResponse> {
    const url = ROOT_URL;
    return axios.get<never, AxiosResponse<ProductsResponse>>(url).then(res => res.data);
  }

  // Получить один элемент
  public find(id: string) {
    const url = `${ROOT_URL}/${id}`
    return axios.get(url).then(res => res.data);
  }

  // Создать элемент
  public create() {
    return axios.post
  }

  // Обновить элемент
  public update() {
    return axios.put
  }

  // Удалить элемент
  public remove() {
    return axios.delete
  }
}

const productsAPI = new ProductsAPI();

export default productsAPI;