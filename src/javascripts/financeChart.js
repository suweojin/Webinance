export function renderLineChart(id,object) {
    const labels = object.labels;
    const valuesA = object.valuesA;
    const valuesB = object.valuesB;
    
    return new Chart(id, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {   
                    label: 'Expenses',
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255, 0, 0, 1)',
                    data: valuesA
                },
                {
                    label: 'Income',
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(0, 0, 255, 1)',
                    data: valuesB
                }
            ]
        },
        options: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontSize: 12
                }
            },
            title: {
                display: true,
                text: "Profit and Loss",
                fontSize: 14
            }
        }
    })
}

export function renderDoughnutChart(id,object) {
    const labels = object.labels;
    const values = object.values;
    const colors = object.colors;

    return new Chart(id, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: colors,
                data: values
            }]
        },
        options: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontSize: 12
                }
            },
            title: {
                display: true,
                text: "Categories",
                fontSize: 14
            }
        }
    })
}