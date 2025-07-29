<!-- src/components/ContactTable.vue -->
<template>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Company</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="contacts.length === 0">
        <td colspan="7">No contacts found.</td>
      </tr>
      <tr v-for="contact in contacts" :key="contact.id">
        <!-- First name becomes clickable to trigger view-contact -->
        <td @click="$emit('view-contact', contact.id)" style="cursor: pointer; color: #007bff;">
          {{ contact.firstName }}
        </td>
        <td>{{ contact.lastName }}</td>
        <td>{{ contact.phone }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.company }}</td>
        <td>{{ contact.address }}</td>
        <td>
          <button @click="$emit('edit-contact', contact)">Edit</button>
          <button @click="$emit('delete-contact', contact.id)" class="delete-btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ContactTable',
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.delete-btn {
  background-color: #dc3545;
}
.delete-btn:hover {
  background-color: #a71d2a;
}
</style>