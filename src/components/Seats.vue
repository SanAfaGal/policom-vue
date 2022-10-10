<template>
    <div>

        <div class="row align-items-center">
            <b-row class="mb-5">
                <b-col>
                    <div>
                        <img :src="stateSeat.free" class="thumbnail" alt="Asiento disponible" />
                        <small>Disponible</small>
                    </div>
                </b-col>
                <b-col>
                    <div>
                        <img :src="stateSeat.booked" class="thumbnail" alt="Asiento disponible" />
                        <small>Reservado</small>
                    </div>
                </b-col>
            </b-row>
            <table class="table-responsive">
                <tbody>
                    <tr>
                        <td v-for="(item, index) of rowOne" :key="index">
                            <template v-if="item.show == 1">
                                <div>
                                    <img v-bind:src="item.state" v-bind:id="item.id" />
                                    <small>{{item.id}}</small>
                                    <b-popover v-bind:target="item.id" triggers="hover" placement="top">
                                        <b-button-group>
                                            <b-button variant="warning" @click="changeStateSeat('B', item)">Reservar
                                            </b-button>

                                            <b-button variant="success" @click="changeStateSeat('F', item)">Liberar
                                            </b-button>
                                        </b-button-group>
                                    </b-popover>
                                </div>
                            </template>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) of rowTwo" :key="index">
                            <template v-if="item.show == 1">
                                <div>
                                    <img v-bind:src="item.state" v-bind:id="item.id" />
                                    <small>{{item.id}}</small>
                                    <b-popover v-bind:target="item.id" triggers="hover" placement="top">
                                        <b-button-group>
                                            <b-button variant="warning" @click="changeStateSeat('B', item)">Reservar
                                            </b-button>

                                            <b-button variant="success" @click="changeStateSeat('F', item)">Liberar
                                            </b-button>
                                        </b-button-group>
                                    </b-popover>
                                </div>
                            </template>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) of rowThree" :key="index">
                            <template v-if="item.show == 1">
                                <div>
                                    <img v-bind:src="item.state" v-bind:id="item.id" />
                                    <small>{{item.id}}</small>
                                    <b-popover v-bind:target="item.id" triggers="hover" placement="top">
                                        <b-button-group>
                                            <b-button variant="warning" @click="changeStateSeat('B', item)">Reservar
                                            </b-button>

                                            <b-button variant="success" @click="changeStateSeat('F', item)">Liberar
                                            </b-button>
                                        </b-button-group>
                                    </b-popover>
                                </div>
                            </template>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) of rowFour" :key="index">
                            <template v-if="item.show == 1">
                                <div>
                                    <img v-bind:src="item.state" v-bind:id="item.id" />
                                    <small>{{item.id}}</small>
                                    <b-popover v-bind:target="item.id" triggers="hover" placement="top">
                                        <b-button-group>
                                            <b-button variant="warning" @click="changeStateSeat('B', item)">Reservar
                                            </b-button>

                                            <b-button variant="success" @click="changeStateSeat('F', item)">Liberar
                                            </b-button>
                                        </b-button-group>
                                    </b-popover>
                                </div>
                            </template>
                        </td>
                    </tr>
                    <tr>
                        <td v-for="(item, index) of rowFive" :key="index">
                            <template v-if="item.show == 1">
                                <div>
                                    <img v-bind:src="item.state" v-bind:id="item.id" />
                                    <small>{{item.id}}</small>
                                    <b-popover v-bind:target="item.id" triggers="hover" placement="top">
                                        <b-button-group>
                                            <b-button variant="warning" @click="changeStateSeat('B', item)">Reservar
                                            </b-button>

                                            <b-button variant="success" @click="changeStateSeat('F', item)">Liberar
                                            </b-button>
                                        </b-button-group>
                                    </b-popover>
                                </div>
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Seats',
    data() {
        return {
            bookingIndex: 0,
        }
    },
    computed: {
        ...mapState(['user', 'selectedRoom', 'bookingsArray', 'stateSeat', 'rowOne', 'rowThree', 'rowTwo', 'rowFour', 'rowFive'])
    },
    methods: {
        /* Verifica que si se hayan ingresado los datos de usuario */
        checkInputs() {
            return this.user.id != '' && this.user.name != '';
        },

        /* 
            Cambia el estado del asiento dependiento el botón clickeado
            @stateFor: Botón seleccionado
            @item: Asiento seleccionado
         */
        changeStateSeat(stateFor, item) {

            switch (stateFor) {
                /* En caso de seleccionar "Reservar" */
                case 'B': {

                    /* Una vez se ingrese el usuario */
                    if (this.checkInputs()) {
                        /* Cambia el estado del asiento seleccionado */
                        this.changeStateSeatForBooked(item);
                        /* Agrega la reserva a un array */
                        this.bookingsArray.push({
                            Fecha: new Date().toLocaleDateString(),
                            Entrada: new Date().toLocaleTimeString(),
                            Salida: null,
                            Sala: this.selectedRoom.number,
                            PC: item.id,
                            Documento: this.user.id,
                            Usuario: this.user.name
                        });
                        /* Aumentar el número de reserva */
                        this.bookingIndex++;
                        /* Borrar datos de usuario */
                        this.resetUserInfo();
                    } else {
                        alert("Registra el usuario")
                    }
                }
                    break;
                /* En caso de seleccionar "Liberar" */
                case 'F': {
                    /* Cambia el estado del asiento seleccionado */
                    this.changeStateSeatForFree(item);
                    /* Establecer la hora de salida */
                    this.bookingsArray.forEach(element => {
                        /* Buscar el item seleccionado en el array a través de su ID */
                        if (element.PC == item.id) {
                            /* Crea un objeto Date y la asigna a la hora de salida */
                            element.Salida = new Date().toLocaleTimeString();
                        }
                    });
                }
                    break;
            }
        },

        ...mapMutations(['changeStateSeatForBooked', 'changeStateSeatForFree', 'resetUserInfo']),
    },
}

</script>

<style scoped>
img {
    cursor: pointer;
    padding: 2px;
    width: 60px;
}

.thumbnail {
    padding-bottom: 2px;
    padding-right: 10pxs;
    width: 30px;
}
</style>