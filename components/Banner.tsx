import styles from '../styles/banner.module.scss'

interface BannerProps {
  backgroundSrc: string
}

const Banner = (props: BannerProps) => {
  return (
    <div className={styles.banner} style={{backgroundImage: `url(${props.backgroundSrc})`}}>
      <div className={styles.logo}>
        kania<span>.codes</span>
        <div className={styles.bottom}>a programming blog</div>
      </div>
    </div>
  );
}

export default Banner;