import React from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = React.useState(['postMuito bacana, hein?!!']);
  const [newCommentText, setNewCommentText] = React.useState(['']);

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity('');

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      handleCreateNewComment();
    }
  }

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      comment => comment !== commentToDelete,
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === 'paragraph') {
            return <p key={content}>{content}</p>;
          } else {
            return (
              <p key={content}>
                👉 <a href="">{content}</a>
              </p>
            );
          }
        })}

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deuxe um comentário"
          onChange={handleNewCommentChange}
          onKeyDown={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
