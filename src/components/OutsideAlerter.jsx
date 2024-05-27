import {useRef} from 'react'
import {useOutside}        from './useOutside'

export default function OutsideAlerter ({onClose, ...props}) {
  const wrapperRef = useRef(null)
  useOutside(wrapperRef, onClose)

  return <div ref={wrapperRef}>{props.children}</div>
}