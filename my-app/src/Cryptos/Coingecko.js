
import React, {useState} from "react";


function Coingecko(){

    return <div>
        <h1>Coingecko JSON return to go here</h1>
        <h2>use this data to seed the db as needed - TBD</h2>
        <link href="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"/>

        <tr>
            <td>JSON DATA</td>
            <td><a href="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"> Click here for JSON DATA - to be curated for view and database</a></td>
        </tr>
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