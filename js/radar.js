var storedComments = JSON.parse(localStorage.getItem("comments"));
var storedgrades = JSON.parse(localStorage.getItem("grade"));

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Q.1', 'Q.2', 'Q.3', 'Q.4', 'Q.5'],
        datasets: [{
            label: 'grade',
            data: storedgrades,
            backgroundColor: [
                '#dddddd'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});