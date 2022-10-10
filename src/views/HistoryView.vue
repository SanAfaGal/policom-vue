<template>
    <div>
        <b-container class=" py-4 ">
            <div class="text-center mb-3">
                <h1>Historial de reservas</h1>
            </div>
            <b-row>
                <b-col cols="8" md="4" lg="2">
                    <label class="mb-2"><strong><small>Opciones de tabla</small></strong></label>
                    <b-form-group class="mb-4">
                        <b-form-checkbox v-model="striped" plain>Rayado</b-form-checkbox>
                        <b-form-checkbox v-model="bordered" plain>Bordeado</b-form-checkbox>
                        <b-form-checkbox v-model="borderless" plain>Transfronterizo</b-form-checkbox>
                        <b-form-checkbox v-model="outlined" plain>Delineado</b-form-checkbox>
                        <b-form-checkbox v-model="hover" plain>Flotante</b-form-checkbox>
                        <b-form-checkbox v-model="fixed" plain>Fijado</b-form-checkbox>
                        <b-form-checkbox v-model="footClone" plain>Clon de pie</b-form-checkbox>
                        <b-form-checkbox v-model="noCollapse" plain>Sin fronteras</b-form-checkbox>
                    </b-form-group>

                    <label class="mb-2"><strong><small>Color de tabla</small></strong></label>
                    <b-form-group class="mb-4">
                        <b-form-select class="form-control" v-model="tableVariant" :options="tableVariants">
                            <template #first>
                                <option value="">-- Ninguno --</option>
                            </template>
                        </b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-table :striped="striped" :bordered="bordered" :borderless="borderless" :outlined="outlined"
                        :hover="hover" :fixed="fixed" :foot-clone="footClone" :no-border-collapse="noCollapse"
                        :items="bookingsArray" :table-variant="tableVariant"></b-table>
                </b-col>
            </b-row>

        </b-container>

    </div>
</template>
  
<script>
import { mapState } from 'vuex'
export default {

    name: 'HistoryView',
    computed: {
        ...mapState(['bookingsArray'])
    },
    data() {
        return {

            tableVariants: [
                'primary',
                'secondary',
                'info',
                'danger',
                'warning',
                'success',
                'light',
                'dark'
            ],
            striped: false,
            bordered: false,
            borderless: false,
            outlined: false,
            hover: false,
            fixed: false,
            footClone: false,
            tableVariant: '',
            noCollapse: false
        }
    }

}
</script>

<style scoped>

</style>>