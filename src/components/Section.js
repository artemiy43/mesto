export class Section {
  constructor( {renderer}, containerSelector) {
    //this._items = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItems(res, flag, id) {
    res.forEach((item) => this._renderer(item, flag, id));
  }

  addItem(element) {
    this._container.append(element);
  }
}
