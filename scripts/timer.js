
const Scene = require('Scene');

export const Diagnostics = require('Diagnostics');

const Patches = require('Patches');


Promise.all([

    Scene.root.findFirst('TimerText'),

]).then(function (results) {

    const timerCountText = results[0];

    Patches.outputs.getScalar('Timer').then(timerObj => {

        timerObj.monitor().subscribe(function (timerEvent) {

            timerCountText.text = timerEvent.newValue.toFixed(2).toString();

        });

    });


});

