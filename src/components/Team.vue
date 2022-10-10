<template>
    <section class="testimonials text-center">
        <div class="container">
            <h2 class="mb-5">Equipo </h2>
            <div class="row">
                <div class="col-lg">
                    <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img class="img-fluid rounded-circle mb-3" src="@/assets/workers/worker.png"
                            alt="Santiago Afanador"/>
                        <h5>Santiago Afanador</h5>
                        <p class="font-weight-light mb-0">Analista, Diseñador, Programador, Tester</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {

    name: 'Team',

}
</script>

<style scoped>
.testimonials {
    padding-top: 1rem;
    padding-bottom: 5rem;
}

.testimonials .testimonial-item {
    max-width: 18rem;
}

.testimonials .testimonial-item img {
    max-width: 12rem;
    box-shadow: 0px 5px 5px 0px #adb5bd;
}
</style>