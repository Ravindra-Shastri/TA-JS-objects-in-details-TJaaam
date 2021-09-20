class bookList{
    constructor(){

    }
 add([Book]){
 return (list of books);
 }
 getCurrentBook(index){
    return  index;
 }
 getNextBook(){
    return (index + 1);
 }
 getPrevBook(){
 return  (index - 1);
 }
 changeCurrentBook(index){
return index;
 }
}

class book{
    constructor(){
        book.Title = Title;
        book.Category = Category;
        book.Author = Author;
        book.isRead (`false`);
        book.finishedDate = date;
    }
    markBookAsRead(){}
    isRead(){}
    finishedDate(){
        Date.now()
    }
}



