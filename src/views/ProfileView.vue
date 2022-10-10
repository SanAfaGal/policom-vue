<template>
    <div>
        <div class="py-3 container">
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img :src="$store.state.admin.picture" alt="Admin"
                                        class="rounded-circle p-1 bg-success" width="110">
                                    <div class="mt-3">
                                        <h4>{{$store.state.admin.fullName}} </h4>
                                        <p class="text-secondary mb-1">Administrador</p>
                                        <button class="btn btn-success" type="button"
                                            @click="changePicture(), changeAdminPicture(newAdmin.picture)"
                                            v-b-tooltip.hover id="tooltip-target">Cambiar
                                            imagen</button>
                                        <b-tooltip target="tooltip-target" triggers="hover" placement="bottom"><small>Si
                                                al presionar por primer vez no te cambia la imagen, por favor
                                                vuelve a dar click</small></b-tooltip>

                                    </div>
                                </div>
                                <hr class="my-4">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-twitter me-2 icon-inline text-info">
                                                <path
                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                </path>
                                            </svg>Twitter</h6>
                                        <span class="text-secondary">@{{$store.state.admin.fullName}}</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-instagram me-2 icon-inline text-danger">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>Instagram</h6>
                                        <span class="text-secondary">_{{$store.state.admin.fullName}}_</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-facebook me-2 icon-inline text-primary">
                                                <path
                                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                </path>
                                            </svg>Facebook</h6>
                                        <span class="text-secondary">{{admin.fullName}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <h5>Datos personales</h5>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <label class="mb-0">Nombre completo</label>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" v-model="admin.fullName" disabled>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <label class="mb-0">Correo eléctronico</label>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" v-model="admin.email" disabled>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <label class="mb-0">Contraseña</label>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="password" class="form-control" v-model="admin.password"
                                                disabled>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <label class="mb-0">Teléfono</label>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" v-model="admin.phone" disabled>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <h5>Modificar información</h5>
                            <div class="card">
                                <div class="card-body">
                                    <form @submit="onSubmit">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <label class="mb-0">Nombre completo</label>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="Pepito Perez"
                                                    v-model="newAdmin.fullName" required>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <label class="mb-0">Correo eléctronico</label>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="email" class="form-control" placeholder="name@example.com"
                                                    v-model="newAdmin.email" required>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <label class="mb-0">Contraseña</label>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="password" class="form-control" placeholder="@jsdP24-**/"
                                                    v-model="newAdmin.password" required>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <label class="mb-0">Teléfono</label>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" placeholder="+57 312 456 7890"
                                                    v-model="newAdmin.phone" required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3"></div>
                                            <div class="col-sm-9 text-secondary">
                                                <button type="submit" class="btn btn-success px-4 m-2">Guardar
                                                    cambios</button>
                                                <button type="reset" class="btn btn-warning px-4 m-2"
                                                    @click="onReset">Limpiar
                                                    campos</button>
                                            </div>
                                        </div>
                                    </form>
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
    name: 'ProfileView',
    data() {
        return {
            newAdmin: {
                picture: '',
                fullName: '',
                email: '',
                password: '',
                phone: '',
            }
        }
    },
    methods: {
        async changePicture() {
            const res = await fetch('https:/randomuser.me/api');
            const { results } = await res.json();
            this.newAdmin.picture = results[0].picture.large;
        },

        onSubmit(event) {
            event.preventDefault();
            this.changeAdminInfo(this.newAdmin)
        },

        onReset() {
            this.newAdmin.fullName = '';
            this.newAdmin.email = '';
            this.newAdmin.password = '';
            this.newAdmin.phone = '';
        },

        ...mapMutations(['changeAdminPicture', 'changeAdminInfo']),
    },
    computed: {
        ...mapState(['admin'])
    },
}
</script>

<style scoped>
body {
    background: #f7f7ff;
    margin-top: 20px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}

.me-2 {
    margin-right: .5rem !important;
}
</style>