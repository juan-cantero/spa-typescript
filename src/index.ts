import './styles.scss';
import router from './routes/Router';
import Mounter from './lib/Mounter';
import NavBar from './components/NavBar';
import Home from './components/Home';

let nav = document.getElementById('navbar')!;
Mounter.render(new NavBar('nav'), nav);

const loadMainPage = (): void => {
  const root = document.querySelector('#root')!;
  Mounter.render(new Home('home'), root);
};

const init = (): void => {
  router(window.location.hash);

  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
};

window.addEventListener('load', () => {
  init();
  window.location.href = '#/';
});
