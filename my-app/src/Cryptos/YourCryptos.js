import React, { Fragment, useEffect, useState } from "react";
// import { delete_Crypto } from "../../../routes/api/api_crypto";
import EditCrypto from "./EditCrypto";


require('dotenv').config();
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;



const YourCryptos = () => {

    // from the array data returned from the "/getallcryptos" APR route -
    // put it inside our useState 
    // const [loading, setLoading] = useState(true)
    const [cryptos, setCryptos] = useState([]);

    // delete function to remove upon onClick() delete button
    const deleteCrypto = async id => {
        //debugger;
        try {
          const deleteCrypto = await fetch (`http://localhost:5000/deletecrypto/${id}`, {
              method: "DELETE"
          }).then(() => {
            getWatchedCryptos()

          })  
          console.log(deleteCrypto); 
          // use a filter function to return every other crypto I am not trying to delete  
          //setCryptos(cryptos.rows.filter(crypto_name => crypto_name.crypto_name_id !== id ));
        //   getWatchedCryptos()
          window.location = "/";  //refresh the browser window 
        } catch (err) {
          console.error(err.message)            
        }        
    }

    const getWatchedCryptos = async () => {
        try {
          const response = await fetch("http://localhost:5000/getallcryptos")
          const jsonData = await response.json();

          //debugger;
          // console.log (jsonData);
          setCryptos(jsonData);
        // debugger;
        } catch (err) {
          console.error(err.message);            
        } 
    }
    // useEffect - make a fetch req each time our component is rendered
    useEffect( () =>{ getWatchedCryptos(); }, []);
    console.log(cryptos);
    // debugger;




    return (     
    <Fragment>        
        <h3 className="text-center mt-2">Your Watched Cryptos</h3>
        {" "}
        <table className="table text-center">
            <thead>
            <tr>
                <th>Crypto Watch</th>
                <th>Update Crypto</th>
                <th>Delete Crypto</th>
            </tr>
            </thead>
            
            <tbody>              
            {cryptos?.rows?.map(crypto_name => {
                return (
                <tr key={crypto_name.crypto_name_id}>
                    <td>{crypto_name.name}</td>

                    {/* <td>{`SELECT name, PGP_SYM_DECRYPT(name::bytea, $1) as name FROM crypto_name WHERE crypto_name_id=$2`, [ENCRYPTION_KEY, crypto_name.crypto_name_id]}</td> */}
          

                    {/* other commands I have tried that don't work */}

                    {/* <td>{`SELECT name, PGP_SYM_DECRYPT(name::bytea, $1) as name FROM crypto_name WHERE crypto_name_id=$2`, [ENCRYPTION_KEY,crypto_name.crypto_name_id]}</td> */}

                    {/* SELECT name, PGP_SYM_DECRYPT(name::bytea, '1234') as name FROM crypto_name WHERE crypto_name_id='27'; */}

                    {/* <td>{`SELECT * PGP_SYM_DECRYPT(name::bytea, $1) as name FROM crypto_name WHERE crypto_name_id = $2 `[ENCRYPTION_KEY, crypto_name.name]}</td> */}

                    {/* {`SELECT crypto_name (name) PGP_SYM_DECRYPT(name::bytea, $1) ) RETURNING *`,
                    [ENCRYPTION_KEY, crypto_name.name]} */}

                    {/* <td>
                    {`SELECT crypto_name (name) PGP_SYM_DECRYPT(name::bytea, $1) ) RETURNING *`,
                    [ENCRYPTION_KEY, crypto_name.name]}
                    </td> */}

                    {/* <td>
                        {`SELECT name, PGP_SYM_DECRYPT(name::bytea, $1) AS name FROM crypto_name WHERE crypto_name_id = $2`,
                        [ENCRYPTION_KEY, crypto_name.crypto_name_id]}
                    </td> */}

                    {/* <td>
                        {`SELECT name, PGP_SYM_DECRYPT(name::bytea, $1) AS name FROM crypto_name`,
                        [ENCRYPTION_KEY, crypto_name.name]}
                    </td> */}

                    {/* <td>
                        {`SELECT * PGP_SYM_DECRYPT(name::bytea, $1) AS name FROM crypto_name`,
                        [ENCRYPTION_KEY]}
                    </td> */}
                    





                    <td>
                    <EditCrypto crypto_name={crypto_name}/>
                    </td>
                    <td>
                        <button className="btn btn-danger" 
                        onClick={(e) => deleteCrypto(crypto_name.crypto_name_id)}>Delete</button>
                    </td>
                </tr>
                )
              })
            }                     
            </tbody>
            
            
                    
            
            
        </table>
        

    </Fragment>
    )
};

export default YourCryptos;









