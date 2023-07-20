import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  show: boolean
}

function ConditionalRenderer({ children, show }: Props) {
  if (show) {
    return children
  }
}

export default ConditionalRenderer