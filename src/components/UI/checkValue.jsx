import React from "react";

const checkValue = function () {
    setTimeout(() => {
        // Auto
    let inputAuto = document.getElementById('input__range__auto');
    let SliderAuto = document.getElementById('input__auto');
        // Percent
    let inputPercent = document.getElementById('input__percent');
    let sliderPercent = document.getElementById('input__range__сontribution');
        // Term
    let inputTerm = document.getElementById('input__term');
    let sliderTerm = document.getElementById('input__range__term');

        // Auto
    inputAuto.addEventListener("focusout", () => {
    if(inputAuto.value < 1000000) {
        inputAuto.value = '1000000'
    }
    else if (inputAuto.value > 6000000){
        inputAuto.value = '6000000'
    }
    });

    SliderAuto.addEventListener("focusout", () => {
        if(SliderAuto.value  < 1000000) {
            SliderAuto.value  = '1000000'
        }
        else if (SliderAuto.value  > 6000000){
            SliderAuto.value  = '6000000'
        }
        });



        // Percent

    inputPercent.addEventListener("focusout", () => {
    if(inputPercent.value < 10) {
        inputPercent.value = '10'
        document.getElementById('input__percent').setAttribute('content', '%')
    }
    else if (inputPercent.value > 60){
        inputPercent.value = '60'
        document.getElementById('input__percent').setAttribute('content', '%')
    }
    else {
        document.getElementById('input__percent').setAttribute('content', '%')
    }
    });


    sliderPercent.addEventListener("focusout", () => {
    if(sliderPercent.value < 10) {
        sliderPercent.value = '10'
    }
    else if (sliderPercent.value > 60){
        sliderPercent.value = '60'
    }
    });

    // Term

    inputTerm.addEventListener("focusout", () => {
    if(inputTerm.value < 10) {
        inputTerm.value = '10'
    }
    else if (inputTerm.value > 60){
        inputTerm.value = '60'
    }
    });

    sliderTerm.addEventListener("focusout", () => {
    if(sliderTerm.value < 1) {
        sliderTerm.value = '1'
    }
    else if (sliderTerm.value > 60){
        sliderTerm.value = '60'
    }
    });


}, 100)

    


}

export default checkValue;