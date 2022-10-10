<template>
    <div>

        <b-container class=" py-4 text-center">
            <div class="mb-4">
                <h1>Especificaciones</h1>
            </div>
            <b-row>
                <b-col>
                    <RoomList></RoomList>
                </b-col>
            </b-row>

            <template v-if="$store.state.selectedRoom != ''">
                <b-row>
                    <h3 class="mb-4">Sala de cómputo {{$store.state.selectedRoom.number}}</h3>
                    <b-row>
                        <b-col>
                            <PcSpecs></PcSpecs>
                        </b-col>
                        <b-col>
                            <Software></Software>
                        </b-col>
                    </b-row>
                </b-row>
            </template>

        </b-container>
    </div>
</template>
  
<script>
import RoomList from '@/components/RoomList.vue'
import PcSpecs from '@/components/PcSpecs.vue';
import Software from '@/components/Software.vue';
export default {
    name: 'SpecsView',
    components: {
        RoomList,
        PcSpecs,
        Software
    }
}
</script>