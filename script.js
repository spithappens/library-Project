
let myLibrary = [
    {title: "Oliver's Story", 
    author: "Erich Segal", 
    read: "yes"},
    {title: "The Fourth Protocol", 
    author: "Frederick F.",                 //placeholder values to populate something in the table.
    read: "no"},
    {title: "The Russia House", 
    author: "John Le Carre", 
    read: "no"}
  ];

  class Book {
    constructor(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
      this.info = function () {
        if (this.read == "no") {
          let result = this.title + " " + "by " + this.author + ", " + "not read yet.";
          return result;
        } else {
          let result = this.title + " " + "by " + this.author + ", " + "read complete.";
          return result;
        };
      };
    }
  };



class Library{

  titleSubmission = document.getElementById('title');
  authorSubmission = document.getElementById('author');
  readValueSubmission = document.getElementById('readstatus');
  displayLib = document.getElementById("display-Lib-Table");
  tableTopCreator = `<tbody><tr id="table-header"><th>Title</th><th>Author</th><th>Read</th><th>Delete</th></tr>`;
  tableEnd = `</tbody>`;
  butDel="";  //empty string placeholder for delete function;

    constructor(arrayOfObjects){
      this.mainLibrary = arrayOfObjects;
    }


    addBookToLibrary(bookTitle, bookAuthor, readStatus){
      let booktoAdd = new Book(bookTitle, bookAuthor, readStatus);
        this.mainLibrary.push(booktoAdd); 
      this.libraryTableCreator();
    };

  //   clear(){
  //     this.bookTitle = undefined;
  //     this.bookAuthor = undefined;
  //     this.readStatus = undefined;
  // };
  
    submit(){
      let formSubmit = document.getElementById("libraryAdd");   //constant declarations for dynamic elements.
      formSubmit.addEventListener('submit', (e) => {
      e.preventDefault();
      let bookTitle;
      let bookAuthor;
      let readStatus;
      bookTitle =this.titleSubmission['value'];
      bookAuthor = this.authorSubmission['value'];
      readStatus = this.readValueSubmission['value'];
      this.addBookToLibrary(bookTitle, bookAuthor, readStatus);
      bookTitle = undefined;
      bookAuthor=undefined;
      readStatus = undefined;
      return;
      //butDel = document.querySelectorAll('button');
      })
    };

    libTabClear(){
      this.displayLib.innerHTML = "";
    };

    readStatusChanger(x){
      if(myLibrary[x]['read']=='no'){
        myLibrary[x]['read'] = "reading"
      }else if(myLibrary[x]['read']=='yes'){
        myLibrary[x]['read']="no";
      }else{
        myLibrary[x]['read'] = "yes"
      }
    this.libraryTableCreator();
    }

    changeTextFun(){
      var looking = document.querySelectorAll(".changeText");    //function to activate event listeners on Change Text in the read column.
      looking.forEach((change)=>{                                 //function is called in libraryTableCreator.
        change.addEventListener('click', (e)=>{
          let testing = change.getAttribute('value');
          this.readStatusChanger(testing);
        })
      })
      };

    libraryTableCreator(){
        this.libTabClear();
        let copymyLib = myLibrary.slice();
        let begOfTable = '<tr class="table-cells"><td>'
        let tableBr = '</td><td>'
        let buttonStart = '<button type = "button"'        //this builds the table by concatanating a bunch of strings that get inserted
        let buttonEnd = '>Delete</button></td></tr>';       // into the displayLib element selected above.
        let changeTextStart = '<p data-change="change"'
        let changeTextEnd = ' class = "changeText">Change</p>'
        let tableHTML="";
        for (let i = 0; i<copymyLib.length; i++){
            tableHTML += begOfTable+copymyLib[i]['title']+
            tableBr+copymyLib[i]['author']+                             //could not get a creator function working how I wanted so I looped
            tableBr+copymyLib[i]['read']+changeTextStart+" value =" +i+changeTextEnd+//through the array to assign each change text and buttons a value equal to i;
            tableBr+buttonStart +                                       
            "value=" + i + buttonEnd;                                   
        }
        this.displayLib.innerHTML = this.tableTopCreator + tableHTML + this.tableEnd;
        this.butDel = document.querySelectorAll('button');
        this.butDel.forEach((button)=>{
        button.addEventListener('click', (e)=>{                         //not sure why but needed to add the event listener inside of the libraryTablecreator function.
        let butVal = button['value'];                                   //when added outside, the buttons would seemingly freeze or not work semi-randomly.  when added inside the function that 
        this.libraryTabDeletor(butVal);                                      //creates the table,  buttons seem to always work. 
        });
        })
       this.changeTextFun();                  //need to call this function to activate event listeners on change text yesno in table.
      };
      
      libraryTabDeletor(x){
         this.mainLibrary.splice(x,1);
        this.libraryTableCreator();
      };

      start(){
        this.submit();
        this.libraryTableCreator();
      }
};



