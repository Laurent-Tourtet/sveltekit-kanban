<script lang="ts">
    import { todos } from '$lib/stores/todos';
    import { writable } from 'svelte/store';

    const newTodoText = writable(''); // Créé un champ pour stocker le texte de la tâche

    // Fonction pour ajouter un todo dans le store
    function addTodo() {
        newTodoText.update(text => {
            if (text.trim()) { // Vérifie que le texte n'est pas vide
                todos.update(currentTodos => [
                    ...currentTodos,
                    { id: Date.now(), text, completed: false, status: 'todo' } // Créé un todo par défaut en statut "todo"
                ]);
            }
            return ''; // Réinitialise le champ de texte
        });
    }
</script>

<form on:submit|preventDefault={addTodo} class="flex space-x-4 mb-4">
    <input type="text" bind:value={$newTodoText} placeholder="Ajouter une tâche" class="flex-grow px-4 py-2 rounded border border-gray-300" />
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ajouter</button>
</form>

