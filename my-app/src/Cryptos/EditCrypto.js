// import e from "express";
import React, { Fragment, useState } from "react";

const EditCrypto = ({ crypto_name }) => {
    console.log(crypto_name); //the object 
    console.log(crypto_name.name); // value of the keyed - name: " ... "
    // to display it, I keep track of it with useState
    const [name, setName] = useState(crypto_name.name);


    const updateCryptoName = async e => {
        e.preventDefault();
        try {
          const body = { name };
          const response = await fetch(`http://localhost:5000/updatecrypto/${crypto_name.crypto_name_id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          console.log(response);
          window.location = "/";
        } catch (err) {
            console.error(err.message);
            
        }
    }




    return <Fragment>
        {/* using bootstrat4 modal */}

        {/* replace "#myModal with the targed id*/}
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${crypto_name.crypto_name_id}`}> 
        Edit
        </button>
        <div class="modal" id={`id${crypto_name.crypto_name_id}`}
             onClick={() => setName(crypto_name.name)}
        >  
        <div class="modal-dialog">
            <div class="modal-content">            
                <div class="modal-header">
                    <h4 class="modal-title">Update Crypto</h4>
                    <button type="button" 
                            class="close" 
                            data-dismiss="modal"
                            onClick={() => setName(crypto_name.name)}
                            >&times;
                    </button>
                </div>
            
                <div class="modal-body">
                    <input type="text" 
                           className="form-control" 
                           value={name} 
                           onChange={e => setName(e.target.value)}/>
                </div>

                <div class="modal-footer">
                    <button type="button" 
                            class="btn btn-warning" 
                            data-dismiss="modal" 
                            onClick={e => updateCryptoName(e)}
                            >Edit
                    </button>
                </div>  

                <div class="modal-footer">
                    <button type="button" 
                            class="btn btn-danger" 
                            data-dismiss="modal"
                            onClick={() => setName(crypto_name.name)}
                            >Close
                    </button>                    
                </div>

            </div>
        </div>
        </div>        








    </Fragment>;
};


export default EditCrypto;