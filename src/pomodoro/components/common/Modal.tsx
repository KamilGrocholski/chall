import { useRef } from 'react'
import Portal from './Portal'
import useOnClickOutside from '../../hooks/useOnClickOutside'

type ModalProps = {
    isOpen: boolean
    close(): void
    children: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(containerRef, close)

    if (!isOpen) return null

    return (
        <Portal>
            <div className='fixed inset-0 z-10 overflow-y-auto'>
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <div className='fixed inset-0 bg-gray-900/75 transition-opacity'></div>
                    <span
                        className='hidden sm:inline-block sm:h-screen sm:align-middle'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <div
                        ref={containerRef}
                        className='relative inline-block text-left align-bottom sm:align-middle'
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal
