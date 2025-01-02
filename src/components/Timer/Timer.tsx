import { useEffect, useState } from 'react'
import './Timer.css'
import { stateValues } from '../constant'
import alramIcon from '../../assets/alarm.png'
import finishedIcon from '../../assets/check_circle.png'

function Timer({stateValue}) {
  const [currentState, setCurrentState] = useState(0)
  
  useEffect(() => setCurrentState(()=>stateValues[stateValue].length == 4), [stateValue])
  return (
    <div className='timer__body'>
        <img src={currentState ? finishedIcon : alramIcon}/>
        <div>
        {currentState ? "Your results are ready!" : "This process may take time. Please wait or click on the below button to get notified when the process is done." }
        </div>
    </div>

  )
}

export default Timer