let library = new Library(myLibrary);
library.start();

// let library = new Library();

// library.start();





















// let myLibrary = [
//   {title: "Oliver's Story", 
//   author: "Erich Segal", 
//   read: "yes"},
//   {title: "The Fourth Protocol", 
//   author: "Frederick F.",                 //placeholder values to populate something in the table.
//   read: "no"},
//   {title: "The Russia House", 
//   author: "John Le Carre", 
//   read: "no"}
// ];

// const formSubmit = document.getElementById("libraryAdd");   //constant declarations for dynamic elements.
// const titleSubmission = document.getElementById('title');
// const authorSubmission = document.getElementById('author');
// const readValueSubmission = document.getElementById('readstatus');
// const displayLib = document.getElementById('display-Lib-Table');
// let butDel="";  //empty string placeholder for delete function;
// const displayLibDisp = displayLib.innerHTML;
// let tableTopCreator = `<tbody><tr id="table-header"><th>Title</th><th>Author</th><th>Read</th><th>Delete</th></tr>`;
// let tableEnd = `</tbody>`
// let bookTitle;
// let bookAuthor;
// let readStatus;


// class book {
//   constructor(title, author, read) {
//     this.title = title;
//     this.author = author;
//     this.read = read;
//     this.info = function () {
//       if (this.read == "no") {
//         let result = this.title + " " + "by " + this.author + ", " + "not read yet.";
//         return result;
//       } else {
//         let result = this.title + " " + "by " + this.author + ", " + "read complete.";
//         return result;
//       };
//     };


//   }
// };;

// function addBookToLibrary(){
//   let booktoAdd = new book(bookTitle, bookAuthor, readStatus);
//     myLibrary.push(booktoAdd); 
//     libTabClear();
//     libraryTableCreator();
// };


// function clear(){
//     bookTitle = undefined;
//     bookAuthor = undefined;
//     readStatus = undefined;
// };

// formSubmit.addEventListener('submit', (e) => {
//     e.preventDefault()
//     bookTitle =titleSubmission['value'];
//     bookAuthor = authorSubmission['value'];
//     readStatus = readValueSubmission['value'];
//     libTabClear();
//     addBookToLibrary();
//     clear();
// });

// function libTabClear(){
//   displayLib.innerHTML = "";
// };

// function readStatusChanger(x){
//     if(myLibrary[x]['read']=='no'){
//       myLibrary[x]['read'] = "reading"
//     }else if(myLibrary[x]['read']=='yes'){
//       myLibrary[x]['read']="no";
//     }else{
//       myLibrary[x]['read'] = "yes"
//     }
//   libraryTableCreator();
// }

// function changeTextFun(){
//   var looking = document.querySelectorAll(".changeText");    //function to activate event listeners on Change Text in the read column.
//   looking.forEach((change)=>{                                 //function is called in libraryTableCreator.
//     change.addEventListener('click', (e)=>{
//       let testing = change.getAttribute('value');
//       readStatusChanger(testing);
//     })
//   })
//   };

// function libraryTableCreator(){
//   libTabClear();
//   let copymyLib = myLibrary.slice();
//   let begOfTable = '<tr class="table-cells"><td>'
//   let tableBr = '</td><td>'
//   let buttonStart = '<button type = "button"'        //this builds the table by concatanating a bunch of strings that get inserted
//   let buttonEnd = '>Delete</button></td></tr>';       // into the displayLib element selected above.
//   let changeTextStart = '<p data-change="change"'
//   let changeTextEnd = ' class = "changeText">Change</p>'
//   let tableHTML="";
//   for (let i = 0; i<copymyLib.length; i++){
//       tableHTML += begOfTable+copymyLib[i]['title']+
//       tableBr+copymyLib[i]['author']+                             //could not get a creator function working how I wanted so I looped
//       tableBr+copymyLib[i]['read']+changeTextStart+" value =" +i+changeTextEnd+//through the array to assign each change text and buttons a value equal to i;
//       tableBr+buttonStart +                                       
//       "value=" + i + buttonEnd;                                   
//   }
//   displayLib.innerHTML = tableTopCreator + tableHTML + tableEnd;
//   butDel = document.querySelectorAll('button')
//   butDel.forEach((button)=>{
//   button.addEventListener('click', (e)=>{                         //not sure why but needed to add the event listener inside of the libraryTablecreator function.
//   let butVal = button['value'];                                   //when added outside, the buttons would seemingly freeze or not work semi-randomly.  when added inside the function that 
//   libraryTabDeletor(butVal);                                      //creates the table,  buttons seem to always work. 
//   });
// });
//  changeTextFun();                  //need to call this function to activate event listeners on change text yesno in table.
// };

// function libraryTabDeletor(x){
//    myLibrary.splice(x,1);
//   libraryTableCreator();
// };

// changeTextFun();
// libraryTableCreator();    



// // "Wall of Books" by benuski is licensed with CC BY-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/2.0/ 