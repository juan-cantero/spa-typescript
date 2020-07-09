import Home from './Home';
import About from './About';
import Mounter from '../lib/Mounter';

const router = async (route: string) => {
  const root = document.querySelector('#root')!;
  root.innerHTML = ' ';
  switch (route) {
    case '#/': {
      return Mounter.render(new Home('home'), root);
    }
    case '#/about': {
      return Mounter.render(new About('about'), root);
    }
    default: {
      return 'nothing';
    }
  }
};

export default router;
