import axios from "axios"
import { useState } from "react"
import { Redirect } from "react-router"
import LoggedInHeader from "./LoggedInHeader"
import {tokenForAxios, outerUsername} from "./mainPage"

const MembersNDues = () =>{

    const [payed, setPayed] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const LoadPayed = async ()=>{
        console.log(outerUsername)
        var usr =outerUsername
        console.log("usr: "+usr)
        try {
            const {
              data: { msg },
            } = await axios.post('/api/membersndues',{
              user: usr
            })
            setPayed(msg)
            console.log(msg)
          } catch (error) {
            console.log(error.message)
          }
        }


const SwitchPayed=() => {
    axios.defaults.headers.authorization=tokenForAxios
    console.log("pay")
    const getData = async () => {
      try {
          console.log("SwitchPayed is in try")
            const {
                data: { msg },
            } = 
            await axios.put('/api/pay',{user:outerUsername})
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

  const DeleteMe=() => {
    axios.defaults.headers.authorization=tokenForAxios
    console.log("deleteMe")
    const getData = async () => {
      try {
          console.log("deleteme is in try"+outerUsername)
            const {
                data: { msg },
            } = 
            await axios.delete('/api/deleteme',{ data: {user:outerUsername} })
            console.log("delete gone")
            setDeleted(msg)
            console.log("returned value is: "+msg)
            window.location = "http://localhost:3000/";
        } catch (error) {
            console.log("delete not working")
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
            Payed? {payed? "payed":"nop"}
            <button onClick={SwitchPayed}>Pay</button>
            <br/>
            username: {outerUsername}
            <button onClick={LoadPayed}>LoadPayed</button>
            <button onClick={DeleteMe}>Delete me</button>

        </div>
    )
}

export default MembersNDues