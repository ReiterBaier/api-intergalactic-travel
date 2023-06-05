# api-intergalactic-travel


## This is a project to create a RESTful API, using the libraries below:
**express** = To lift the API server

**mongoose** = For data permanence in the MongoDb database (AWS)

**axios** = To consume an External API (SWAPI)

**node-windows** = To run the application through a Windows server.



## How to use this API on your machine:
1 - Download the project to your computer.

2 - Open powershell/cmd pointing to the root folder of the project and run the command **"yarn"**, to download the project's dependencies.

### 3 - Once this is done, you can run the application in three ways:

3.1 - Use the command **"yarn buiid"**, creating the "dist" folder, converting the TypeScript files to Javascript. After that, execute the command "node ./dist/src/install.js" and that's it, the application will be running as a Windows service.

3.2 - After executing the command **"yarn build"**, execute the command "node ./dist/src/index.js", to run the application through your terminal.

3.3 - Use the **"yarn dev"** command to run the application under development


## Routes available in the API:
**GET** **/people/${id}** - Example: **/people/1**

**GET** **/starships/${id}** - Example: **/starship/9**

**GET** **/vehicles/${id}** - Example: **/vehicles/4**

**GET** **/planets/${id}** - Example: **/planets/1**

**GET** **/species/${id}** - Example: **/species/1**

**GET** **/travels** - Example: **/travels** (This is the only route that fetch data from mongoDb, the others fetch directly from SWAPI)

**POST** **/travels** - Example: **/travels** A json in the model below is expected for this route:

{
     "pilot": "string",
     "copilot": "string",
     "starship": "string",
     "homePlanet": "string",
     "destionationPlanet": "string"
}

All fields in the example above are mandatory, so if any are not sent, the API will criticize and will not record the data. To facilitate testing the application, here is a postman collection with all routes [Intergalactic API.postman_collection.zip](https://github.com/ReiterBaier/api-intergalactic-travels/files/8750914/Intergalactic.API.postman_collection .zip)



### For centuries, throughout Intergalactic travel the Droid species has been responsible for ensuring the safety of all travel. However, currently the Droids no longer do that as they are dedicating themselves to something much more promising, selling coffee at STARbucks.
