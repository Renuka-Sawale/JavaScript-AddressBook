"use strict";
const ps = require("prompt-sync")
const prompt = ps();

const Name_Regex = RegExp('(^[A-Z]{1}[a-z]{2,}$)');
const Address_Regex = RegExp('^[a-zA-z]{3,}$');
const Zip_Regex = RegExp('^[0-9]{5}$');
const PhoneNo_Regex = RegExp('^[0-9]{2} [0-9]{10}$');
const Email_Regex = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
let contactArray = new Array();

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
        else {
            throw "Name is invalid";
        } 

        if (Address_Regex.test(params[2]) && Address_Regex.test(params[3]) && Address_Regex.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        }
        else {
            throw "Address is invalid";
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
            throw "Email is not valid";
        }
    }

    toString() {
        return "First Name = " + this.firstName + 
                " \nLast Name = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNumber = " + this.phone + 
                " \nEmail = " + this.email;
    }
}

let option;
    console.log("Welcome to Address Book System");
    do {
        console.log("1: Add Person Details to AddressBook ");
        console.log("2: Edit the Details");
        console.log("3: Delete the Details");
        console.log("4: Display the Details");
        console.log("5: Count Contacts");
        console.log("6: Search Contact By City");
        console.log("7: View Contact By City");
        console.log("0: exit");
        option = Number(prompt("Please Choose Proper Choice: "));
        switch (option) {
            case 1:
                addDetails();
                break;
            case 2:
                let editName = prompt("Enter the firstname which you want to edit: ");
                editDetails(editName); 
                break;
            case 3:
                deleteDetails();
                break;
            case 4:
                displayDetails();
                break;
            case 5:
                countContact();
            break;
            case 6:
                searchContactByCity();
            break;
            case 7:
                viewContactByCity();
            break;
        }
    }while (option != 0) ;

function addDetails() {
    for(let i=0; i<1; i++) {
        let firstName = prompt("Enter the Firstname: ");
        if (contactArray.find((contact) => (contact.firstName) == (firstName))) {
            console.log("The Contact is already exists in the address book");
            return;
        }
        let lastName = prompt("Enter the Lastname: ");
        let address = prompt("Enter the Address: ");
        let city = prompt("Enter the City: ");
        let state = prompt("Enter the State: ");
        let zip = prompt("Enter the Zip: ");
        let phoneNo = prompt("Enter PhoneNo: ");
        let email = prompt("Enter the Email: ");
        let contact = new Contact(firstName,lastName,address,city,state,zip,phoneNo,email);
        contactArray.push(contact);
        console.log("Contact is added successfully. ");
    }
    console.log(contactArray);
}

function editDetails(editName){
    let contact;
    for(let i = 0; i < contactArray.length; i++){
        if(contactArray[i].firstName === editName)
            contact = contactArray[i];
            if(contact != null) {
                let lastName = prompt("Enter the new lastName which you want to set: ");
                contact.lastName =lastName;
                let address = prompt("Enter the new address which you want to set: ");
                contact.address = address;
                let city = prompt("Enter the new city which you want to set: ");
                contact.city = city;
                let state = prompt("Enter the new state which you want to set: ");
                contact.state = state;
                let zip = prompt("Enter the new zip which you want to set: ");
                contact.zip = zip
                let phoneNo = prompt("Enter the new phoneNo which you want to set: ");
                contact.phoneNo = phoneNo;
                let email = prompt("Enter the new email which you want to set: ");
                contact.email = email;
                break;
        }
    }
    console.log(contactArray);
}

function deleteDetails() {
    if(contactArray.length === 0) {
        console.log("No contacts found in the list");
    }   
    let deleteName = prompt("Enter the firstname which you want to delete: ");
    let contactfound = contactArray.find((contact)=>contact.firstName == deleteName);
    if(contactfound == undefined) {
        console.log("No such contact in Addressbook.");
    }else {
        contactArray = contactArray.filter((contacts)=>contacts.firstName!=deleteName);
        console.log("Contact is deleted successfully from Addressbook.")
    }
}

function displayDetails() {
    for(let i = 0; i < contactArray.length; i++)
        console.log(contactArray[i].toString(),"\n");
}

function countContact() {
    console.log("The Number of Contacts: "+contactArray.reduce(contact=>contact + 1, 0));
}

function searchContactByCity() {
    let city = prompt("Enter the city name: ");
    console.log(contactArray.filter((contact) => contact.city == city));
}

function viewContactByCity() {
    let city = prompt("Enter city: ");
    console.log(contactArray.filter((contact) => contact.city == city));
}