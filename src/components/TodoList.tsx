import { useState } from 'react';
import { useTodoList } from '../hooks/useTodoList';
import { Task } from './Task';

import styles from './TodoList.module.css';

export function TodoList() {
  const { todoList } = useTodoList();

  const todoListCount = todoList.length;
  const completedTaskCount = todoList.filter((task) => task.completed).length;

  return (
    <article className={styles.todoList}>
      <header className={styles.info}>
        <div>
          Tarefas criadas <span>{todoListCount}</span>
        </div>
        <div>
          Concluídas{' '}
          <span>
            {todoListCount > 0 ? `${completedTaskCount} de ` : ''}
            {todoListCount}
          </span>
        </div>
      </header>

      {todoList.length === 0 ? (
        <div className={styles.emptyContent}>
          <img src='src/assets/clipboard.svg' alt='Clipboard' />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.content}>
          {todoList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              completed={task.completed}
              content={task.content}
            />
          ))}
        </div>
      )}
    </article>
  );
}
