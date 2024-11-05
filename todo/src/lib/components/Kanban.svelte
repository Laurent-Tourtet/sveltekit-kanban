<script lang="ts">
    import { todos, updateTodoStatus, deleteTodo } from '$lib/stores/todos';
</script>

<!-- Ligne de debugging -->
<p>{$todos.length > 0 ? "Taches en cours" : "Aucunes taches"}</p>

<div class="flex space-x-4">
    {#each ['todo', 'in-progress', 'done'] as status}
        <div class="flex flex-col w-1/3">
            <h2 class="text-xl font-bold mb-2">
                {status === 'todo' ? 'À faire' : status === 'in-progress' ? 'En cours' : 'Terminé'}
            </h2>
            <ul>
                {#each $todos.filter(todo => todo.status === status) as { id, text, completed }}
                    <li class="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-2">
                        <span class={completed ? 'line-through' : ''}>{text}</span>
                        <div class="flex space-x-2 mt-2">
                            {#if status === 'todo'}
                                <button on:click={() => updateTodoStatus(id, 'in-progress')} class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Démarrer</button>
                            {:else if status === 'in-progress'}
                                <button on:click={() => updateTodoStatus(id, 'done')} class="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Terminer</button>
                            {:else}
                                <button on:click={() => updateTodoStatus(id, 'in-progress')} class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Réouvrir</button>
                            {/if}
                            <button on:click={() => deleteTodo(id)} class="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">Supprimer</button>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    {/each}
</div>
