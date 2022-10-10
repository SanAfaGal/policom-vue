<template>
    <div>
        <b-container class="mb-3">
            <b-card title="Salas">
                <b-list-group horizontal>
                    <b-list-group-item v-for="(room, index) of roomsArray" button :disabled="room.state" :key="index"
                        @click="changeSelectedRoom(index)">{{room.number}}
                    </b-list-group-item>
                </b-list-group>
            </b-card>
        </b-container>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    watch: {
    },

    name: 'RoomList',
    computed: {
        ...mapState(['roomsArray'])

    },
    methods: {
        ...mapMutations(['changeSelectedRoom']),
    }
}
</script>