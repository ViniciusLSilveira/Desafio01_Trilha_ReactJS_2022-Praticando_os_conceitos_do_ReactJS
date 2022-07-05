import { createContext, ReactNode, useContext, useState } from 'react';
import { ITask } from '../types';

interface TodoListProviderProps {
  children: ReactNode;
}

interface TodoListContextData {
  todoList: ITask[];
  createTask: (content: string, completed?: boolean) => void;
  removeTask: (taskId: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
}

const TodoListContext = createContext<TodoListContextData>(
  {} as TodoListContextData
);

export function TodoListProvider({
  children,
}: TodoListProviderProps): JSX.Element {
  const [todoList, setTodoList] = useState<ITask[]>([]);

  function createTask(content: string, completed = false) {
    const newTask = {
      id: crypto.randomUUID(),
      completed,
      content,
    };

    setTodoList((list) => [...list, newTask]);
  }

  function removeTask(taskId: string) {
    const todoListClone = [...todoList];
    const todoListWithoutDeletedTask = todoListClone.filter(
      (task) => task.id !== taskId
    );

    setTodoList(todoListWithoutDeletedTask);
  }

  function toggleTaskCompletion(taskId: string) {
    const todoListClone = [...todoList];
    const updatedTask = todoListClone.find((task) => task.id === taskId);

    if (!updatedTask) {
      return;
    }

    updatedTask.completed = !updatedTask.completed;

    const todoListWithUpdatedTask = todoListClone.map((task) => {
      if (task.id === taskId) {
        return updatedTask;
      }

      return task;
    });

    setTodoList(todoListWithUpdatedTask);
  }

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        createTask,
        removeTask,
        toggleTaskCompletion,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

export function useTodoList(): TodoListContextData {
  const context = useContext(TodoListContext);

  return context;
}
