import { FiMessageSquare } from 'react-icons/fi'
import { Tooltip } from 'react-tooltip'
export const DeleteButton = () => {
    return (
        <>
            <>
                <button
                    className='recButton likes'
                    data-tooltip-id='delete-button-tooltip'
                    data-tooltip-content='Replay'
                >
                    <div className='icon-container delete-icon'>
                        <FiMessageSquare className='icon' />
                    </div>
                </button>
                <Tooltip
                    id='delete-button-tooltip'
                    arrowColor='transparent'
                    className='tooltip-style '
                />
            </>
        </>
    )
}
