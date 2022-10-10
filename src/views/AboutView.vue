<template>
  <div>
    <Us></Us>
    <b-row>
      <b-col>
        <Team></Team>
      </b-col>
      <b-col>
        <Contact></Contact>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Us from '@/components/Us.vue'
import Team from '../components/Team.vue'
import Contact from '../components/Contact.vue'
export default {
  name: 'AboutView',
  components: {
    Us,
    Team,
    Contact
  }
}
</script>
