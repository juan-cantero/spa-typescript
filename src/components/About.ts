import Component from '../lib/Component';

class About extends Component {
  mount(): HTMLElement {
    return this.root;
  }
  render() {
    this.root.insertAdjacentHTML(
      'afterbegin',
      `
      <h1>About</h1>
      
              `
    );
  }
}

export default About;
