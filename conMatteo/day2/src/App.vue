<script>
import FilterList from '@/components/FilterList.vue';
import axios from "axios";

export default {
  components: {
    FilterList
  },
  data() {
    return {
      academians: [],
      professors: [],
      selectAcademian: null,
      selectedList: null,
      itemList: [],
    }
  },
  computed: {
    computedAcademian() {
      return `${this.selectAcademian?.name} ${this.selectAcademian?.surname}`;
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
    },
    async fetchAcademians() {
      try {
        const resp = await axios.get('http://localhost:3000/academians');
        //pesco dal host:3000 in cui risiede il file json
        this.academians = resp.data;
        //se faccio console.log(resp) -> printo la resp
        // resp -> parola chiave che identifica risposta totale dal GET
        // body della risposta che otteniamo dall'API (già PArsato -> non serve fare ".then" per parsarlo)
      } catch (err) {
        console.error(err);
        if (err.response.status === 404) {
          alert("Not Found!!!")
        }
        //normalmente si usa "err" al posto di log
        //estraggo la proprietà "data" da resp
      }
    },
    async fetchProfessors() {
      try {
        const resp = await axios.get('http://localhost:3000/professors');
        this.professors = resp.data;
      } catch (err) {
        console.error(err);
        if (err.response.status === 404) {
          alert("Not Found!!!")
        }

      }
    }

  },
  created()
  //è una funzione scatenata dall'evento
  //se è async lui, allora le await si aspettano pezzo per pezzo
  //spezzettando le fz al suo interno e rendendo solo loro prese singolarmente async, loro sono autonome e non le stiamo aspettando
  {
    this.fetchAcademians();
    this.fetchProfessors();

  }
}
</script>


<!-- DENTRO TEMPLATE -> VUE (la "vista") -->
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

  <FilterList :items="itemList" @item-selected="onItemSelected">
    <!-- <FilterList :items="professors" @item-selected="onItemSelected" /> -->
    <!-- Copiando FilterList vengono 3 diversi componenti indipendenti, ognuno che accoglie data (se tolgo return la fz va su tutti e tre)-->
    <!-- <FilterList :items="academians" @item-selected="onItemSelected"> -->
    <template v-slot:#header>
      <!-- v-slot=# -->
      <h3 style="color: red;">Academia</h3>
    </template>
    <template v-slot:#default>
      <!-- uno slot vuoto lo capisce ma solo uno solo -->
      <h1 style="color:green; background-color:black"> FOOTER</h1>
    </template>
  </FilterList>
  <!-- (:) l'abbiamo fatto ieri con l'input -->
  <div v-show="selectAcademian">
    Hai cliccato su {{ computedAcademian }}
  </div>
</template>


