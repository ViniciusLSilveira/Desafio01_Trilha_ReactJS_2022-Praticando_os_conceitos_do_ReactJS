import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TodoList } from './components/TodoList';

import styles from './App.module.css';
import { TodoListProvider } from './hooks/useTodoList';

export function App() {
  return (
    <TodoListProvider>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <NewTask />

          <main>
            <TodoList />
          </main>
        </div>
      </div>
    </TodoListProvider>
  );
}
