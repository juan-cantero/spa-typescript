abstract class Component {
  private root: HTMLElement;
  private elementId: string;
  constructor(elementId: string) {
    this.elementId = elementId;
    this.root = document.createElement('div');
    this.mount();
  }

  mount() {
    this.root.innerHTML = this.render();
    this.root.id = this.elementId;
  }

  unmount() {
    this.root.remove();
  }

  attachChild(childElement: string) {
    this.root.insertAdjacentHTML('afterbegin', childElement);
  }

  component() {
    return this.root;
  }

  abstract render(): string;
}

export default Component;
