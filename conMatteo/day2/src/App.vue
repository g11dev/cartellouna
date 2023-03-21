<script>
import FilterList from '@/components/FilterList.vue';

export default {
  components: {
    FilterList
  },
  data() {
    return {
      academians: [
        { name: "Danilo", surname: "Annunziata" },
        { name: "Yousef", surname: "Baioumy" },
        { name: "Giacomo", surname: "Colombo" },
        { name: "Maxim", surname: "Karlov" },
        { name: "Leonardo", surname: "Ricci" },
        { name: "Italo", surname: "Salas" },
        { name: "Angelo", surname: "Vecchio" },
        { name: "Devid", surname: "Zaina" }
      ],
      professors: [
        { name: "Matteo", surname: "Vergani" },
        { name: "Davide", surname: "Pessina" },
        { name: "Marcello", surname: "Larghi" },
      ],
      selectAcademian: null,
      selectedList: null,
      itemList: [],
    }
  },
  computed: {
    computedAcademian() {
      return `${this.selectAcademian?.name} ${this.selectAcademian?.surname}`;
    },
    academianInList(i) {
      return `${this.academian[i].name} ${this.academian[i].surname}`;
    }
  },
  methods: {
    onItemSelected(academian) {
      this.selectAcademian = academian;
    },
    switchList() {
      if (this.selectedList === "academians") {
        this.itemList = this.academians;

      } else if (this.selectedList === "professors") {
        this.itemList = this.professors;

      } else {
        this.itemList = [];
      }
    }
  },
}
</script>


<!-- DENTRO TEMPLATE -> VIEW -->
<template>
  <div>
    <h1>Esercizio 2</h1>
  </div>
  <label>
    <select v-model="selectedList" @change="switchList()">
      <!--  il nostro metodo è inserito in una lambda, dentro cui viene passato $event -->
      <option value="academians">Academians: </option>
      <option value="professors">Professors: </option>
      <option value="other">Other: </option>


    </select>
  </label>

  <!-- <FilterList :items="itemList" @item-selected="onItemSelected" /> -->
  <!-- <FilterList :items="professors" @item-selected="onItemSelected" /> -->
  <!-- Copiando FilterList vengono 3 diversi componenti indipendenti, ognuno che accoglie data (se tolgo return la fz va su tutti e tre)-->
  <FilterList :items="academians" @item-selected="onItemSelected">
    <template>
      <h3 style="color: red;">Academia</h3>
    </template>
  </FilterList>
  <!-- (:) l'abbiamo fatto ieri con l'input -->
  <div v-show="selectAcademian">
    Hai cliccato su {{ computedAcademian }}
  </div>
</template>