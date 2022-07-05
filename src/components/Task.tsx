import { Check, Trash } from 'phosphor-react';
import { useTodoList } from '../hooks/useTodoList';
import { ITask } from '../types';
import styles from './Task.module.css';

export function Task({ id, completed, content }: ITask) {
  const { removeTask, toggleTaskCompletion } = useTodoList();

  function handleRemoveTask() {
    removeTask(id);
  }

  function handleToggleTaskCompletion() {
    toggleTaskCompletion(id);
  }

  return (
    <div className={styles.container}>
      {completed ? (
        <div className={styles.completed}>
          <button onClick={handleToggleTaskCompletion}>
            <Check />
          </button>
          <p>{content}</p>
        </div>
      ) : (
        <div className={styles.uncompleted}>
          <button onClick={handleToggleTaskCompletion} />
          <p>{content}</p>
        </div>
      )}
      <button className={styles.trash} onClick={handleRemoveTask}>
        <Trash />
      </button>
    </div>
  );
}
