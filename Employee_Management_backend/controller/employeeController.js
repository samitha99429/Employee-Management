import Employee from"../models/employeeModel.js";

  export const addEmployee = (req, res) =>{
    const {
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
    } = req.body;

    const newEmployee = new Employee({
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
    });

    newEmployee
        .save()
        .then((createdEmployee) => {
            res.json (createdEmployee);
        })
        .catch((err) =>{
            console.log(err);
        });      

};

//fetchdata

 export const getEmployee = async(req , res) => {
    try{
        const employee = await Employee.find();
        res.json(employee);

    }catch(error){
        res.status(400).json(error);

    }
};


export const getsingleEmployee = async (req, res) => {
	try {
		const id = req.params.id;
		const employee = await Employee.findById(id);
		res.status(200).json(employee);
	} catch (error) {
		res.status(400).json(error);
	}
};

////Update////

 export const updateEmployee = async (req ,res) =>{
    const Employee_id = req.params.id;

    try{
        const employee = await Employee.findById(Employee_id);
        if(!employee){

        }
        const {
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
        }= req.body;
        const emp = await Employee.findByIdAndUpdate(Employee_id, {
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
        });

        res.status(201).json({ Update: true });
    }catch (error) {
        res.status(400).json(error.message);
    }
};

//////Delete//////

 export const removeEmployee  = async(req, res) =>{
    const Employee_id = req.params.id;
    try{
         const employee = await Employee.findById(Employee_id);
         if(!employee){
            return res.status(404).json("There is no Employee");
         }
         const removeEmployee = await Employee.findByIdAndDelete(Employee_id);
         res.status(200).json(removeEmployee);
    }catch(error) {
        res.status(400).json(error.message);
    }
};

