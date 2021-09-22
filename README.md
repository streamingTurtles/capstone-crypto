# Capstone Project, capstone-crypto

    
  ## Table of Contents:
  - [Project Description](#project-description)
  - [Project Technologies](#project-technologies)
  - [License Type](#license-type)
  - [Live APP Link](https://www.capstone-crypto.streamingturtles.co/)
  - [Github Link to the application](https://github.com/streamingTurtles/capstone-crypto)



  &nbsp;
  - - -
  ## Project Description:
  - This is an fullstack application that has been [deployed on digital ocean](https://www.capstone-crypto.streamingturtles.co/) that works completly when run on your [localhost machine](http://localhost:3011/). 

  - To execute a local copy of this app, please run npm -i on both the server-side (backend) & client-side (fronEnd) of the file structure.
  
  - This application uses the [Coingecko API](https://www.coingecko.com/es/api/documentation) to query a top ten list of crypto currencies from which you can use to monitor and take notes that are encrypted into a postgres DB.  The app also compares the data requests from the live API vs cached data stored in a Redis server. 

  - Below are screenshots of the working workflow of the app.
 


  - - - 
  ## Screenshot of app showing top 10 ranked crypto currencies and user adding a crypto to watch:
  ![Screenshot](/assests/capstone-crypto-pic-1.png)
    &nbsp;
  
  

  ## Screenshot of app showing the XRP crypto added to the watch list:
  ![Screenshot](/assests/capstone-crypto-pic-2.png)
    &nbsp;    
  
  

  ## Screenshot of app showing the XRP crypto added & saved in encrypted form in the postgres DB, along with the current list of cryptos (all encrypted).  
  *** POINT ***  Although data is encrypted in the DB, it is shown in text format in the View/Browser.
  ![Screenshot](/assests/capstone-crypto-pic-2.5.png)
    &nbsp;     
  
  
  ## Screenshot of app showing the XRP crypto being edited:
   ![Screenshot](/assests/capstone-crypto-pic-3.png)
    &nbsp;
  


  ## Screenshot of app showing the XRP crypto edited and updated in the watch list:   
  ![Screenshot](/assests/capstone-crypto-pic-4.png)
    &nbsp;
  


  ## Screenshot of the raw JSON data from the API - sometimes a wait to see
  ![Screenshot](/assests/capstone-crypto-pic-5.png)
    &nbsp;   



  ## Screenshot of a the returned data, of a direct API GET request to the API that takes 164ms time to reach our browser.
  ![Screenshot](/assests/capstone-crypto-pic-5.5.png)
    &nbsp;  



  ## Screenshot of the raw JSON data now saved in Cache on a REDIS server - now, much faster data retrieval time as shown in the last screenshot:
  ![Screenshot](/assests/capstone-crypto-pic-6.png)
    &nbsp;  


   ## Screenshot of the raw JSON data Returned from the REDIS Server Cache - now, you can see the data reached our browser in 47.4ms of time, about a quarter of the time from directly fetching the data directly from the API.
  ![Screenshot](/assests/capstone-crypto-pic-6.5.png)
    &nbsp;              
  - - -
  

  &nbsp;
  - - -
  ## Project Technologies:
  - PERN stack (postgres, express, react & node)
  - Redis
  - Encryption, (using pgcrypto)
  - Server-Side loadbalancing
  - [SSL certificate implemented](https://www.capstone-crypto.streamingturtles.co/) 
  
  
 
  &nbsp;
  - - -
  ## License Type:
  - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  &nbsp;
  - - -
  ## gitHub Repo Link:
  - https://github.com/streamingTurtles/capstone-crypto

  &nbsp;
  - - -
  ## Application URL:
  - https://www.capstone-crypto.streamingturtles.co/
  - [GitHub Profile](https://github.com/streamingTurtles)

  <!-- &nbsp;
  - - -
  ## Github Information:

  ![Streaming Turtles, LLC](https://avatars2.githubusercontent.com/u/1152009?v=4)
- user name: streamingTurtles
- [GitHub Profile](https://github.com/streamingTurtles)

  ## my-email-for-questions-and-information:
  - pcardillo@streamingTurtles.com   -->

  &nbsp;
- - -
- - -
Columbia Engineering Tech-Tracks, Advanced Backend, 2020-2021  
