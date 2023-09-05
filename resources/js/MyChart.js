import Chart from 'chart.js/auto';

const colors = {
    purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
    }
};

const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 25, 0, 500);
gradient.addColorStop(1, colors.purple.zero);
gradient.addColorStop(1, colors.purple.default);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);


const labels = [
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    26,
    27,
    28,
    29,
    30
];

let labels1 = [];
let labels2 = [];



let rates1 = [];
let rates2 = [];
let start = 1000;

let k = 0;

for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 12; j++) {
        labels1.push((i+20).toString() + '.' + j.toString())
        rates1.push(start);
        if(j === 1){
            rates2.push(start)
        }
        else {
            rates2.push(1)
        }
        start *= 1.0650410899
        console.log(start);

    }
}

let rates = [1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000, 512000, 1024000];
let actualRates = [400, 1000];

const data = {
    labels: labels,
    datasets: [
        {
            fill: true,
            backgroundColor: gradient,
            borderColor: 'rgb(255,155,0)',
            hoverBorderColor: 'rgb(37,255,0)',
            data: rates1,
            lineTension: 0.3,
            radius: 6,
            borderWidth: 3,
            pointRadius: 3,
            pointHoverRadius: 10,
        },
        // {
        //     fill: true,
        //     backgroundColor: gradient,
        //     borderColor: 'rgb(67, 56, 202)',
        //     hoverBorderColor: 'rgb(67, 56, 202)',
        //     data: rates2,
        //     lineTension: 0.3,
        //     radius: 6,
        //     borderWidth: 3,
        //     pointRadius: 3,
        //     pointHoverRadius: 10,
        // },
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        }
    }
};


new Chart(
    document.getElementById('myChart'),
    config
);

// document.getElementById('myChart').widths = 400
// document.getElementById('myChart').height = 400

