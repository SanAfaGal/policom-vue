import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    admin: {
      picture: 'https://randomuser.me/api/portraits/lego/1.jpg',
      fullName: '',
      email: '',
      password: '',
      phone: '',
    },

    user: {
      id: '',
      name: '',
    },

    bookingsArray: [],

    selectedRoom: '',

    roomsArray: [
      { number: '201', state: true },
      { number: '202', state: true },
      { number: '203', state: true },
      { number: '204', state: true },
      { number: '205', state: true },
      { number: '206', state: false },
      { number: '207', state: true },
      { number: '208', state: true },
      { number: '209', state: true },
      { number: '211', state: true },
    ],

    stateSeat: {
      free: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png',
      booked: 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png',
    },

    rowOne: [
      { id: 'A0', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A1', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A2', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A3', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A4', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A5', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A6', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A7', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A8', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'A9', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
    ],

    rowTwo: [
      { id: 'B0', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'B1', state: '', show: '0' },
      { id: 'B2', state: '', show: '0' },
      { id: 'B3', state: '', show: '0' },
      { id: 'B4', state: '', show: '0' },
      { id: 'B5', state: '', show: '0' },
      { id: 'B6', state: '', show: '0' },
      { id: 'B7', state: '', show: '0' },
      { id: 'B8', state: '', show: '0' },
      { id: 'B9', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
    ],

    rowThree: [
      { id: 'C0', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C1', state: '', show: '0' },
      { id: 'C2', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C3', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C4', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C5', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C6', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C7', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'C8', state: '', show: '0' },
      { id: 'C9', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
    ],

    rowFour: [
      { id: 'D0', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D1', state: '', show: '0' },
      { id: 'D2', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D3', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D4', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D5', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D6', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D7', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'D8', state: '', show: '0' },
      { id: 'D9', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
    ],

    rowFive: [
      { id: 'E0', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
      { id: 'E1', state: '', show: '0' },
      { id: 'E2', state: '', show: '0' },
      { id: 'E3', state: '', show: '0' },
      { id: 'E4', state: '', show: '0' },
      { id: 'E5', state: '', show: '0' },
      { id: 'E6', state: '', show: '0' },
      { id: 'E7', state: '', show: '0' },
      { id: 'E8', state: '', show: '0' },
      { id: 'E9', state: 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png', show: '1' },
    ],

    software206: [
      { name: '7-Zip', page: 'https://www.7-zip.org/', img: 'https://cdn-icons-png.flaticon.com/512/3621/3621533.png' },
      { name: 'Adobe Acrobat Reader', page: 'https://www.adobe.com/la/acrobat/pdf-reader.html', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968377.png' },
      { name: 'Google Chrome', page: 'https://www.google.com/intl/es-419/chrome/', img: 'https://cdn-icons-png.flaticon.com/512/888/888846.png' },
      { name: 'Java(TM) 6', page: 'https://www.java.com/es/', img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
      { name: 'Microsoft Edge', page: 'https://www.microsoft.com/es-es/edge', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968890.png' },
      { name: 'Microsoft Office', page: 'https://www.office.com/', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png' },
      { name: 'Mozilla Firefox', page: 'https://www.mozilla.org/es/firefox/products/', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968827.png' },
      { name: 'Rstudio', page: 'https://www.rstudio.com/', img: 'https://cdn-icons-png.flaticon.com/512/2103/2103665.png' },
      { name: 'VLC Media Player', page: 'https://www.videolan.org/index.es.html', img: 'https://cdn-icons-png.flaticon.com/512/732/732256.png' },
    ],

    HP_200_G4: {
      picture: 'https://pcsystemcolombia.com/wp-content/uploads/2020/11/Todo-En-Uno-HP-200-G4-22-Core-i3.png',
      brand: 'HP',
      model: '200 G4',
      OS: 'Windows 10 Pro',
      CPU: 'i3-10110U',
      storage: 'SATA 1 TB',
      RAM: '8 GB RAM',
    },


  },
  getters: {
  },
  mutations: {
    changeAdminInfo(state, newAdminInfo) {
      state.admin.fullName = newAdminInfo.fullName;
      state.admin.email = newAdminInfo.email;
      state.admin.password = newAdminInfo.password;
      state.admin.phone = newAdminInfo.phone;
    },
    changeAdminPicture(state, newAdminPicture) {
      state.admin.picture = newAdminPicture;
    },
    changeSelectedRoom(state, index) {
      state.selectedRoom = state.roomsArray[index];
    },

    addUserInfo(state, newUser) {
      state.user.id = newUser.id;
      state.user.name = newUser.name;
    },

    resetUserInfo(state) {
      state.user.id = '';
      state.user.name = '';
    },

    changeStateSeatForBooked(state, item) {
      switch (item.id[0]) {
        case 'A': state.rowOne[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png';
          break;
        case 'B': state.rowTwo[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png';
          break;
        case 'C': state.rowThree[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png';
          break;
        case 'D': state.rowFour[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png';
          break;
        case 'E': state.rowFive[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292060.png';
          break;
      }
    },

    changeStateSeatForFree(state, item) {
      switch (item.id[0]) {
        case 'A': state.rowOne[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png';
          break;
        case 'B': state.rowTwo[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png';
          break;
        case 'C': state.rowThree[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png';
          break;
        case 'D': state.rowFour[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png';
          break;
        case 'E': state.rowFive[item.id[1]].state = 'https://cdn-icons-png.flaticon.com/512/2292/2292112.png';
          break;
      }
    },

  },
  actions: {
  },
  modules: {
  }
})
