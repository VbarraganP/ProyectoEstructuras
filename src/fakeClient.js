const faker = require("faker");
const fs = require("fs");

function generateClient() {
    // Aca se guardan los datos falsos en las estructuras establecidas
    let users = [];

    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 1000000; id++) {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumber();
        const city = 'Bogota';
        const email = faker.internet.email();
        
        //llamamos el metodo que introduce los datos en la estructura
        users.push({
            id: id,
            firstname: firstName,
            lastname: lastName,
            phoneNumber: phoneNumber,
            city: city,
            email: email
        });

    }
    return { data: users };
}



const generatedData = generateClient();

// Por si queremos ver que datos metimos en la estructura:

/*
fs.writeFileSync("dataClient.json", JSON.stringify(generatedData, null, "\t"));
*/