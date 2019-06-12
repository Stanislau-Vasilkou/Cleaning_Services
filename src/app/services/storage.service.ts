import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage = window.localStorage;

  constructor() { }

  setKey(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getValue(key: string) {
    return this.storage.getItem(key);
  }

  removeKey(key: string) {
    this.storage.removeItem(key);
  }

  hasValue(key: string) {
    return !!this.storage.getItem(key);
  }
}
