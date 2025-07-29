<!-- src/views/EditContact.vue -->
<template>
  <div>
    <h2>Edit Contact</h2>
    <ContactForm
      v-if="contact"
      :initialContact="contact"
      @submit="handleUpdateContact"
    />
    <p v-else>Loading contact...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ContactForm from '../components/ContactForm.vue'
import { getContactById, updateContact } from '../utils/localstorage'

export default {
  components: { ContactForm },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const contact = ref(null)

    onMounted(() => {
      contact.value = getContactById(route.params.id)
    })

    function handleUpdateContact(updated) {
      updateContact(updated)
      alert('Contact Updated')
      router.push('/')
    }

    return { contact, handleUpdateContact }
  }
}
</script>
