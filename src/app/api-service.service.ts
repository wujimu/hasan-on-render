import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cache = new Map<string, any>();

  constructor() {}

  async getData(apiEndpoint: string, options?: AxiosRequestConfig): Promise<any> {
    const cachedData = this.getCachedData(apiEndpoint);
    if (cachedData !== undefined) {
      return cachedData;
    }

    try {
      const response = await axios.get(apiEndpoint, options);
      const data = response.data;
      this.cacheData(apiEndpoint, data);
      this.storeData(apiEndpoint, data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  clearCache(apiEndpoint?: string): void {
    if (apiEndpoint) {
      this.cache.delete(apiEndpoint);
      localStorage.removeItem(apiEndpoint);
    } else {
      this.cache.clear();
      localStorage.clear();
    }
  }

  private getCachedData(apiEndpoint: string): any {
    const cachedData = this.cache.get(apiEndpoint);
    if (cachedData !== undefined) {
      return cachedData;
    }

    const storedData = localStorage.getItem(apiEndpoint);
    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      this.cacheData(apiEndpoint, parsedData);
      return parsedData;
    }

    return undefined;
  }

  private cacheData(apiEndpoint: string, data: any): void {
    this.cache.set(apiEndpoint, data);
  }

  private storeData(apiEndpoint: string, data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(apiEndpoint, jsonData);
  }
}
