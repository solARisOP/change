import './StateElement.css'
import { stateValues } from '../constant'
import Done from "../comps/Done";
import Pending from "../comps/Pending";

function StateElement({value, time, currIdx, eleIdx}) {
    
    return (
        <>
            {eleIdx ? <div className={`state__stick state__stick--${eleIdx <= currIdx}`} /> : null}
            <div className='state__element__body'>
                {eleIdx < currIdx ? <Done /> : null}
                {eleIdx == currIdx ? stateValues[value][2] : null}
                {eleIdx > currIdx ? <Pending /> : null}

                <div>
                    <div className={`state__element__value state__element__value--${eleIdx <= currIdx}`}>
                    {eleIdx == currIdx ? stateValues[value][0] : value}
                    </div>
                    {eleIdx <= currIdx ?  <div className='state__element__time'>
                        {time}
                    </div> : null}
                </div>
            </div>
        </>
    )
}

export default StateElement