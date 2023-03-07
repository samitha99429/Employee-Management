import React, { useEffect, useState } from 'react';
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";
import './addEmployee.css';
import swal from 'sweetalert2';

const Addemployee = () => {

    const [Employee_ID, setEmployee_ID] = useState("");
    const [Full_Name, setFull_Name] = useState("");
    const [Name_With_Initials, setName_With_Initials] = useState("");
    const [Display_Name, setDisplay_Name] = useState("");
    const [Gender, setGender] = useState(0);
    const [Date_of_birth, setDate_of_birth] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile_Number, setMobile_Number] = useState("");
    const [Designation, setDesignation] = useState("");
    const [Employee_Type, setEmployee_Type] = useState(0);
    const [Joined_Date, setJoined_Date] = useState("");
    const [Experience, setExperience] = useState(0);
    const [Salary, setSalary] = useState("");
    const [Personal_Notes, setPersonal_Notes] = useState("");
    const [listofemployees, setListofEmployees] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);





    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate());
        sub();
        setIsSubmit(true);

    };

    const validate = () => {
        const errors = {};

        //validation of fields//
        if (!Employee_ID) {
            errors.Employee_ID = "Employee ID is required!";

        }
        if (!Full_Name) {
            errors.Full_Name = "Full Name is required!";

        }
        if (!Name_With_Initials) {
            errors.Name_With_Initials = "Name with initials is required!";
        }
        if (!Display_Name) {
            errors.Display_Name = "Display name is required!";
        }
        if (!Gender) {
            errors.Gender = "Gender is required!";
        }
        if (Salary.charAt(0) != "$") {
            errors.Salary = "Please Enter $ sign!";
        }
        if (!Date_of_birth) {
            errors.Date_of_birth = "Date of birth is required!";
        }
        if (!Mobile_Number) {
            errors.Mobile_Number = "Mobile Number is required!";
        } else if (Mobile_Number.length !== 10) {
            errors.Mobile_Number = "Mobile Number is Invalid!"

        }

        if (!Email) {
            errors.Email = "Email is required!";
        } else if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email)) {
            errors.Email = "Invalid email format!";
        }

        if (!Designation) {
            errors.Designation = "Designation is required!";
        }
        if (!Employee_Type) {
            errors.Employee_Type = "Employee type is required!";
        }
        if (!Joined_Date) {
            errors.Joined_Date = "Joined date  is required!";
        }
        if (!Experience) {
            errors.Experience = "Experience is required!";
        }



        return errors;
    }
    const sub = () => {

        if (Object.keys(formErrors).length == 0 && isSubmit) {
            AddNewemployee
                ();

        }
    }

    ///addEmployee
    const AddNewemployee = () => {
        Axios.post("http://localhost:5000/api/employee/", {

            Employee_ID,
            Full_Name,
            Name_With_Initials,
            Display_Name,
            Gender,
            Date_of_birth,
            Email,
            Mobile_Number,
            Designation,
            Employee_Type,
            Joined_Date,
            Experience,
            Salary,
            Personal_Notes,
        }).then((response) => {
            setListofEmployees([
                ...listofemployees,
                {
                    Employee_ID,
                    Full_Name,
                    Name_With_Initials,
                    Display_Name,
                    Gender,
                    Date_of_birth,
                    Email,
                    Mobile_Number,
                    Designation,
                    Employee_Type,
                    Joined_Date,
                    Experience,
                    Salary,
                    Personal_Notes,

                },
            ]);
        });
        alert("Employee added sucessfully");



        window.location.href = "/";


    };




    return (

        <div className="main_container">
            <div className="item fw-bold">
                Employee Registration
            </div>
            <div className="item">
                <div className="row mt-5 ps-3">
                    <div className="row">
                        <div className=" col-lg-6 col-md-12 col-sm-12">

                        </div>
                        <div className=" col-lg-6 col-md-12 col-sm-12">

                        </div>
                    </div>
                </div>
                <div className="row mt-5 px-3"></div>

                <form className='formcard'>



                    <div className="row mt-4">
                        <div className="col">
                            <input type="text" value={Employee_ID} className="form-control" placeholder="Employee ID" onChange={(e) => { setEmployee_ID(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Employee_ID}</p>
                        </div>
                        <div className="col">
                            <input type="text" value={Full_Name} className="form-control" placeholder="Full Name" onChange={(e) => { setFull_Name(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Full_Name}</p>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <input type="text" value={Name_With_Initials} className="form-control" placeholder="Name With Initials" onChange={(e) => { setName_With_Initials(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Name_With_Initials}</p>
                        </div>
                        <div className="col">
                            <input type="text" value={Display_Name} className="form-control" placeholder="Display Name" onChange={(e) => { setDisplay_Name(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Display_Name}</p>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <select name="position" value={Gender} className="form-select" aria-label="role" onChange={(e) => { setGender(e.target.value); }}  >
                                <option selected disabled value="0">Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>


                            </select>
                            <p class="alert-txt">{formErrors.Gender}</p>

                        </div>
                        <div className="col">
                            <input name="Dateposted" value={Date_of_birth}
                                className="form-control"
                                placeholder="Date of Birth"
                                type="text"
                                onFocus={(e) => e.target.type = 'date'}
                                id="" onChange={(e) => { setDate_of_birth(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Date_of_birth}</p>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <input type="text" value={Email} className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Email}</p>
                        </div>
                        <div className="col">
                            <input type="text" value={Mobile_Number} className="form-control" placeholder="Mobile Number" onChange={(e) => { setMobile_Number(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Mobile_Number}</p>
                        </div>

                    </div>


                    <div className="row mt-4">
                        <div className="col">
                            <input type="text" value={Designation} className="form-control" placeholder="Designation" onChange={(e) => { setDesignation(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Designation}</p>
                        </div>
                        <div className="col">
                            <select name="position" value={Employee_Type} className="form-select" aria-label="role" onChange={(e) => { setEmployee_Type(e.target.value); }}  >
                                <option selected disabled value="0">Employee Type</option>
                                <option value="">All</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contractor">Contract Basic</option>


                            </select>
                            <p class="alert-txt">{formErrors.Employee_Type}</p>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <input name="Joineddate" value={Joined_Date}
                                className="form-control"
                                placeholder="Joined Date"
                                type="text"
                                onFocus={(e) => e.target.type = 'date'}
                                id="joineddate" onChange={(e) => { setJoined_Date(e.target.value); }} />
                            <p class="alert-txt">{formErrors.Joined_Date}</p>
                        </div>
                        <div className="col">
                            <select name="position" value={Experience} className="form-select" aria-label="role" onChange={(e) => { setExperience(e.target.value); }} >
                                <option selected disabled value="0">Experience</option>
                                <option value="1">01 year</option>
                                <option value="2">02 years</option>
                                <option value="3">03 years</option>
                                <option value="4">above</option>


                            </select>
                            <p class="alert-txt">{formErrors.Experience}</p>

                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <input type="text" value={Salary} className="form-control" placeholder="Salary($120)" onChange={(e) => { setSalary(e.target.value); }} />
                                <p class="alert-txt">{formErrors.Salary}</p>
                            </div>
                        </div>
                        <div className="row mt-4">

                            <div class="form-group">

                                <textarea class="form-control" value={Personal_Notes} id="exampleFormControlTextarea1" placeholder="Personal Notes" rows="3" onChange={(e) => { setPersonal_Notes(e.target.value); }} >

                                </textarea>
                                <p class="alert-txt">{formErrors.Personal_Notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="d-flex justify-content-around align-items-center">

                            <button onclick="window.location.href='./addEmployee.js'" className="btn btnCancel">cancel</button>

                            <button type="button" className="btn btnAddd" onClick={handleSubmit}>Add People</button>


                        </div>
                    </div>

                </form>

            </div>

        </div>


    )

}

export default Addemployee;