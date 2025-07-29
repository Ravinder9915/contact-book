// src/utils/localstorage.js

const STORAGE_KEY = 'contacts'

export function getContacts() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

export function getContactById(id) {
  const contacts = getContacts()
  return contacts.find(contact => contact.id === id)
}

export function addContact(contact) {
  const contacts = getContacts()
  contact.id = Date.now().toString()
  contacts.push(contact)
  saveContacts(contacts)
  return contact
}

export function updateContact(updatedContact) {
  let contacts = getContacts()
  contacts = contacts.map(contact =>
    contact.id === updatedContact.id ? updatedContact : contact
  )
  saveContacts(contacts)
}

export function deleteContact(id) {
  const contacts = getContacts().filter(contact => contact.id !== id)
  saveContacts(contacts)
}
