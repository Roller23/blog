import styles from '../styles/footer.module.scss'

interface FooterProps {
  copyright: string

}

const Footer = (props: FooterProps) => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        {`${props.copyright} ${currentYear}`}
      </div>
    </div>
  );
}

export default Footer;