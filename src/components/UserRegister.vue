<template>
    <div>
        <b-form @submit.stop.prevent>
            <b-row class="mb-3">
                <b-col cols="5">
                    <b-form-input v-model="newUser.id" :state="validation" id="feedback-user" placeholder="ID">
                    </b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        El ID debe contener entre 5-12 carácteres
                    </b-form-invalid-feedback>
                </b-col>

                <b-col cols="7">
                    <b-form-input id="input-live" v-model="newUser.name" :state="nameState"
                        placeholder="Nombre completo" trim>
                    </b-form-input>

                    <!-- This will only be shown if the preceding input has an invalid state -->
                    <b-form-invalid-feedback id="input-live-feedback">
                        Ingresa al menos 3 letras
                    </b-form-invalid-feedback>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="mb-3">
                    <b-button pill size="sm" variant="success" @click="addUserInfo(newUser)">Registrar
                    </b-button>
                </b-col>
                <b-col class="mb-3">
                    <b-button pill size="sm" variant="warning" @click="resetInputs(), resetUserInfo()">Limpiar campos
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {

    name: 'UserRegister',
    methods: {
    },
    computed: {
        nameState() {
            return this.newUser.name.length > 2 ? true : false
        },
        validation() {
            return this.newUser.id.length > 4 && this.newUser.id.length < 13
        },
    },
    data() {
        return {
            newUser: {
                id: '',
                name: '',
            },
        }
    },
    methods: {
        resetInputs() {
            this.newUser.id = '';
            this.newUser.name = '';
        },
        ...mapMutations(['addUserInfo', 'resetUserInfo']),
    }
}
</script>