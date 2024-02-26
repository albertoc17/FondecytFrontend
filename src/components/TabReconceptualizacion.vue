<template>
    <div id="Reconceptualizacion">
        <header class="cont-tit">
            <h2 class="tit">Transcripción</h2>
        </header>
        <div class="wrapper">
            <FormulateForm class="filterbar" @submit="submitHandler" #default="{ isLoading }">
                <div class="form-group">
                    <div class="form-group">
                        <FormulateInput
                                type="text"
                                name="patron"
                                label="Patrón"
                                label-class="control-label"
                                placeholder="Patrón"
                                v-model="patron"
                        />
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-group">
                        <FormulateInput
                                type="select"
                                name="funcs"
                                label="Función"
                                label-class="control-label"
                                placeholder="Seleccione"
                                :options="optionsFunciones"
                                v-model="funciones"

                        />
                    </div>
                </div>
                <FormulateInput
                        type="submit"
                        :disabled="isLoading"
                        :label="isLoading ? 'Cargando...' : 'BUSCAR'"
                        class="formulate-input"
                        v-b-modal.modal-xl-reconceptualizacion
                />

            </FormulateForm>

            <!-- <div class="accordion" role="tablist" id="accordion1">
              <span v-html="resIndice"></span>
            </div> -->
            <b-modal id="modal-xl-reconceptualizacion" size="xl" :title="funciones" hide-footer>
                <div class="accordion" role="tablist" id="accordionReconceptualizacion">
                    <b-card v-for="(item, index) in resIndice2" v-bind:key="index" no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle="`collapse-${ index }-Reconcept`" variant="info">{{ item.title }}</b-button>
                        </b-card-header>
                        <b-collapse :id="`collapse-${ index }-Reconcept`" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <b-card-text v-html="item.paper_index"></b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </b-modal>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "TabReconceptualizacion",
    data() {
        return {
            resIndice: null,
            resIndice2: [{'title':'test','paper_index':''}],
            patron: null,
            funciones: null,
            optionsFunciones:[
                {value: 'Revisión de objetivo', label:"Revisión de objetivo"},

            ],
        };
    },
    methods: {
        async submitHandler() {
            let loader = this.$loading.show({ isFullPage: true, canCancel: false });
            try {
                const formData = new FormData();
                formData.append("patron", this.patron);
                formData.append("funciones", this.funciones);
                let res = await axios.post(
                    "http://www.redilegra.com/backend/api/Reconceptualizacion",
                    //"http://127.0.0.1:8000/api/Concordancia",
                    formData
                );
                this.resIndice = res.data.html_response;
                this.resIndice2 = res.data.context2;

                this.makeToast(
                    "Mostrar Indice realizado exitosamente.",
                    "success"
                );
            } catch (err) {
                console.warn(err);
                this.makeToast(err, "danger");
            }
            loader.hide();
        },
        makeToast(message, variant) {
            let title =
                variant == "success" ? "Operación exitosa" : "Operación fallida";
            this.$bvToast.toast(message, {
                title: title,
                variant: variant,
                solid: false,
                autoHideDelay: 2000,
            });
        },

    },
};
</script>