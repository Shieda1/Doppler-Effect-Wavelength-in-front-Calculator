// https://calculator.swiftutors.com/doppler-effect-wavelength-in-front-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const wavelengthinfrontofamovingsourceRadio = document.getElementById('wavelengthinfrontofamovingsourceRadio');
const wavevelocityRadio = document.getElementById('wavevelocityRadio');
const sourcevelocityRadio = document.getElementById('sourcevelocityRadio');
const sourcefrequencyRadio = document.getElementById('sourcefrequencyRadio');

let wavelengthinfrontofamovingsource;
let wavevelocity = v1;
let sourcevelocity = v2;
let sourcefrequency = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

wavelengthinfrontofamovingsourceRadio.addEventListener('click', function() {
  variable1.textContent = 'Wave velocity (m/s)';
  variable2.textContent = 'Source velocity (m/s)';
  variable3.textContent = 'Source frequency (hz)';
  wavevelocity = v1;
  sourcevelocity = v2;
  sourcefrequency = v3;
  result.textContent = '';
});

wavevelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Wavelength in front of a moving source (m)';
  variable2.textContent = 'Source velocity (m/s)';
  variable3.textContent = 'Source frequency (hz)';
  wavelengthinfrontofamovingsource = v1;
  sourcevelocity = v2;
  sourcefrequency = v3;
  result.textContent = '';
});

sourcevelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Wavelength in front of a moving source (m)';
  variable2.textContent = 'Wave velocity (m/s)';
  variable3.textContent = 'Source frequency (hz)';
  wavelengthinfrontofamovingsource = v1;
  wavevelocity = v2;
  sourcefrequency = v3;
  result.textContent = '';
});

sourcefrequencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Wavelength in front of a moving source (m)';
  variable2.textContent = 'Wave velocity (m/s)';
  variable3.textContent = 'Source velocity (m/s)';
  wavelengthinfrontofamovingsource = v1;
  wavevelocity = v2;
  sourcevelocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(wavelengthinfrontofamovingsourceRadio.checked)
    result.textContent = `Wavelength in front of a moving source = ${computeWavelengthinfrontofamovingsource().toFixed(2)} m`;

  else if(wavevelocityRadio.checked)
    result.textContent = `Wave velocity = ${computeWavevelocity().toFixed(2)} m/s`;

  else if(sourcevelocityRadio.checked)
    result.textContent = `Source velocity = ${computeSourcevelocity().toFixed(2)} m/s`;

  else if(sourcefrequencyRadio.checked)
    result.textContent = `Source frequency = ${computeSourcefrequency().toFixed(2)} hz`;
})

// calculation

function computeWavelengthinfrontofamovingsource() {
  return (Number(wavevelocity.value) - Number(sourcevelocity.value)) / Number(sourcefrequency.value);
}

function computeWavevelocity() {
  return (Number(wavelengthinfrontofamovingsource.value) * Number(sourcefrequency.value)) + Number(sourcevelocity.value);
}

function computeSourcevelocity() {
  return Number(wavevelocity.value) - (Number(wavelengthinfrontofamovingsource.value) * Number(sourcefrequency.value));
}

function computeSourcefrequency() {
  return (Number(wavevelocity.value) - Number(sourcevelocity.value)) / Number(wavelengthinfrontofamovingsource.value);
}