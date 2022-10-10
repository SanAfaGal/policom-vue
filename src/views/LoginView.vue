<template>
    <div>
        <div class="container-fluid ps-md-0">
            <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                    
                                    <div class="text-center mb-3">
                                        <img src="@/assets/img/policom.png" width="300" alt="logo"/>
                                    </div>

                                    <!-- Sign In Form -->
                                    <b-form @submit="onSubmit">
                                        
                                        <b-form-group id="input-group-1" label="Nombre completo:" label-for="input-1"
                                            description="Su nombre debe tener como mínimo 2 letras." class="mb-3">
                                            <b-form-input id="input-1" v-model="newAdmin.fullName"
                                                placeholder="Ingresa nombre" required></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-2" label="Correo eléctronico:" label-for="input-2"
                                            description="Nunca compartiremos tu correo electrónico con nadie más."
                                            class="mb-3">
                                            <b-form-input id="input-2" v-model="newAdmin.email" type="email"
                                                placeholder="Ingresa correo" required></b-form-input>
                                        </b-form-group>

                                        <b-form-group id="input-group-3" label="Contraseña:" label-for="input-3"
                                            description="Su contraseña debe tener 8-20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales o emoji."
                                            class="mb-3">
                                            <b-form-input id="input-3" v-model="newAdmin.password" type="password"
                                                placeholder="Ingresa contraseña" required></b-form-input>
                                        </b-form-group>

                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="rememberPasswordCheck">
                                            <label class="form-check-label" for="rememberPasswordCheck">
                                                Recordar contraseña
                                            </label>
                                        </div>

                                        <div class="d-grid">
                                            <button class="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                                                type="submit">Ingresar</button>
                                        </div>
                                    </b-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'LoginView',
    data() {
        return {
            logo: '/src/assets/img/policom.png',

            newAdmin: {
                fullName: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        ...mapMutations(['changeAdminInfo']),

        onSubmit(event) {
            event.preventDefault();
            this.$router.push('/bookings');
            this.changeAdminInfo(this.newAdmin)
        }
    },
    computed: {
        ...mapState(['admin'])
    },
}
</script>

<style scoped>
.login {
    min-height: 100vh;
}

.bg-image {
    background-image: url('https://www.politecnicojic.edu.co/images/img/poli-desde-el-cielo.jpg');
    background-size: cover;
    background-position: center;
}

.login-heading {
    font-weight: 300;
}

.btn-login {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    padding: 0.75rem 1rem;
}
</style>