Highcharts.chart('container', {
    chart: {
        type: 'honeycomb'
    },

    title: {
        text: 'Tilemap demo'
    },

    subtitle: {
        text: 'Zero point padding'
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        min: 1,
        max: 9,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[3]
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        padding: 0,
        y: -20
    },

    plotOptions: {
        series: {
            pointPadding: 0,
            dataLabels: {
                enabled: true,
                color: '#000000',
                format: '{point.name}'
            },
            borderWidth: 1,
            borderColor: '#a08383',
            keys: ['x', 'y', 'name', 'value']
        }
    },

    series: [{
        data: [
            [0, 1, 'A', 1],
            [1, 3, 'B', 2],
            [2, 2, 'C', 3],
            [3, 0, 'D', 4],
            [4, 2, 'E', 5],
            [0, 2, 'F', 6],
            [1, 4, 'G', 7],
            [4, 4, 'H', 8],
            [3, 2, 'I', 9]
        ]
    }, {
        data: [
            [0, 3, 'J'],
            [1, 0, 'K'],
            [2, 0, 'L'],
            [3, 1, 'M'],
            [4, 1, 'N'],
            [0, 4, 'O'],
            [1, 2, 'P'],
            [2, 3, 'Q'],
            [4, 0, 'R'],
            [3, 3, 'S'],
            [4, 3, 'T']
        ]
    }]
});