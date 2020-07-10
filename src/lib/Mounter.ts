import Component from './Component';

class Mounter {
  static async render(child: Component, parent: Element) {
    child.init();
    parent.appendChild(child.mount());
  }
}

export default Mounter;
