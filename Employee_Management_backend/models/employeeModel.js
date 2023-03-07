import  mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    
    Employee_ID: { 
        type:String,
       
    },
    Full_Name: {
        type:String,
    },
    Name_With_Initials: {
        type:String,
    },
    Display_Name: {
        type:String,
    },
   
    Gender: { 
        type:String,
    },
    Date_of_birth: { 
        type:String,
    },
    Email: { 
        type:String,
    },
    Mobile_Number: { 
        type:String,
    },
   
    Designation: { 
        type:String,
    },
    Employee_Type: { 
        type:String,
    },
    Joined_Date: { 
        type:String,
    },
    Experience: { 
        type: String,
    },
    Salary: { 
        type:String,
    },
    Personal_Notes: { 
        type:String,
    }
});

export default mongoose.model("employeeModel", employeeSchema);



