class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNo, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }
}

let contact = new Contact("Samarh", "Sawale", "Marunji", "Pune", "Maharastra", "5012", "9104223344", "samarth1@gmail.com");
console.log(contact);