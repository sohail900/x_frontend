import { AiOutlineRetweet } from 'react-icons/ai'
import { Tooltip } from 'react-tooltip'
export const UpdateButton = () => {
    return (
        <>
            <button
                className='recButton likes'
                data-tooltip-id='retweet-button-tooltip'
                data-tooltip-content='Retweet'
            >
                {/* <MdUpdate className='icon likesIcon' /> */}
                <div className='icon-container update-icon'>
                    <AiOutlineRetweet className='icon ' />
                </div>
            </button>
            <Tooltip
                id='retweet-button-tooltip'
                arrowColor='transparent'
                className='tooltip-style '
            />
        </>
    )
}
