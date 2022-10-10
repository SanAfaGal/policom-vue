<template>
    <section class="call-to-action text-center">
        <div class="container position-relative">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <h2 class="mb-4">Ingresa tu correo si te gustaría obtener información actualizada de la
                        disponibilidad de las salas de cómputo</h2>

                    <b-form>
                        <b-form-group id="input-group-2" label="Correo eléctronico:" label-for="input-2" class="mb-3">
                            <b-form-input id="input-2" type="email" placeholder="Ingresa correo" required>
                            </b-form-input>
                        </b-form-group>
                        <div class="d-grid">
                            <button class="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                                type="submit">Enviar</button>
                        </div>
                    </b-form>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {

    name: 'Contact',

}
</script >

<style scoped>
.call-to-action {
    position: relative;
    padding-top: 1rem;
    padding-bottom: 5rem;
}
</style>