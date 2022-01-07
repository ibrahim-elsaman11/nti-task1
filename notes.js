
/////////////////////////////////////////////
//add function
const fs=require('fs')
const addInfoStudent =(Id,Name,Grades)=>{
    const Notes =LoadNotes()
    const Dublicate =Notes.filter((student)=>{
        return student.Id == Id
    })
    
    if(Dublicate.length == 0){
        let sum =0
        Grades.forEach((el)=>{
            sum+=el
        })
        Notes.push({
            Id,
            Name,
            Grades,
            sum
        })
        saveNotes(Notes);
   Console.log("data added")
    }
    else{
        Console.log(" data exsist")
    }
}
////////////////////////////////////////////////////////
// delete function
const deleteData =(Id) =>{
    const Notes=LoadNotes()
    const checkData=Notes.filter((Note)=>{
        return Note.Id !==Id
    })
    if(Notes.length== 0){
        Console.log (" student id not found")
    }
    else{
        Console.log(checkData)
        saveNotes(checkData)
        Console ('student removed')
    }
}
/////////////////////////////////////////
// read function
const readData = (Id) => {
    const Notes = LoadNotes();
    const note = Notes.find((Note) => {
      return Note.id === Id;
    });
    if (Note) {
      console.log(Note);
    } else {
      console.log("id is not valid");
    }
  };
  //////////////////////////////////////////////////
  //list  function
  const listData = () => {
    const Data = LoadNotes();
    Data.forEach((el) => {
      console.log(el);
    });
  };
////////////////////////////////////////////////////////
///load function
const LoadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync("Notes.json").toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return[]
    }
}
///////////////////////////////////////////////////
//save function
const saveNotes=(Notes)=>{
    const databuffer=json.stringify(Notes)
    fs.writeFileSync("Notes.json",'databuffer')
}

module.exports = {
    addInfoStudent,
    deleteData,
    readData,
    listData,
  };