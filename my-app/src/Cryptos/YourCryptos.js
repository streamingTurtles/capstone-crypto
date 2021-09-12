import React, { Fragment, useEffect, useState } from "react";

const YourCryptos = () => {

    // from the array data returned from the "/getallcryptos" APR route -
    // put it inside our useState 
    const [cryptos, setCryptos] = useState([]);

    const getWatchedCryptos = async () => {
        try {
          const response = await fetch("http://localhost:5000/getallcryptos")
          const jsonData = await response.json();

          // console.log (jsonData);
          setCryptos(jsonData);
        } catch (err) {
          console.error(err.message);            
        }
    }
    // useEffect - make a fetch req each time our component is rendered
    useEffect( () =>{ getWatchedCryptos(); }, []);
    console.log(cryptos);




    return (     
    <Fragment>        
        <h3 className="text-center mt-2">Your Watched Cryptos</h3>
        {" "}
        <table className="table text-center">
            <thead>
            <tr>
                <th>Crypto Watch</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            
            <tbody>                
            {cryptos.map(crypto_name => {
                return (
                <tr>
                    <td>{crypto_name.name}</td>
                    <td>Edit</td>
                    <td>Delete</td>
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









