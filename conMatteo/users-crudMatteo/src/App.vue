<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: ['Id', 'Name', 'Surname', 'Email', 'Role', 'Enabled', 'Actions'],
      roles: [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'Reader', value: 'READER' },
        { label: 'Editor', value: 'EDITOR' },
      ],
      user: this.getNewUser(),
      users: []
    }
  },
  methods: {
    createUser(user) {
      return axios.post(`http://localhost:3000/users`, user);
    },
    async deleteUser(id) {
      return axios.delete(`http://localhost:3000/users/${id}`);
    },
    getUsers() {
      return axios.get(`http://localhost:3000/users`);
    },
    async fetchUsers() {
      try {
        const { data } = await this.getUsers();
        this.users = data;
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    },
    getNewUser() {
      return {
        name: '',
        surname: '',
        email: '',
        role: '',
        isEnabled: false
      }
    },
    async onAddUser() {
      try {
        await this.createUser(this.user);
        this.fetchUsers();
        this.resetForm();
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    },
    async onDeleteUser(user) {
      try {
        await this.deleteUser(user.id);
        this.fetchUsers();
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    },
    resetForm() {
      this.user = this.getNewUser();
    }
  },
  computed: {
    noUsers() {
      return !Array.isArray(this.users) || this.users.length === 0;
    }
  },
  created() {
    this.fetchUsers();
  }
}
</script>

<template>
  <div class="container">
    <h1>Manage Users</h1>
    <div>
      <form @submit.prevent="onAddUser">
        <div>
          <label>
            Name:
            <input type="text" v-model="user.name">
          </label>
        </div>
        <div>
          <label>
            Surname:
            <input type="text" v-model="user.surname">
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" v-model="user.email">
          </label>
        </div>
        <div>
          <label>
            Role:
            <select v-model="user.role">
              <option v-for="role in roles" :value="role.value">{{ role.label }}</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Enabled:
            <input type="checkbox" v-model="user.isEnabled">
          </label>
        </div>
        <button>Add</button>
      </form>
    </div>
    <div>
      <h2>Current Users</h2>
      <table>
        <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="noUsers" style="color:blue;">
            <td class="noUser" :colspan="headers.length">
              There is currently no user
            </td>
          </tr>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.isEnabled }}</td>
            <td>
              <button @click="onDeleteUser(user)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
}

.noUser {
  text-align: center;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
</style>