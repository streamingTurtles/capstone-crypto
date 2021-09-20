
import React, {useState, useEffect } from "react";
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';


// Coingecko Swagger API documentation: https://www.coingecko.com/es/api/documentation 
// using reactstrap to add a table for the JSON data to populate
function Coingecko(){
    const [coins, getCoins] = useState([]);
    useEffect(() =>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
             .then(res => {
                 getCoins(res.data);
                 console.log(res.data);  // testing the JSON returned coin data from returned promise
             })
             .catch(error => console.error("error"))
    }, [])


    return <div>
        <br></br>
        <h2 className="text-center">Coingecko API - JSON returned data diplayed below</h2>        
        <h3 className="text-center">
             <a href="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"> Click here </a>
              - to see the "raw" JSON data of the top 10 Crypto's
        </h3>                                 
        <h3 className="text-center">Use this data to watch and store your cryptos in a postgres DB</h3>
            
            <div className="Coingecko">
                <Container>
                    <Row>
                        <Col md="14">
                            <Table className="mt-5" >
                                <thead >
                                    <tr>
                                    {/* <th>symbol</th> */}
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Rank</th>
                                    <th>Price</th>
                                    {/* market capitilization = shares * current price */}
                                    <th>Market Cap Change</th>
                                    </tr>
                                </thead>
                                {coins.map(coin => {
                                    return(
                                     <tbody>
                                        <tr>
                                        <td>{coin.name}</td>
                                        <td>{coin.symbol}</td>
                                        <td>{coin.market_cap_rank}</td>
                                        <td>{coin.current_price}</td>
                                        {coin.market_cap_change_percentage_24h > 0 ? (
                                            <td className="green">
                                                {coin.market_cap_change_percentage_24h.toFixed(2)}% up
                                            </td>
                                        ) : (
                                            <td className="red">
                                                {coin.market_cap_change_percentage_24h.toFixed(2)}% down
                                            </td>
                                        )}
                                        </tr>
                                     </tbody>
                                    )
                                })}
                            </Table>
                        </Col>
                    </Row>
                </Container>
 
            </div>  
    </div>           
}

export default Coingecko



// Testing JSON data from before, now to bring into React & then CRUD into a postgresSQL DB
// [ 
//   {  
// 
//  "JSON":"returned data",
//  "resources":[{
    //  link:"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    //  displayname: "Data"
//  } ]
// 
// }
// 
// ]