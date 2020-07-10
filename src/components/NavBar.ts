import Component from '../lib/Component';

class NavBar extends Component {
  mount(): HTMLElement {
    return this.root;
  }
  render() {
    this.root.insertAdjacentHTML(
      'afterbegin',
      `
  <nav class="navbar ">
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/posts">Posts</a>
    
  </nav>`
    );
  }
}

export default NavBar;
