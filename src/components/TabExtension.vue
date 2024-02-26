<template>
    <div id="TabExtension">
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
                                name="anio"
                                label="Año"
                                label-class="control-label"
                                placeholder="Seleccione"
                                :options="optionsTipoAnio"
                                v-model="anio"
                        />
                    </div>
                </div>
                <FormulateInput
                        type="submit"
                        :disabled="isLoading"
                        :label="isLoading ? 'Cargando...' : 'BUSCAR'"
                        class="formulate-input"
                        v-b-modal.modal-md-extension
                />

            </FormulateForm>

            <!-- <div class="accordion" role="tablist" id="accordion1">
              <span v-html="resIndice"></span>
            </div> -->
            <b-modal id="modal-md-extension" size="md" title="Extension de tesis" hide-footer>
                <div class="accordion" role="tablist" id="accordion-extension">
                    <b-card v-for="(item, index) in resExtension2" v-bind:key="index" no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle="`collapse-extension-${ index }`" variant="info">{{ item.title }}</b-button>
                        </b-card-header>
                        <b-collapse :id="`collapse-extension-${ index }`" accordion="my-accordion-extension" role="tabpanel">
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
    name: "TabExtension",
    data() {
        return {
            resExtension: null,
            resExtension2: [{'title':'','paper_index':''}],
            patron: null,
            optionsTipoAnio: [
                { value: "null", label: "-" },
                { value: "2007", label: "2007" },
                { value: "2008", label: "2008" },
                { value: "2009", label: "2009" },
                { value: "2010", label: "2010" },
                { value: "2011", label: "2011" },
                { value: "2012", label: "2012" },
                { value: "2013", label: "2013" },
                { value: "2014", label: "2014" },
                { value: "2015", label: "2015" },
                { value: "2016", label: "2016" },
                { value: "2017", label: "2017" },
                { value: "2018", label: "2018" },
                { value: "2019", label: "2019" },
                { value: "2020", label: "2020" },
                { value: "2021", label: "2021" },

            ],
        };
    },
    methods: {
        async submitHandler() {
            let loader = this.$loading.show({ isFullPage: true, canCancel: false });
            try {
                const formData = new FormData();
                formData.append("patron", this.patron);
                formData.append("anio", this.anio);
                let res = await axios.post(
                    "http://www.redilegra.com/backend/api/Extension",
                    //"http://127.0.0.1:8000/api/Concordancia",
                    formData
                );
                this.resExtension = res.data.html_response;
                this.resExtension2 = res.data.context2;
                this.makeToast(
                    "Mostrar Extension realizado exitosamente.",
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