import { Check, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface ITaskProps {
  completed: boolean;
  content: string;
}

export function Task({ completed, content }: ITaskProps) {
  return (
    <div className={styles.container}>
      {completed ? (
        <div className={styles.completed}>
          <button>
            <Check />
          </button>
          <p>{content}</p>
        </div>
      ) : (
        <div className={styles.uncompleted}>
          <button />
          <p>{content}</p>
        </div>
      )}
      <button className={styles.trash}>
        <Trash />
      </button>
    </div>
  );
}
