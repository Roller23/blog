import styles from '../styles/banner.module.scss'

interface BannerLink {
  text: string
  link: string
}

interface BannerProps {
  links: BannerLink[]
}

const Banner = (props: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.logo}>
        kania<span>.codes</span>
        <div className={styles.bottom}>a programming blog</div>
      </div>
      <div className={styles.buttons}>
        {props.links.map(link => <div className={styles.button}>{link.text}</div>)}
      </div>
    </div>
  );
}

export default Banner;