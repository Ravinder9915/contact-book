<template>
  <div>
    <h2>Add Contact</h2>
    <!-- 👇 `.once` ensures submit fires only once -->
    <ContactForm @submit.once="handleAddContact" />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import { addContact } from '../utils/localstorage'
import { useRouter } from 'vue-router'

export default {
  components: { ContactForm },
  setup() {
    const router = useRouter()

    function handleAddContact(contact) {
      // Ignore if not a valid contact object
      if (!contact || typeof contact !== 'object' || !contact.firstName) return

      addContact(contact)
      alert('New Contact Added')
      router.push('/')
    }

    return { handleAddContact }
  }
}
</script>
