import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useId, useState } from 'react';
import { useTodoList } from '../hooks/useTodoList';

import styles from './NewTask.module.css';

export function NewTask() {
  const { createTask } = useTodoList();

  const [newTaskContent, setNewTaskContent] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!newTaskContent) {
      return;
    }

    createTask(newTaskContent);
    setNewTaskContent('');
  }

  function handleChangeTaskContent(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity(``);
    setNewTaskContent(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity(`Esse campo é obrigatório`);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.createTaskForm}>
      <input
        type='text'
        value={newTaskContent}
        onChange={handleChangeTaskContent}
        onInvalid={handleNewCommentInvalid}
        title='Preencha esse campo'
        required
      />
      <button type='submit' className={styles.submitButton}>
        <span>Criar</span>
        <PlusCircle weight='bold' />
      </button>
    </form>
  );
}
