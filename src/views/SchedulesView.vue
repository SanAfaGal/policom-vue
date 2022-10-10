<template>
    <div>
        <b-container class=" py-4 text-center">
            <div class="mb-4">
                <h1>Horarios disponibles</h1>
            </div>
            <b-row>
                <b-col>
                    <RoomList></RoomList>
                </b-col>
            </b-row>

            <b-row>
                <template v-if="$store.state.selectedRoom != ''">
                    <h3 class="mb-4">Sala de cómputo {{$store.state.selectedRoom.number}}</h3>
                    <FreeTime></FreeTime>
                </template>
                
            </b-row>
        </b-container>
    </div>
</template>
  
<script>
import RoomList from '@/components/RoomList.vue'
import FreeTime from '@/components/FreeTime.vue'
export default {
    name: 'SchedulesView',
    components: {
        RoomList, FreeTime
    }
}
</script>