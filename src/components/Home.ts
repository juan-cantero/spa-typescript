import Component from './Component';

class Home extends Component {
  mount(): HTMLElement {
    return this.root;
  }
  render() {
    this.root.insertAdjacentHTML('afterbegin', `<h1>Home</h1>`);
  }
}

export default Home;
