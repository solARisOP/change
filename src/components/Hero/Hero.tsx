import './Hero.css'
import State from '../State/State'
import Timer from '../Timer/Timer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Hero({requestId}) {

    const [state, setState] = useState("Initiating request")

    useEffect(() => {
        const timerId = setInterval(async () => {
            try {
                const { data } = await axios.get(`https://autoai-backend-exjsxe2nda-uc.a.run.app/aiMarketPlace/tryout/getProcessRequests?requestIds=['${requestId}']`)

                const responseState = data.data[0].processingStatusMetaData.processingStatus;
                if(responseState.split(' ')[-1] == 'Failed' || responseState == 'Uploaded' ) {
                    clearInterval(timerId)
                } 

                console.log(responseState);
                setState(responseState)
            } catch (error) {
                console.log(error);
            }
        }, 5000);
        return () => clearInterval(timerId)
    }, [])

    return (
        <div className='layout'>
            <State stateValue={state} />
            <div className='ruler' />
            <Timer stateValue={state} />
        </div>
    )
}

export default Hero