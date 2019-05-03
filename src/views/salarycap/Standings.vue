<template>
  <div>
    <StandingsTable />
  </div>
</template>

<script>
// @ is an alias to /src
import StandingsTable from '@/components/salarycap/StandingsTable.vue'

export default {
  name: 'standings',
  components: {
    StandingsTable
  }
}
</script>
