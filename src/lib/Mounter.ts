import Component from '../components/Component';

class Mounter {
  static render(child: Component, parent: Element) {
    parent.insertAdjacentElement('afterbegin', child.component());
  }
}

export default Mounter;
