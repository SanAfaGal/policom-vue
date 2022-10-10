<template>
  <div>
    <b-container class=" py-4 text-center">
      <div class="mb-4">
        <h1>Ayudas y Documentación</h1>
      </div>

      <b-row>
        <b-col>
          <b-card border-variant="success"
            header="¿Qué hacer en caso de qué el usuario no se encuentre en la base de datos?"
            header-bg-variant="success" header-text-variant="white">
            <b-card-text>
              Únicamente un administrador podrá registrar a los usuarios que no se encuentran en el sistema a través del
              número de documento al momento de hacer la reserva.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card border-variant="warning" header="¿Cómo cambiar la información del administrador?"
            header-bg-variant="warning" header-text-variant="white">
            <b-card-text>
              Deberás dirigirte al botón que se encuentra al costado derecho <strong>Admin</strong>, una vez desplegado
              el menú,
              seleccionas la opción <strong>Perfil</strong> y allí podrás modificar la información personal.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-card border-variant="warning"
            header="¿Cómo puedo conocer los programas instalados en una sala en específico?" header-bg-variant="warning"
            header-text-variant="white">
            <b-card-text>
              En la sección de <strong>Especificaciones</strong> posicionada en la barra de navegación, podrás
              seleccionar una sala de cómputo y el sistema te indicará el software instalado en dicha habitación.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <br>
          <b-card border-variant="success" header="¿Cómo puedo conocer el horario de una sala en especifico?"
            header-bg-variant="success" header-text-variant="white">
            <b-card-text>
              Solo basta con dar click en la sección de <strong>Horarios</strong> y seleccionar la sala que te solicite
              el usuario, en caso de que requiera un programa en específico.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <br>
          <b-card border-variant="dark" header="¿Dónde puedo encontrar el registro de las reservas?"
            header-bg-variant="dark" header-text-variant="white">
            <b-card-text>
              En la sección de <strong>Historial</strong> podrás ver la <i>fecha, hora de entrada, hora de salida, sala,
                número del computador, y el documento y nombre del usuario que solicitó la reserva</i>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <br>
          <b-card border-variant="dark" header="Recuerda" header-bg-variant="light" header-text-variant="dark">
            <b-card-text>
              Para poder hacer una reserva de un computador, primero se debe registrar al usuario, dando un click en el
              botón <strong>Registrar</strong> después de haber llenado el formulario con la información de la persona
              que realiza la solicitud. De este modo, ya podrás pasar a seleccionar un equipo de cómputo.
            </b-card-text>
          </b-card>
        </b-col>

      </b-row>





    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelpView',

}
</script>