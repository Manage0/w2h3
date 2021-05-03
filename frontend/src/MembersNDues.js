import axios from "axios"
import { useState } from "react"
import LoggedInHeader from "./LoggedInHeader"
import {tokenForAxios} from "./mainPage"

const MembersNDues = () =>{
const [payed, setPayed] = useState(false)

const SwitchPayed=() => {
    axios.defaults.headers.authorization=tokenForAxios
    console.log("pay")
    const getData = async () => {
      try {
          console.log("SwitchPayed is in try")
            const {
                data: { msg },
            } = 
            await axios.put('/api/pay',{payed:payed})
            console.log("put gone")
            setPayed(msg)
            console.log("returned value is: "+msg)
        } catch (error) {
            console.log("put not working")
            console.log(error.message)
        }
    }
    getData()
  }

    return(
        <div>
            <LoggedInHeader/>
            <br/>
            Dues:
            <br/>
            Payed? {payed? "yup":"nop"}
            <button onClick={SwitchPayed}>Pay</button>

        </div>
    )
}

export default MembersNDues