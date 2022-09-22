import React from 'react';
import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(state => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rafaelandradegs.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Andrade</strong>
              <time
                title="19 de setembro as 08:13h"
                dateTime="2022-09-19 08:13:30"
              >
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
