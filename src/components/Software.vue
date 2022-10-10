<template>
    <div>

        <b-link v-for="(item, index) of software206" :key="index" :href="item.page" target="_blank">
            <b-img :src="item.img" :alt="item.name" width="70" height="70" rounded class="m-5" v-b-tooltip.hover
                :title="item.name" style="cursor:pointer"></b-img>
        </b-link>

    </div>
</template>
  
<script>
import { mapState } from 'vuex'
export default {
    props: {
    },
    name: 'Software',
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['software206'])
    }
}
</script>