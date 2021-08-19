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
        {'>'} kania<span className={styles.codes}>.codes</span><span className={styles.dash}>_</span>
        <div className={styles.bottom}>a programming blog</div>
      </div>
      <div className={styles.buttons}>
        {props.links.map(link => {
          return <a className={styles.button} href={link.link} key={link.text}>{link.text}</a>
        })}
      </div>
    </div>
  );
}

export default Banner;