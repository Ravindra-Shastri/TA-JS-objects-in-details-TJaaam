class book{
    constructor(title,Category,author){
        this.title = title;
        this.category = Category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;   
    }    
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now();
    }  
}

class bookList{
    constructor(){
        this.books = [];
        this.currentIndexBook = 0;
    }
 add(book = []){
    this.book = this.book.concat(books);
    return this.books;
 }
 getCurrentBook(){
    return this.books[this.currentIndexBook];
 }
 getNextBook(){
    this.currentIndexBook = this.currentIndexBook + 1;
    return this.books[this.currentIndexBook + 1];
 }
 getPrevBook(){
    this.currentIndexBook = this.currentIndexBook - 1;
    return this.books[this.currentIndexBook - 1];
 }
 changeCurrentBook(index){
    return this.currentIndexBook;
 }
}


let book1 = new book("WEB DEVELOPMENT", "web development","Andy Vickler");
let book2 = new book("HTML & CSS" , "web development", "David DuRocher");
let book3 = new book("Node Cookbook","web development","Bethany Griggs");
let book4 = new book("Java9","web development","Paul J.Deitel");
let book5 = new book("Linux","web development","Mark Sobell");

let library = new BookList();

library.add([book1,book2,book3,book4,book5]);
