<template>
    <Page xmlns="http://schemas.nativescript.org/tns.xsd"
        loaded="pageLoaded"
        xmlns:dd="nativescript-drop-down">
        <ActionBar>
            <NavigationButton text="Go back"
                android.systemIcon="ic_menu_back"
                @tap="goToHome" />
            <Label text="Конвертер температуры" />
        </ActionBar>
        <FlexboxLayout flexDirection="column"
            alignContent="center"
            justifyContent="center"
            horizontalAlignment="stretch">
            <FlexboxLayout flexDirection="row">
                <Dropdown ref="firstDD"
                    class="drop-down"
                    :items="measure"
                    @selectedIndexChanged="secondChange"
                    :selectedIndex=firstSelectedMeasure
                    width="50%" />
                <TextField v-model="textFieldValue"
                    keyboardType="number"
                    maxLength="15"
                    class="textbox"
                    hint="Введите значение..."
                    width="50%" />
            </FlexboxLayout>
            <button
                @tap="switchTypes"
                text="Поменять местами значения" />
            <FlexboxLayout flexDirection="row">
                <Dropdown ref="secondDD"
                    class="drop-down"
                    :items="measure"
                    @selectedIndexChanged="firstChange"
                    :selectedIndex=secondSelectedMeasure
                    width="50%" />
                <label :text="result"
                    maxLength="15"
                    width="50%" 
                    class="textbox"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
import Home from './Home.vue'
export default {
    data() {
        return {
            textFieldValue: "0",
            result: "0",
            bufer: "",
            measure: ["Цельсий (°C)", "Фаренгейт (℉)", "Кельвин (K)"],
            firstSelectedMeasure: 0,
            secondSelectedMeasure: 0,
            m: [
                {
                    name: "Цельсий (°C)",
                    value: 1
                },
                {
                    name: "Фаренгейт (℉)",
                    value: 1
                },
                {
                    name: "Кельвин (K)",
                    value: 1
                }
            ]
        };
    },
    watch: {
        textFieldValue: function () {
            this.calculate();
        },
        firstSelectedMeasure: function () {
            this.calculate();
        },
        secondSelectedMeasure: function () {
            this.calculate();
        },
    },
    methods: {
        goToHome() {
            this.$navigateTo(Home);
        },
        switchTypes() {
            this.bufer = this.firstSelectedMeasure;
            this.firstSelectedMeasure = this.secondSelectedMeasure;
            this.secondSelectedMeasure = this.bufer;

            this.bufer = this.textFieldValue;
            this.textFieldValue = this.result;
            this.result = this.bufer;
        },
        firstChange() {
            this.firstSelectedMeasure = this.$refs.firstDD.nativeView.selectedIndex;
            this.secondSelectedMeasure = this.$refs.secondDD.nativeView.selectedIndex;
        },
        secondChange() {
            this.firstSelectedMeasure = this.$refs.firstDD.nativeView.selectedIndex;
            this.secondSelectedMeasure = this.$refs.secondDD.nativeView.selectedIndex;
        },
        calculate() {
            switch(this.firstSelectedMeasure){
                case 0:
                    switch(this.secondSelectedMeasure){
                        case 0:
                            this.result = Number(this.textFieldValue);
                            break;
                        case 1:
                            this.result = (9/5) * Number(this.textFieldValue) + 32;
                            break;
                        case 2:
                            this.result = Number(this.textFieldValue) + 273.15;
                            break;
                    }
                    break;
                case 1:
                    switch(this.secondSelectedMeasure){
                            case 0:
                                this.result = (5/9) * (Number(this.textFieldValue) - 32);
                                break;
                            case 1:
                                this.result = Number(this.textFieldValue);
                                break;
                            case 2:
                                this.result = (5/9) * (Number(this.textFieldValue) - 32) + 273.15;
                                break;
                    }
                    break;
                case 2:
                    switch(this.secondSelectedMeasure){
                        case 0:
                            this.result = Number(this.textFieldValue) - 273.15;
                            break;
                        case 1:
                            this.result = (9/5) * (Number(this.textFieldValue) - 273.15) + 32;
                            break;
                        case 2:
                            this.result = Number(this.textFieldValue);
                            break;
                    }
                    break;   
            }
            // this.result = this.textFieldValue * (this.m[this.firstSelectedMeasure].value / this.m[this.secondSelectedMeasure].value);
        },
    },
}


</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
    @include colorize($color: accent);
}

.info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
}

.drop-down {
    margin: 10;
    padding: 2 2;
    font-size: 18;
}
.textbox {
    font-size: 18;
}
</style>
