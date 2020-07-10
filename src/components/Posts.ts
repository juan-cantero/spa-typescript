import Component from '../lib/Component';

interface State {
  posts: Post[];
}

interface Post {
  title: string;
  body: string;
}

class Posts extends Component {
  private state: State;
  btn: HTMLButtonElement;
  constructor(id: string) {
    super(id);
    this.btn = document.createElement('button');
    this.btn.innerText = 'click';
    this.root.insertAdjacentElement('beforeend', this.btn);
    this.btn.classList.add('btn');

    this.state = {
      posts: [{ title: 'hi', body: 'yay' }],
    };
  }

  mount(): HTMLElement {
    return this.root;
  }

  async init() {
    await this.loadState();
    this.render();
    this.config();
  }

  async loadState() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const newPosts = await response.json();
    console.log(newPosts);
    console.log(this.state.posts);
    this.setState(() => {
      this.state.posts = [...this.state.posts, ...newPosts];
    });
  }

  config() {
    this.btn.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      console.log('post');
      this.addPost({ title: '2', body: 'jasdljflasd' });
    });
  }

  addPost(post: Post) {
    this.state.posts = [...this.state.posts, post];
    this.render();
  }

  render(): void {
    console.log('render');

    if (this.state.posts.length > 0) {
      let posts = this.state.posts;
      let list = ``;
      posts.forEach((post) => {
        list += `
        <h1>${post.title}</h1>
        <li>${post.body}</li>`;
      });
      this.root.innerHTML = '';
      this.root.insertAdjacentHTML('afterbegin', list);
      this.root.insertAdjacentElement('beforeend', this.btn);
    } else {
      this.root.insertAdjacentHTML('afterbegin', '<h1>Loading....</h1>');
    }
  }
}

export default Posts;
