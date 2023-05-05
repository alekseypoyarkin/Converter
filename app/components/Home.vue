<template>
    <Page>
        <ActionBar>
            <Label text="Converter" />
        </ActionBar>
        <GridLayout class="back_buttons"
            columns="*, *"
            rows="*, *, *">
            <button class="button-home"
                row="0"
                col="0"
                @tap="goToWeight"
                text="Вес-масса" 
                backgroundImage="~/assets/weight.png"/>
            <button class="button-home"
                row="0"
                col="1"
                @tap="goToTemperature"
                text="Температура" 
                backgroundImage="~/assets/temp.png"/>
            <button class="button-home"
                row="1"
                col="0"
                @tap="goToArea"
                text="Площадь" 
                backgroundImage="~/assets/area.png"/>
            <button class="button-home"
                row="1"
                col="1"
                @tap="goToTime"
                text="Время" 
                backgroundImage="~/assets/time.png"/>
            <button class="button-home"
                row="2"
                col="0"
                @tap="goToFinance"
                text="Валюта" 
                backgroundImage="~/assets/finance.png"/>
            <button class="button-home"
                row="2"
                col="1"
                @tap="goToLength"
                text="Длина" 
                backgroundImage="~/assets/length.png"/>
        </GridLayout>
    </Page>
</template> 

<script>
import Weight from './Weight.vue'
import Temperature from './Temperature.vue'
import Area from './Area.vue'
import Time from './Time.vue'
import Finance from './Finance.vue'
import Length from './Length.vue'

export default {
    data() {
        return {};
    },
    methods: {
        goToWeight() {
            this.$navigateTo(Weight);
        },

        goToTemperature() {
            this.$navigateTo(Temperature);
        },

        goToArea() {
            this.$navigateTo(Area);
        },

        goToTime() {
            this.$navigateTo(Time);
        },

        goToFinance() {
            this.$navigateTo(Finance);
        },

        goToLength() {
            this.$navigateTo(Length);
        },
    },
}
</script>

<style scoped lang="scss">@import '@nativescript/theme/scss/variables/blue';

// Custom styles
.fas {
    @include colorize($color: accent);
}

.info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
}</style>
