//console.log("hello")
const yargs =require("yargs")

const notes =require('./notes')
yargs.command({
    command:'add',
    describe :'add student',
    builder:{
        Id:{
            describe:'this is id description ',
            demandOption : true,
            type: 'Number'
                },
        Name:{
            describe:'this is the name of the student',
            demandOption:true,
            type:'String'
        },
        Grades:{
            describe:'this is grads of the student',
            demandOption:false,
            type:'array'
        }
    },
    hundler:(x)=>{
        notes.addInfoStudent(x.Id,x.Name ,x.Grades)

    }
})
/////////////////////////////////
// delete data
yargs.command({
    command: "delete",
    describe: "delete  student",
    builder: {
      Id: {
        describe: "student id",
        demandOption: true,
        type: "number",
      },
    },
    handler: (x) => {
      notes.deleteData(x.Id);
    },
  });
  ////////////////////////////////////////
  //read command
  yargs.command({
    command: "read",
    describe: "read information",
    builder: {
      Id: {
        describe: "student id",
        demandOption: true,
        type: "number",
      },
    },
    handler: (x) => {
      // console.log(b.id);
      notes.readData(x.Id);
    },
  });
///////////////////////////////////
//list command
yargs.command({
    command: "list",
    describe: "list  data",
    handler: (x) => {
      notes.listData();
    },
  });
  
  yargs.parse();
