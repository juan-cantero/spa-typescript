import Home from '../components/Home';
import About from '../components/About';
import Mounter from '../lib/Mounter';
import Posts from '../components/Posts';

const router = (route: string) => {
  const root = document.querySelector('#root')!;
  root.innerHTML = ' ';
  switch (route) {
    case '#/': {
      return Mounter.render(new Home('home'), root);
    }
    case '#/about': {
      return Mounter.render(new About('about'), root);
    }
    case '#/posts': {
      return Mounter.render(new Posts('post'), root);
    }

    default: {
      return 'nothing';
    }
  }
};

export default router;
