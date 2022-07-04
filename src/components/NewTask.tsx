import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <form className={styles.createTaskForm}>
      <input type='text' />
      <button type='submit' className={styles.submitButton}>
        <span>Criar</span>
        <PlusCircle weight='bold' />
      </button>
    </form>
  );
}
