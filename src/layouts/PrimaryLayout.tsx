import { UmiComponentProps } from '@/common/type'
import React from 'react'

interface Props extends UmiComponentProps {}

const PrimaryLayout = (props: Props) => {
  const { children } = props
  return <div>PrimaryLayout {children}</div>
}

export default PrimaryLayout
