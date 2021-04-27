import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'

const PublicData=()=>{

    const [down1,setdown1]=useState("nope")
    const [down2,setdown2]=useState("nope")

    const DownloadFirst = async ()=>{
        try {
            const {
            data: { msg },
            } = await axios.get('/api/download1')
            setdown1(msg)
        } catch (error) {
            console.log(error.message)
        }
    }

    const DownloadSecond = async ()=>{
        try {
            const {
            data: { msg },
            } = await axios.get('/api/download2')
            setdown2(msg)
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div align="center">
            <div>
                down1:{down1}
                <br/>
                down2:{down2}
            </div>
            Public Data
            <br/>
            <Link to='./'>Back</Link>
            <br/>
            <table>
                <tr>
                    <td>
                        First public data
                    </td>
                    <td>
                        <button onClick={DownloadFirst}>Download</button>
                    </td>
                </tr>
                <tr>
                <td>
                        Second public data
                    </td>
                    <td>
                        <button onClick={DownloadSecond}>Download</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PublicData