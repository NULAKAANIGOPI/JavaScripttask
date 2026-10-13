//object with Squarebrackets
let college = {
    clgName: "AVIT",
    clgCity: "Chennai",
    clgState: "TamilNadu"
};
//Retriving Data
console.log("=====Retriving Data=====");
console.log("College Name :" + college["clgName"]);
console.log("College Name :" + college["clgCity"]);
console.log("College Name :" + college["clgState"]);
//Updating Data
console.log("=====Updating Data=====");
college.clgName = "JNTU";
console.log("Updated college Name :" + college["clgName"]);
college.clgCity = "Hyderabad";
console.log("Updated college city :" + college["clgCity"]);
college.clgState = "Telangana";
console.log("Updated college state :" + college["clgState"]);
//Adding Data
console.log("=====Adding Data=====");
college.clgPincode = 800085;
console.log("Adding pin code :" + college["clgPincode"]);
college.clgDepartment1 = "CSE";
console.log("Adding Department1 :" + college["clgDepartment1"]);
college.clgDepartment2 = "Civil";
console.log("Adding Department2 :" + college["clgDepartment2"]);
console.log(college);
//Deleting Data
console.log("=====After deleting Data=====");
delete college.clgDepartment1;
delete college.clgCity;
console.log(college);



//object with Dot Notation and Nested Object
let hospital = {
    hspName: "RainBow",
    hspCode: 12345,
    hsplocation: {
        hspCity: "Vijayawada",
        hspState: "Andhra Pradesh",
    }
}
//Retrive Data 
console.log("=====Retive Data=====");
console.log("Hospital Name:", hospital.hspName);
console.log("Hospital Code:", hospital.hspCode);
console.log("Hospital Location :", hospital.hsplocation);
//Update Data
console.log("=====Updating Data=====");
console.log("Before Update:", hospital);
hospital.hspName = "Remedy";
hospital.hspCode = 800085;
console.log("After Update:", hospital);
//Adding Data
console.log("=====Adding Data=====");
hospital.doctorName = "Dr.Suresh";
hospital.specilization = "Cardiology";
console.log("After Adding Data:", hospital);
//Deleting Data
console.log("=====After deleting Data=====");
delete hospital.hspCode;
delete hospital.hsplocation.hspCity;
console.log("After Deleting Data : ", hospital);


//object with Dot Notation and Nested Object
let employee = {
    empName: "Gopi",
    empId: 101,
    empLocation: {
        empCity: "Hyderabad",
        empState: "Telangana"
    }
};
// Retrieve Data
console.log("=====Retrieving Data=====");
console.log("Employee Name:", employee["empName"]);
console.log("Employee ID:", employee["empId"]);
console.log("Employee Location:", employee["empLocation"]);
console.log("Employee City:", employee["empLocation"]["empCity"]);
console.log("Employee State:", employee["empLocation"]["empState"]);

// Update Data
console.log("=====Updating Data=====");
console.log("Before Update:", employee);
employee["empName"] = "Ravi";
employee["empId"] = 102;
employee["empLocation"]["empCity"] = "Chennai";
employee["empLocation"]["empState"] = "TamilNadu";
console.log("After Update:", employee);

// Adding Data
console.log("=====Adding Data=====");
employee["empSal"] = 35000;
employee["empDept"] = "Java";
employee["empLocation"]["empPin"] = 500085;
console.log("After Adding Data:", employee);

// Deleting Data
console.log("=====After Deleting Data=====");
delete employee["empId"];
delete employee["empLocation"]["empState"];
console.log("After Deleting Data:", employee);
