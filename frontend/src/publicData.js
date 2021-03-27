import {Link} from 'react-router-dom'

const PublicData=()=>{

    return(
        <div align="center">
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
                        <button>Download</button>
                    </td>
                </tr>
                <tr>
                <td>
                        Second public data
                    </td>
                    <td>
                        <button>Download</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PublicData