<template>
    <div id="Transcripcion">
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
                                v-if="seen"
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
                                v-if="seen"
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
                                @change="change_trigger"
                        />
                    </div>

                </div>
                <div class="form-group">
                    <div class="form-group">
                        <FormulateInput
                            type="select"
                            name="mm_select"
                            label="Macromovida"
                            label-class="control-label"
                            placeholder="Seleccione"
                            :options="optionsTipoMM"
                            v-model="MM"
                            @change="change_trigger2"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group">
                        <FormulateInput
                            type="select"
                            name="mm_select"
                            label="Pasos"
                            label-class="control-label"
                            placeholder="Seleccione"
                            :options="optionsPasos"
                            :select-size="4"
                            v-model="Pasos"
                            v-if="seen"
                        />
                    </div>
                </div>
                <FormulateInput
                        type="submit"
                        :disabled="isLoading"
                        :label="isLoading ? 'Cargando...' : 'BUSCAR'"
                        class="formulate-input"
                        v-b-modal.modal-xl-transcripcion
                />

            </FormulateForm>

            <!-- <div class="accordion" role="tablist" id="accordion1">
              <span v-html="resIndice"></span>
            </div> -->
            <b-modal id="modal-xl-transcripcion" size="xl" :title="funciones" hide-footer>
                <div class="accordion" role="tablist" id="accordionTranscripcion">
                    <b-card v-for="(item, index) in resIndice2" v-bind:key="index" no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-button block v-b-toggle="`collapse-${ index }-Transcripcion`" variant="info">{{ item.title }}</b-button>
                        </b-card-header>
                        <b-collapse :id="`collapse-${ index }-Transcripcion`" accordion="my-accordion" role="tabpanel">
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
    name: "TabTranscripcion",
    data() {
        return {
            seen: false,
            resIndice: null,
            resIndice2: [{'title':'','paper_index':''}],
            patron: null,
            anio: 0,
            MM: null,
            Pasos: null,
            funciones: null,
            optionsFunciones:[
                {value: 'Patrones de propósitos', label:"Patrones de propósitos"},
                {value: 'Similitud de propósitos', label:"Similitud de propósitos"},
                {value: 'Banco de frases', label:"Banco de frases"},
                //{value: 'Revisión de objetivo', label:"Revisión de objetivo"},

            ],
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
            optionsTipoMM: [
                { value: "null", label: "-" },

            ],
            optionsPasos: [
                { value: "null", label: "-" },

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
                formData.append("funciones", this.funciones);
                formData.append("macromove", this.MM)
                formData.append("pasos", this.Pasos)
                let res = await axios.post(
                    "http://www.redilegra.com/backend/api/Transcripcion",
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
        change_trigger: function () {

            if (this.funciones === 'Patrones de propósitos' || this.funciones === 'Similitud de propósitos') {
                this.seen = true;

                this.optionsTipoMM = [
                    {value: "null", label: "-"},
                    {value: "introduccion", label: "Introducción"},
                    {value: "invprev", label: "Investigaciones Previas"},
                    {value: "metodologia", label: "Metodología"},
                    {value: "resultados", label: "Resultados"},
                    {value: "conclusion", label: "Conclusión"}
                ];
            }

            else if (this.funciones === 'Banco de frases') {
                this.seen = false;

                this.optionsTipoMM = [
                    {value: "null", label: "-"},
                    {value: "agradecimientos", label: "Agradecimientos"},
                    {value: "sobre_los_autores", label: "Sobre los autores"},
                    {value: "discusion", label: "Discusión"},
                    {value: "resultados", label: "Resultados"},
                    {value: "mat_y_metodos", label: "Materiales y Métodos"},
                    {value: "introduccion", label: "Introducción"},
                    {value: "abstract_y_conclusiones", label: "Abstract y Conclusiones"},

                ];
            }
        },
        change_trigger2() {
            if (this.funciones === 'Patrones de propósitos' || this.funciones === 'Similitud de propósitos') {

                if (this.MM === 'introduccion') {

                    this.optionsPasos = [
                        {value: "null", label: "-"},
                        {value: "MM1M1P1", label: "Generalización del tópico con especificidad creciente"},
                        {value: "MM1M2P1", label: "Indicación del vacío"},
                        {value: "MM1M3P1", label: "Anuncio del objetivo de la investigación"},
                        {value: "MM1M3P2", label: "Clarificación de algunas definiciones"},
                    ];
                }

                else if (this.MM === 'invprev') {
                    this.optionsPasos = [
                        {value: "null", label: "-"},
                        {value: "MM2M1P1", label: "Presentación de la estructura y/o contenidos a tratar"},
                        {
                            value: "MM2M2P1",
                            label: "Presentación del estado actual del conocimiento y prácticas no investigadas"
                        },
                        {value: "MM2M2P2", label: "Afirmación de la centralidad del tema"},

                    ];
                }

                else if (this.MM === 'metodologia') {
                    this.optionsPasos = [
                        {value: "null", label: "-"},
                        {value: "MM3M1P1", label: "Presentación de la estructura o contenidos del marco metodológico"},
                        {value: "MM3M2P1", label: "Presentación de objetivos"},
                        {value: "MM3M3P1", label: "Descripción de participantes y/ o materiales"},
                        {value: "MM3M3P2", label: "Ubicación y características contextuales de la muestra"},
                        {value: "MM3M4P1", label: "Detalle de los procedimientos de recolección de datos"},
                    ];
                }

                else if (this.MM === 'resultados') {
                    this.optionsPasos = [
                        {value: "null", label: "-"},
                        {value: "MM4M1P1", label: "Presentación de la estructura y/o contenidos a tratar"},
                        {
                            value: "MM4M2P1",
                            label: "Presentación de los resultados por medio de recursos verbales y no verbales"
                        },
                        {value: "MM4M3P1", label: "Interpretación de datos obtenidos"},
                        {value: "MM4M3P2", label: "Comparación de resultados con la literatura"},
                        {value: "MM4M3P3", label: "Evaluación de resultados y hallazgos"},
                    ];
                }

                else if (this.MM === 'conclusion') {
                    this.optionsPasos = [
                        {value: "null", label: "-"},
                        {value: "MM5M1P1", label: "Generalización del tópico con especificidad creciente"},
                        {value: "MM5M1P2", label: "Indicación del vacío"},
                        {value: "MM5M2P1", label: "Anuncio del objetivo de la investigación"},
                        {value: "MM5M2P2", label: "Clarificación de algunas definiciones"},
                    ];
                }
            }
            else {
                this.optionsPasos = [];
            }
            if (this.funciones === 'Banco de frases') {
                this.seen = false;
            }
        },
    },
};
</script>