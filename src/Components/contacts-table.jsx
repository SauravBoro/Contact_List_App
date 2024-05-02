import axios from 'axios'
import React, {useState, useEffect} from 'react'
import DataTable from 'react-data-table-component'

const ContactTables = () => {
    const [phonenumbers, setPhonenumbers] = useState([])
    const getNumber = async() => {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        setPhonenumbers(response.data);
      } catch(error) {
        console.log(error);
      }
    };
    const columns = [
      {
        name: "Country Name",
        selector: (row) => row.name
      },
      {
        name:"country Native Name",
        selector: (row) =>row.nativeName
      },
      {
        name: "Country Capital",
        selector: (row) => row.capital
      },
      {
        name: "Country Flag",
        selector: (row) => <img width={50} height={50} src={row.flag}/>
      },
    ]
    useEffect(() => {
      getNumber();
    }, [])
    return (
      <div>
        <DataTable 
        title="Contact List" 
        columns={columns} 
        data={phonenumbers} 
        pagination
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        highlightOnHover
        actions={<button className='btn btn-info'>Export</button>}
        />
      </div>
    )
}

export default ContactTables
