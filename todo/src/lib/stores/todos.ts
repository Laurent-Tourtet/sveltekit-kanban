import { writable } from 'svelte/store';

// Définition du type Todo
interface Todo {
    id: number;
    text: string;
    completed: boolean;
    status: 'todo' | 'in-progress' | 'done';
}

// Initialise le store todos avec un tableau de type Todo[]
export const todos = writable<Todo[]>([]);

// Fonction pour ajouter un nouvel élément todo
export const createTodo = (text: string): void => {
    const newTodo: Todo = { id: Date.now(), text, completed: false, status: 'todo' };
    todos.update((currentTodos) => [...currentTodos, newTodo]);
};

// Fonction pour changer le statut d'un todo
export const updateTodoStatus = (id: number, newStatus: 'todo' | 'in-progress' | 'done'): void => {
    todos.update((currentTodos) =>
        currentTodos.map((todo) =>
            todo.id === id ? { ...todo, status: newStatus } : todo
        )
    );
};

// Fonction pour marquer un todo comme terminé
export const toggleTodo = (id: number): void => {
    todos.update((currentTodos) =>
        currentTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
};

// Fonction pour supprimer un todo
export const deleteTodo = (id: number): void => {
    todos.update((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== id)
    );
};
