import { useState } from 'react';
import { Task, ITaskProps } from './Task';

import styles from './TodoList.module.css';

interface ITask extends ITaskProps {
  id: number;
}

export function TodoList() {
  const [taskList, setTaskList] = useState<ITask[]>([
    {
      id: 1,
      completed: false,
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
    {
      id: 2,
      completed: true,
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    },
    {
      id: 3,
      completed: false,
      content:
        'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    },
  ]);

  return (
    <article className={styles.todoList}>
      <header className={styles.info}>
        <div>
          Tarefas criadas <span>90</span>
        </div>
        <div>
          Concluídas <span>15 de 90</span>
        </div>
      </header>

      {taskList.length === 0 ? (
        <div className={styles.emptyContent}>
          <img src='src/assets/clipboard.svg' alt='Clipboard' />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.content}>
          {taskList.map((task) => (
            <Task
              key={task.id}
              completed={task.completed}
              content={task.content}
            />
          ))}
        </div>
      )}
    </article>
  );
}
