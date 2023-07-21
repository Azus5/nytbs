import { FaAngleDown } from 'react-icons/fa'

type Props = {
  hideOnSmallerDevices?: boolean
}

function ScrollDownArrow({ hideOnSmallerDevices = false }: Props) {
  function className() {
    const defaultClasses = ['absolute', 'bottom-3', 'left-1/2']
    let dynamicClasses = []

    if (hideOnSmallerDevices) dynamicClasses.push('hidden xl:block')

    return [...defaultClasses, ...dynamicClasses].join(' ')
  }

  return (
    <div className={className()}>
      <div className='relative w-12 h-12 group select-none animate-bounce'>
        <FaAngleDown size={50} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  )
}

export default ScrollDownArrow