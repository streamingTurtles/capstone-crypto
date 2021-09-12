import React, { Fragment, useState } from "react";


const InputCrypto = () => {

    // setup state to add, track user input
    const [name, addCryptoName] = useState("");
    
    // submit the form so we can send the data to our postgres db
    const onSubmitForm = async e => {
        e.preventDefault();  // prevent page refresh
        try {
          const body = { name }  ;  // name destructure of our crypto_name table in crypto_db
          const response = await fetch("http://localhost:5000/createcrypto", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
          });
          console.log(response); // see the users input in express server console
          window.location = "/"; // clears out user input after Add Crypto buttn pressed            
        } catch (err) {
            console.error(err.message);
            
        }
    }


    return <Fragment>
        <h1 className="text-center"> Enter a Crypto to Watch:</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input type="text" 
            className="form-control"
            value={name}
            onChange={e => addCryptoName(e.target.value)}
            />
            <button className="btn btn-success">Add Crypto</button>
        </form>
    </Fragment>
};

export default InputCrypto;

