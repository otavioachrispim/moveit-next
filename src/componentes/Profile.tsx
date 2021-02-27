import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/69418670?s=460&u=044e7f06038a8b890e379ac3af2b20c4856bba09&v=4"
        alt="Otavio Augusto Chrispim"
      />
      <div>
        <strong>Otavio Augusto Chrispim</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
