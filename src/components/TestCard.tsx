import styles from "@/components/TestCard.module.scss"

type Props = {
  imgSrc: string
  titleText: string
}

const TestCard = (props: Props) => {
  return (
    <div className={styles.testCardContainer}>
      <div className={styles.testCardItem}>
        <img
          src={props.imgSrc}
          alt="カード画像"
        />
        <span>{props.titleText}</span>
      </div>
    </div>
  )
}

export default TestCard
