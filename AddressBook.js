const Name_Regex = RegExp('^[A-Z]{1}[a-z]{2,}$');
const Address_Regex = RegExp('^[a-zA-z]{3,}$');
const Pincode_Regex = RegExp('^[0-9]{6}$');
const PhoneNo_Regex = RegExp('^[0-9]{1,2} [0-9]{10}');
const Zip_Regex = RegExp('^[1-9]{1}[0-9]{5}$'); 
const Email_Regex= RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');

class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(...params) {
        if (Name_Regex.test(params[0]) && Name_Regex.test(params[1])) {
            this.firstName = params[0];
            this.lastName = params[1];
        }
        else {
            throw "Name is invalid"; 
        }
        if (Address_Regex.test(params[2])) {
            this.address = params[2];
        }
        else {
            throw "Address is invalid"; 
        }
        if (Address_Regex.test(params[3])) {
            this.city = params[3];
        }
        else {
            throw "City is invalid"; 
        }
        if (Address_Regex.test(params[4])) {
            this.state = params[4];
        }
        else {
            throw "State is invalid"; 
        }
        if (Zip_Regex.test(params[5])) {
            this.zip = params[5];
        }
        else {
            throw "Zip is invalid"; 
        }
        if (PhoneNo_Regex.test(params[6])) {
            this.phoneNo = params[6];
        }
        else {
            throw "PhoneNo is invalid"; 
        }
        if (Email_Regex.test(params[7])) {
            this.email = params[7];
        }
        else {
            throw "Email is invalid"; 
        }
        try {
            let contact = new Contact("Srusthi", "Sawale", "Seawood", "Mumbai", "Maharastra", "50123", "8478909878", "srusthi12@gmail.com");
            console.log(contact);
        } catch (e) {
            console.error(e);
        }
    }
}