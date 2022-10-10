<template>
    <div>
        <b-container class=" py-4 text-center">
            <div class="mb-4">
                <h1>Reserva de computadores</h1>
            </div>
            <b-row>
                <b-col>
                    <RoomList></RoomList>
                </b-col>
            </b-row>

            <b-row>
                <template v-if="$store.state.selectedRoom != ''">
                    <UserRegister class="mb-3"></UserRegister>
                    <h3 class="mb-4">Sala de cómputo {{$store.state.selectedRoom.number}}</h3>
                    <Seats class="mb-3"></Seats>
                </template>
            </b-row>
        </b-container>
    </div>
</template>
  
<script>
import RoomList from '@/components/RoomList.vue'
import Seats from '@/components/Seats.vue';
import UserRegister from '../components/UserRegister.vue';

export default {

    name: 'BookingView',
    components: {
        RoomList,
        Seats,
        UserRegister,
    },

}
</script>
  