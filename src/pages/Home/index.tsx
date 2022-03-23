import { UmiComponentProps } from '@/common/type'
import styles from './index.less'

interface Props extends UmiComponentProps {}

const IndexPage = (props: Props) => {
  console.log('Props:::', props)
  return (
    <div>
      <h1 className={styles.title}>Page Home</h1>
    </div>
  )
}
export default IndexPage
