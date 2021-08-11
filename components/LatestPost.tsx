import styles from '../styles/latest-post.module.scss'
import { PostProps } from '../interfaces/post';


const LatestPost = (props: PostProps) => {
  return (
    <a className={styles.post} href={props.link}>
      <div className={styles.background} style={{backgroundImage: `url(${props.background})`}}></div>
      <div className={styles.info}>
        <div className={styles.latestText}>Latest post</div>
        <div className={styles.bottom}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.desc}>{props.desc}</div>
        </div>
      </div>
    </a>
  );
}

export default LatestPost;