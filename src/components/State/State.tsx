import { useEffect, useState } from 'react'
import './State.css'
import { stateValues, stateTypeList, preStateList } from '.././constant'
import StateElement from '../StateElement/StateElement'

function State({stateValue}) {

    const [stateIndex, setStateIndex] = useState(-1)
    const [stateTime, setStateTime] = useState(()=>{
        const arr = new Array(5);
        for(let i=0; i<5; i++) arr[i] = null;
        return arr;
    })

    useEffect(() => {

        setStateIndex(stateValues[stateValue][1])

        setStateTime(arr=>{
            let idx = stateValues[stateValue][1]

            for(let i=0; i<=idx; i++) {
                if(arr[i]==null)
                {
                    const now = new Date();
                    let hours = now.getHours();
                    const minutes = now.getMinutes();

                    const amPm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12 || 12;

                    const formattedMinutes = minutes.toString().padStart(2, '0');

                    arr[i]= `${hours}:${formattedMinutes} ${amPm}`;
                }
            }
            return arr;
        })

    }, [stateValue])
    
    return (
        <div className="state__body">
            {stateTypeList.map((element, index) => {
                if(index < stateIndex) {
                    return <StateElement value={element} eleIdx={index} currIdx={stateIndex} time={stateTime[index]} />
                }
                else if(index == stateIndex) {
                    return <StateElement value={stateValue} eleIdx={index} currIdx={stateIndex} time={stateTime[index]} />
                }
                else if(index > stateIndex){
                    return <StateElement value={preStateList[index]} eleIdx={index} currIdx={stateIndex} time={null} />
                }
            })}
        </div>
    )
}

export default State