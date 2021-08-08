import styles from '../styles/header.module.scss'

interface HeaderProps {
  mainText: string

}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.header}>
      {props.mainText}
    </div>
  );
}

export default Header;