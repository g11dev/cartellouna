<script>

import axios from "axios";

export default {
  data() {
    return {
      user: {
        id:null,
        name: '',
        surname: '',
        email: '',
        role: '',
        enabled: false,
      },
      listaUser: [],
      name: '',
      surname: '',
      email: '',
      role: '',
      enabled: false,
    }
  },
  methods: {
    add(name, surname, email, role, enabled) {
      this.user.name = name;
      this.user.surname = surname;
      this.user.email = email;
      this.user.role = role;
      this.user.enabled = enabled;
      this.listaUser.push(this.user);
    },
    postino(){
      axios.post(`http://localhost:3000/listaUser/`, this.listaUser)
    },
    cancellaUser(id) {
      axios.delete(`http://localhost:3000/listaUser/${id}`);
    }
  },
  computed: {

  }


}

</script>

<template>
  <div>
    <h1>Manage Users</h1>
  </div>
  <form>

    <label>Name:<input type="text" v-model="name">
    </label>

    <label>Surname:<input type="text" v-model="surname">
    </label>

    <label>Email:<input type="text" v-model="email">
    </label>

    <label>Role:<select v-model="role">
        <option value="Admin">Admin</option>
        <option value="Reader">Reader</option>
        <option value="Editor">Editor</option>
      </select>
    </label>

    <label>Enabled: <input type="checkbox" v-model="enabled" />
    </label>

    <label> <input type="button" value="add"  @click="postino()" />
    </label>
  </form>

  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Surame</th>
      <th>Email</th>
      <th>Role</th>
      <th>Enabled</th>
      <th>Actions</th>
    </tr>
    <tr  v-for="(utente,i) in listaUser" :key="i" >
      <td> {{ utente.id }}</td>
      <td > {{ utente.name }} </td>
      <td > {{ utente.surname }} </td>
      <td > {{ utente.email }} </td>
      <td > {{ utente.role }} </td>
      <td > {{ utente.enabled }} </td>
      <td >  <input type="button" value="delete" @click="cancellaUser(user.id)">  </td>
    </tr>

  </table>
</template>