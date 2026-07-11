import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewpage = () => {

    const [data, ChangeData]=useState([])

    const fetchData =()=>{


        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(

            (Response)=>{

                ChangeData(Response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{


            fetchData()
        },[]
    
    )
  return (
    <div>

    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Registration Number</th>
      <th scope="col">Full Name</th>
      <th scope="col">Adhar Number</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Branch</th>
      <th scope="col">SSLC Mark</th>
      <th scope="col">Plus Two Mark</th>
      <th scope="col">UG Mark</th>
      <th scope="col">Pg Degree</th>
      <th scope="col">Pg Mark</th>
    </tr>
  </thead>
  <tbody>

            {data.map(

                (value,index)=>{


                    return(

                                <tr>
      <th scope="row">{value.regNo}</th>
      <td>{value.fullName}</td>
      <td>{value.aadharNumber}</td>
      <td>{value.email}</td>
      <td>{value.phoneNumber}</td>
      <td>{value.branch}</td>
      <td>{value.sslcMark}</td>
      <td>{value.plusTwoMark}</td>
      <td>{value.ugDegree}</td>
      <td>{value.ugMark}</td>
      <td>{value.pgDegree}</td>
      <td>{value.pgMark}</td>
      <td>@mdo</td>
    </tr>

                    )
                }

            )}

    
    
    
  </tbody>
</table>

    </div>
  )
}

export default Viewpage