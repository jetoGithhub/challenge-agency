export abstract class Storage<T> {
  storage = window.localStorage;
  item = '';

  getItem(): T | null {
    if(this.storage.getItem(this.itemSypher)) {
      return JSON.parse(this.storage.getItem(this.itemSypher) ?? '');
    }

    return null;
  }

  setItem<T>(value:T) {
    if(!value) {
      throw new Error('Set storage Value undefined');
    }

    this.storage.setItem(this.itemSypher, JSON.stringify(value))
  }

  exist(): Boolean {
    return !!this.getItem();
  }

  get itemSypher() {
    return this.item.split('').map((element, index) => {
      return String(index*3) + element;
    }).join('');
  }
}
