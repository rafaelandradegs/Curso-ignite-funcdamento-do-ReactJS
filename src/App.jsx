import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';

import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/rafaelandradegs.png',
      name: 'Rafael Andrade',
      role: 'Estagiario',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-09-19 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fenandes',
      role: 'CTO @ Rockeatseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-09-19 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => (
            <Post
              key={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
