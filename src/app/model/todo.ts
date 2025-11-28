export type todo = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

// Single Paragraph Summary for directive(highlight-completed-todo):

// In this flow, when a user interacts with the checkbox for a todo item, it triggers the todoClicked() 
// function in the TodoItem component, which emits the todo object with the updated completed status. 
// This emitted value is received by the parent Todos component through the (todoToggled) event, 
// and the updateTodoItem() function is called, updating the completed status of the corresponding todo item 
// in the list. This update causes the UI to reflect the new completed status, and since the 
// appHighlightCompletedTodo directive is bound to the completed state of each todo item, it automatically 
// reacts to the change by applying the corresponding styles to the <li> element (via ElementRef and input()). 
// The ElementRef is injected into the directive, allowing it to modify the DOM element that the directive is
//  attached to, which in this case is the <li> element of the todo item, applying a line-through effect, changing
//   the background color, and modifying the text color based on the completed status of the todo.