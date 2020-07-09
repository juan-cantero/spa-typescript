import Component from './Component';

class NavBar extends Component {
  render() {
    return `
  <nav class="navbar ">
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    
  </nav>`;
  }
}

export default NavBar;
