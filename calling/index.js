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

const updatebook = {
    author:'Einsteine',
};

update(3, updatebook);

 const updateManyBooks = { 
    title: 'Me myself and I', 
    author: 'Robet schemers', 
    year: 1800
    };
     
updateMany (4,updateManyBooks);
remove(4);