<template>
    <div>
      <!-- NavBar -->
      <b-navbar toggleable="md" type="dark" variant="success">
        <b-container>
  
          <b-navbar-brand :to="{name: 'bookings'}">
            <img src="@/assets/img/logo.png" width="30" class="d-inline-block align-top" alt="logo">
          </b-navbar-brand>
  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
          <b-collapse id="nav-collapse" is-nav>
  
            <b-navbar-nav>
              <b-nav-item :to="{name: 'bookings'}">Reservas</b-nav-item>
              <b-nav-item :to="{name: 'history'}">Historial</b-nav-item>
              <b-nav-item :to="{name: 'specs'}">Especificaciones</b-nav-item>
              <b-nav-item :to="{name: 'schedules'}">Horarios</b-nav-item>
              <b-nav-item :to="{name: 'about'}">Nosotros</b-nav-item>
              <b-nav-item :to="{name: 'help'}">Ayuda</b-nav-item>
            </b-navbar-nav>
  
          </b-collapse>
  
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Admin" right>
              <b-dropdown-item :to="{name: 'profile'}">Perfil</b-dropdown-item>
              <b-dropdown-item :to="{name: 'login'}">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
  
        </b-container>
      </b-navbar>
  
    </div>
  </template>
  
  <script>
  
  export default {
    name: "NavBar",
  }
  </script>
  
  
  