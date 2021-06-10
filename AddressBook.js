Name_Regex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    const Address_Regex = RegExp('^[a-zA-z]{3,}$');
    const Pincode_Regex = RegExp('^[0-9]{6}$');
    const PhoneNo_Regex = RegExp('^[0-9]{1,2} [0-9]{10}');
    const Zip_Regex = RegExp('^[1-9]{1}[0-9]{5}$');
    const Email_Regex= RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
    let contactsArray = new Array();

class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params) {
        if (Name_Regex.test(params[0]) && Name_Regex.test(params[1])) {
            this.firstName = params[0];
            this.lastName = params[1];
        }
        
        else{
            throw "Name is invalid";
        } 
        
        if (Address_Regex.test(params[2]) && Address_Regex.test(params[3]) && Address_Regex.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        }
        
        else{
            throw "Address is invalid";
        }

        if (Zip_Regex.test(params[5])) {
            this.zip = params[5];
        }
        
        else {
            throw "Zip Code is invalid";
        }

        if (phoneNo_Regex.test(params[6])) {
            this.phoneNo = params[6];            
        }
        
        else {
            throw "PhoneNo is invalid";
        }

        if (email_Regex.test(params[7])) {
            this.email = params[7];
        }
        
        else {
            throw "Email is invalid";
        }
    }

    toString() {
        return "First Name = " + this.firstName + 
                " \nLast Name = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNo = " + this.phoneNo + 
                " \nEmail = " + this.email;
    }
}
try {
    let contact1 = new Contact("Renuka", "Sawale", "Pimpri", "Pune", "Maharashtra", "5675", "91 9900112323", "renuka11@gmail.com");
    let contact2 = new Contact("Rahul", "Patil", "Hsr", "Bangalore", "Karnataka", "5634", "91 8812123456", "rahul@gmail.com");
    contactsArray.push(contact1);
    contactsArray.push(contact2);
    console.log(contactsArray);
} catch(e) {
    console.error(e);
}