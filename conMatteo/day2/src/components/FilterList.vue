<script>
export default {
    emits: ['item-selected'],       //OUTPUT(@)
    props: ['items'],               //INPUT(:)
    data() {
        return {
            //spostiamo la lista perchè vogliamo far si che ci permetta di centralizzare la fz filtro e usarla su qualsiasi lista

            filterText: '',
        }
    },
    computed: {
        filteredItems() {
            const searchRegexp = new RegExp(this.filterText, 'i');
            return this.items.filter(a =>
                searchRegexp.test(a.name) || searchRegexp.test(a.surname)
            );
        }
    },
    methods: {
        onItemClick(item) {
            this.$emit('item-selected', item);
        }
    },
    watch: {
        items() {
            alert("La lista è cambiata")
        }
        //si puo fare -> persona.indirizzo.civico() {istruzioni} -> le istruzioni avvengono al cambiamento dell'attributo 'civico'
    }
}
</script>

<template>
    <div>
        <slot name="header">
            <h3>My Item List</h3>
        </slot>
        <div>
            <label>
                Filter: <input type="text" v-model="filterText">
            </label>
        </div>
        <ul>
            <li v-for="(item, i) in filteredItems" :key="i" @click="onItemClick(item)">
                <span>
                    {{ `${item.name} ${item.surname}` }}
                </span>
                <!-- item -> rappresenta ciò che abbiamo cliccato -->
            </li>
        </ul>
        <slot name=#footer>

        </slot>
    </div>
</template>