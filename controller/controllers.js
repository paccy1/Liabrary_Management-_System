const {booksDatabase}=require("../src/db");
//Function which adds a new book to the database

const add=(newbook)=>{
    newbook.id=booksDatabase.length+1;
    booksDatabase.push(newbook);

    console.log("\nNew book added\n");
    
    console.log(booksDatabase);

}
//function to display all books

const displayAll=()=>{
  console.log("\n All books \n");
  console.log(booksDatabase);
 
};

// Updating an book element

const update=(id,key,value)=>{
    var exists=booksDatabase.find(ele=>ele.id===id);
    if (!exists) {
        console.log("book not found\n");
    }
    else{
       
        exists[key]=value;
        
        console.log("book info updated\n");
        console.log(exists);

    }
}

//updating many bookd elements
const updateMany=(id,books)=>{
     var exists=booksDatabase.find(ele=>ele.id===id);
     if (!exists) {
        console.log("book not found\n");
        
     } else {
        for(key in books){
            exists[key]=books[key];  
        }
        console.log("book info updated\n");
        console.log(exists);
        
     }


};

 //removing a book elements

const remove=(id)=>{
  var exists=booksDatabase.find(ele=>ele.id===id);
  if (!exists) {
    console.log("book not found\n");

    
  } else {
    var remaining=[];
    remaining=booksDatabase.filter(ele=>ele.id!==id);
    console.log("book info removed\n");
    console.log(remaining);
    
  }  
}


module.exports={
   add,
   displayAll,
   update,
   updateMany,
   remove
}