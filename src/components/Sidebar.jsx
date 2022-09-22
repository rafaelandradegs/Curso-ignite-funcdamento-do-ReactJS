import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/78758096?v=4" />
        <strong>Rafael Andrade</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
