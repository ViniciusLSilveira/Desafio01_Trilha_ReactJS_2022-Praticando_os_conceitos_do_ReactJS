import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src='src\assets\Todo-logo.svg' alt='Rocket' />
      <div className={styles.title}>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
