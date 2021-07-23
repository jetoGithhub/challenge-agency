export abstract class LocalStorage<T> {
  storage = window.localStorage;
  item = '';

  getItem(): T[] | null {
    if(this.storage.getItem(this.item)) {
      return JSON.parse(this.storage.getItem(this.item) ?? '');
    }

    return null;
  }

  setItem<T>(value:T) {
    if(!value) {
      throw new Error('Set storage Value undefined');
    }

    this.storage.setItem(this.item, JSON.stringify(value))
  }

  exist(): Boolean {
    return !!this.getItem();
  }
}
