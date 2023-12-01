const { add,
    displayAll,
    update,
    updateMany,
    remove} = require("../controller/controllers.js");


 const addbooks = {
 title: 'Once up on time',
 author: 'Albert mulla',
 year: 2005
};
    
add(addbooks);
displayAll();

update(3, "author" , "Einstein");

 const updateManyBooks = { 
    title: 'Me myself and I', 
    author: 'Robet schemers', 
    year: 1800
    };
     
updateMany (4,updateManyBooks);
remove(4);