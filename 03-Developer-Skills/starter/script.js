// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const calcTempAmplitude = (temps) => {

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        
        // if(temps[i] !== 'number') continue;

        if(temps[i] > max){
            max = temps[i];
        }

        if(temps[i] < min){
            min = temps[i];
        }
    }

    console.log(max, min);

    const amplitude = max - min;
    console.log(amplitude);
};

calcTempAmplitude(temperatures);


// ------------------

const calcTempAmplitude2 = (t1, t2) => {

    let temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        
        // if(temps[i] !== 'number') continue;

        if(temps[i] > max){
            max = temps[i];
        }

        if(temps[i] < min){
            min = temps[i];
        }
    }

    console.log(max, min);

    const amplitude = max - min;
    console.log(amplitude);
};

calcTempAmplitude2([1, 6, 9], [6, 4, 2]);
