interface Component {
  loadState?(): void;
}

abstract class Component implements Component {
  protected root: HTMLDivElement;
  constructor(id: string) {
    this.root = document.createElement('div');
    this.root.id = id;
  }
  abstract render(): void;

  abstract mount(): HTMLElement;

  async init() {
    this.render();
  }

  setState(cb: () => void) {
    cb();
    this.render();
  }
}

export default Component;
