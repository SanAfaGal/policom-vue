<template>
    <div class="card w-100">
        <b-img :src="HP_200_G4.picture" alt="HP_200_G4" v-b-tooltip.hover id="tooltip-target"
            style="cursor:pointer" />
        <b-tooltip target="tooltip-target" triggers="hover" placement="right">
            <p><b>Marca:</b> {{HP_200_G4.brand}}</p>
            <p><b>Modelo:</b> {{HP_200_G4.model}}</p>
            <p><b>SO:</b> {{HP_200_G4.OS}}</p>
            <p><b>Procesador:</b> {{HP_200_G4.CPU}}</p>
            <p><b>Memoria:</b> {{HP_200_G4.RAM}}</p>
            <p><b>Almacenamiento:</b> {{HP_200_G4.storage}}</p>

        </b-tooltip>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'
export default {
    props: {
    },
    watch: {
    },
    name: 'PcSpecs',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['HP_200_G4'])
    }
}
</script>