import React,{useState} from "react";
import axios from "axios";
import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import './updateEmployee.css';
const UpdateEmployee =()=> {

    const {id} = useParams();
    
    const [Employee_ID,setEmployee_ID] = useState("");
    const [Full_Name,setFull_Name] = useState("");
    const [Name_With_Initials,setName_With_Initials] = useState("");
    const [Display_Name,setDisplay_Name] = useState("");
    const [Gender,setGender] = useState(0);
    const [Date_of_birth,setDate_of_birth] = useState("");
    const [Email,setEmail] = useState("");
    const [Mobile_Number,setMobile_Number] = useState("");
    const [Designation,setDesignation] = useState("");
    const [Employee_Type,setEmployee_Type] = useState(0);
    const [Joined_Date,setJoined_Date] = useState("");
    const [Experience,setExperience] = useState(0);
    const [Salary,setSalary] = useState("");
    const [Personal_Notes,setPersonal_Notes] = useState("");

    
function sendEmployeeData(e){
    e.preventDefault();
    alert("would you like to update");


    const AddNewemployee = {
    

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
        }

        axios.put(`http://localhost:5000/api/employee/${id}`,AddNewemployee).then(()=>{
            alert("Employee Updated");


        }).catch((err)=>{
            alert(err)
            console.log(err);
          })
          window.location.href = "/";
       }

       useEffect(() => {
        axios.get(`http://localhost:5000/api/employee/${id}`).then(res => {
             setEmployee_ID(res.data.Employee_ID);
             setFull_Name(res.data.Full_Name);
             setName_With_Initials(res.data.Name_With_Initials);
             setDisplay_Name(res.data.Display_Name);
             setGender(res.data.Gender);
             setDate_of_birth(res.data.Date_of_birth);
             setEmail(res.data.Email);
             setMobile_Number(res.data.Mobile_Number);
             setDesignation(res.data.Designation);
             setEmployee_Type(res.data.Employee_Type);
             setJoined_Date(res.data.Joined_Date);
             setExperience(res.data.Experience);
             setSalary(res.data.Salary);
             setPersonal_Notes(res.data.Personal_Notes);
             
             console.log(res.data);
            })		
          }, [])
      
    

  return (
    <div className="main_container">
    <div className="item fw-bold">
       Update Employee Details
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

        <form className='formcard' onSubmit={sendEmployeeData} >



            <div className="row mt-4">
                <div className="col">
                    <input type="text" value={Employee_ID} className="form-control" placeholder="Employee ID" onChange={(e)=>{ setEmployee_ID(e.target.value);}} />
                 
                </div>
                <div className="col">
                    <input type="text" value={Full_Name} className="form-control" placeholder="Full Name" onChange={(e)=>{ setFull_Name(e.target.value);}}  />
                 
                </div>

            </div>
            <div className="row mt-4">
                <div className="col">
                    <input type="text" value={Name_With_Initials} className="form-control" placeholder="Name With Initials" onChange={(e)=>{ setName_With_Initials(e.target.value);}}  />
                  
                </div>
                <div className="col">
                    <input type="text" value={Display_Name} className="form-control" placeholder="Display Name" onChange={(e)=>{ setDisplay_Name(e.target.value);}} />
                 
                </div>

            </div>
            <div className="row mt-4">
            <div className="col">
                    <select name="position" value={Gender} className="form-select" aria-label="role"onChange={(e)=>{ setGender(e.target.value);}}  >
                        <option selected disabled value="0">Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      

                    </select>
                   

                </div>
                <div className="col">
                    <input name="Dateposted" value={Date_of_birth}
                        className="form-control"
                        placeholder="Date of Birth"
                        type="text"
                        onFocus={(e) => e.target.type = 'date'} 
                        id="" onChange={(e)=>{ setDate_of_birth(e.target.value);}}  />
                  
                </div>

            </div>
            <div className="row mt-4">
            <div className="col">
                    <input type="text" value={Email} className="form-control" placeholder="Email" onChange={(e)=>{ setEmail(e.target.value);}}  />
                  
                </div>
                <div className="col">
                    <input type="text" value={Mobile_Number} className="form-control" placeholder="Mobile Number" onChange={(e)=>{ setMobile_Number(e.target.value);}}  />
                
                </div>

            </div>


            <div className="row mt-4">
                <div className="col">
                    <input type="text" value={Designation} className="form-control" placeholder="Designation" onChange={(e)=>{ setDesignation(e.target.value);}}  />
                 
                </div>
                <div className="col">
                    <select name="position" value={Employee_Type} className="form-select" aria-label="role" onChange={(e)=>{ setEmployee_Type(e.target.value);}}  >
                        <option selected disabled value="0">Employee Type</option>
                        <option value="1">Part Time</option>
                        <option value="2">Full Time</option>
                        <option value="3">Contract Basis</option>
                        <option value="4">Other</option>
                      

                    </select>
                   

                </div>
            </div>
            <div className="row mt-4">
            <div className="col">
                    <input name="Joineddate" value={Joined_Date}
                        className="form-control"
                        placeholder="Joined Date"
                        type="text"
                        onFocus={(e) => e.target.type = 'date'} 
                        id="joineddate" onChange={(e)=>{ setJoined_Date(e.target.value);}}  />
                  
                </div>
                <div className="col">
                    <select name="position" value={Experience} className="form-select" aria-label="role" onChange={(e)=>{ setExperience(e.target.value);}} >
                        <option selected disabled value="0">Experience</option>
                        <option value="1">01 year</option>
                        <option value="2">02 years</option>
                        <option value="3">03 years</option>
                        <option value="4">above</option>
                      

                    </select>
                 

                </div>
                <div className="row mt-4">
                <div className="col-6">
                    <input type="text" value={Salary} className="form-control" placeholder="Salary($)" onChange={(e)=>{ setSalary(e.target.value);}} />
                  
                </div>
                </div>
                <div className="row mt-4">

                    <div class="form-group">

                        <textarea class="form-control" value={Personal_Notes} id="exampleFormControlTextarea1" placeholder="Personal Notes" rows="3" onChange={(e)=>{ setPersonal_Notes(e.target.value);}} >

                        </textarea>
                     
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="d-flex justify-content-around align-items-center">
               
               

                    <button type="button" className="btn btnAdd"  onClick={sendEmployeeData}>Upodate</button>
                  
                            
                </div>
            </div>

        </form>
      
        </div>

    </div>
  )
}

export default UpdateEmployee;
