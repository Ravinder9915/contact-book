<!-- src/components/ContactForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.firstName" placeholder="First Name" required />
    <input v-model="form.lastName" placeholder="Last Name" required />
    <input v-model="form.phone" placeholder="Phone Number" required />
    <input v-model="form.email" placeholder="Email" required />
    <input v-model="form.company" placeholder="Company" required />
    <input v-model="form.address" placeholder="Address" required />

    <button type="submit">
      {{ form.id ? 'Update Contact' : 'Add Contact' }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    initialContact: {
      type: Object,
      default: () => ({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        id: null
      })
    }
  },
  data() {
    return {
      form: { ...this.initialContact }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.form })  // emit plain contact object
    }
  }
}
</script>
