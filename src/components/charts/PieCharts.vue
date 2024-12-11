<script>
// import ApexCharts from 'apexcharts';
export default {
    data() {
      return {
        options: Object,
        series: []
      }
    },
    methods: {
        onCreatedChart() {
  //           var breakup = {
  //   color: "#adb5bd",
  //   series: [38, 40, 25],
  //   labels: ["2022", "2021", "2020"],
  //   chart: {
  //     width: 180,
  //     type: "donut",
  //     fontFamily: "Plus Jakarta Sans', sans-serif",
  //     foreColor: "#adb0bb",
  //   },
  //   plotOptions: {
  //     pie: {
  //       startAngle: 0,
  //       endAngle: 360,
  //       donut: {
  //         size: '75%',
  //       },
  //     },
  //   },
  //   stroke: {
  //     show: false,
  //   },

  //   dataLabels: {
  //     enabled: false,
  //   },

  //   legend: {
  //     show: false,
  //   },
  //   colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       options: {
  //         chart: {
  //           width: 150,
  //         },
  //       },
  //     },
  //   ],
  //   tooltip: {
  //     theme: "dark",
  //     fillSeriesColor: false,
  //   },
  // };

            // const pieChart = document.querySelector("#breakup");
            // if (pieChart !== null) {
            //     var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
            //     chart.render();
            // }
          this.options = {
            chart: {
              width: 90,
              type: "donut",
              fontFamily: "Plus Jakarta Sans', sans-serif",
              foreColor: "#adb0bb",
            },
            labels: ["2022", "2021", "2020"],
            colors: ["#001A6E", "#009990", "#E1FFBB"],
            plotOptions: {
              pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                  size: '75%',
                },
              },
            },
            stroke: {
              show: false,
            },

            dataLabels: {
              enabled: false,
            },

            legend: {
              show: false,
            },
            responsive: [
              {
                breakpoint: 991,
                options: {
                  chart: {
                    width: 150,
                  },
                },
              },
            ],
            tooltip: {
              theme: "dark",
              fillSeriesColor: false,
            },
          };
          this.series = [38, 40, 25];
        }
    },
    created() {
        
      this.onCreatedChart();
    }
}
</script>

<template>
    <div class="col-lg-12">
        <!-- Yearly Breakup -->
        <div class="card overflow-hidden">
            <div class="card-body p-4">
                <h5 class="card-title mb-9 fw-semibold">Yearly Breakup</h5>
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h4 class="fw-semibold mb-3">$36,358</h4>
                            <div class="d-flex align-items-center mb-3">
                                <span
                                    class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                    <i class="ti ti-arrow-up-left text-success"></i>
                                </span>
                                <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                                <p class="fs-3 mb-0">last year</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="me-4">
                                    <span class="round-8 bg-primary rounded-circle me-2 d-inline-block"></span>
                                    <span class="fs-2">2023</span>
                                </div>
                                <div>
                                    <span class="round-8 bg-light-primary rounded-circle me-2 d-inline-block"></span>
                                    <span class="fs-2">2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="d-flex justify-content-center">
                                <apexcharts width="180" type="donut" :options="options" :series="series"/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>