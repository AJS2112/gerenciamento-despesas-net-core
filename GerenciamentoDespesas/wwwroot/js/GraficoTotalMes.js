$(".escolhaMes").on('change', function () {
    var mesId = $(".escolhaMes").val();

    $.ajax({
        url: "Despesas/GastosTotalMes",
        method: "POST",
        data: { mesId: mesId },
        success: function (dados) {
            $("canvas#GraficoTotalMes").remove();
            $("div.GraficoTotalMes").append('<canvas id="GraficoTotalMes" style="height=400px;width=400px;"></canvas>');

            var ctx = document.getElementById('GraficoTotalMes').getContext('2d');

            var grafico = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Restante', 'Total gasto'],
                    datasets: [{
                        label: "Total gasto",
                        backgroundColor: ["#27ae60", "#c0392b"],
                        data: [(dados.salario - dados.valorTotalGasto), dados.valorTotalGasto]
                    }]
                },
                options: {
                    responsive: false,
                    title: {
                        display: true,
                        text: "Total gasto no mês"
                    }
                }
            });
        }
    });
});