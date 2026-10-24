let institute = {
    name: "Innomatics Research Labs",
    Courses: {
        Java_Fullstack: {
            Frontend:{
                design :"Html",
                styling: "CSS",
                scripting: "Javascript"
            },
            Backend: "Java, Servlet",
            Databse: "MySQL, MongoDB",
        },
        Python_Fullstack: {
            Frontend: "Html, CSS, Javascript",
            Backend: "Django, Flask",
            Databse: "PostgreSQL, SQLite",
        },
        Mern_Stack: {
            Frontend: "Html, CSS, Javascript, ReactJS",
            Backend: "NodeJS, ExpressJS",
            Databse: "MongoDB",
        },
    },
    address:{
        H_no: "205",
        Street: "Sardar Patel Road",
        City: "Hyderabad",
        State: "Telangana",
    }
}
//Retriving
console.log(institute.Courses.Java_Fullstack.Frontend.design);
console.log(institute.Courses.Python_Fullstack.Databse);
console.log(institute.address.H_no);
//Update
institute.name = "Full Stack Experts Academy" ;
institute.Courses.Java_Fullstack.Frontend.design = "HTML5" ;
institute.Courses.Java_Fullstack.Backend = "Jdbc,Spring Boot" ;
institute.Courses.Python_Fullstack.Backend = "Python, Django " ;
console.log(institute);
//Add
institute.Courses.DataScience = {
     Programming: "Python", 
     Libraries: "NumPy", 
     Database: "MySQL, PostgreSQL", 
     Visualization: "Power BI" 
    };
console.log(institute);
//Delete 
delete institute.Courses.Java_Fullstack.Frontend.scripting;
delete institute.Courses.Mern_Stack.Databse;
console.log(institute);

    



