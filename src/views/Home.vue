<!-- src/views/Home.vue -->
<template>
  <div>
    <h2>All Contacts</h2>
    <input v-model="search" placeholder="Search by name" />
    <ContactTable
      :contacts="filteredContacts"
      @edit-contact="editContact"
      @delete-contact="deleteContact"
      @view-contact="viewContact"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ContactTable from '../components/ContactTable.vue'
import { getContacts, deleteContact as removeContact } from '../utils/localstorage'

export default {
  components: { ContactTable },
  setup() {
    const router = useRouter()
    const search = ref('')
    const contacts = ref(getContacts())

    const filteredContacts = computed(() => {
  return contacts.value
    .filter(c => {
      const fullName = `${c.firstName} ${c.lastName}`.toLowerCase()
      return fullName.includes(search.value.toLowerCase())
    })
    .sort((a, b) => {
      const aName = a?.lastName || ''
      const bName = b?.lastName || ''
      return aName.localeCompare(bName)
    })
})

    function viewContact(id) {
      router.push(`/contact/${id}`)
    }

    function editContact(contact) {
      router.push(`/edit/${contact.id}`)
    }

    function deleteContact(id) {
      if (confirm('Are you sure you want to delete this contact?')) {
        removeContact(id)
        contacts.value = getContacts()
      }
    }

    return {
      search,
      filteredContacts,
      editContact,
      deleteContact,
      viewContact
    }
  }
}
</script>
