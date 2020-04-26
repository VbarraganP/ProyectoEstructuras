const faker = require("faker");
const fs = require("fs");

function generateProv() {
    // Aca se guardan los datos falsos en las estructuras establecidas
    let users = [];
 
    //Generamos el numero de datos requeridos:
    for (let id = 1; id <= 1000000; id++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phoneNumber = faker.phone.phoneNumber();
        const city = 'Bogota';
        const email = faker.internet.email();
        const score = faker.random.number();
        const description = faker.random.words(20);
        const owner = faker.name.firstName();


        //llamamos el metodo que introduce los datos en la estructura
        users.push({
            id: id,
            firstname: firstName,
            lastname: lastName,
            phoneNumber: phoneNumber,
            city: city,
            email: email,
            score: score,
            description: description,
            owner: owner
        });

    }
    return { data: users };
}



const generatedData = generateProv();

// Por si queremos ver que datos metimos en la estructura:

/*
fs.writeFileSync("dataProv.json", JSON.stringify(generatedData, null, "\t"));
*/