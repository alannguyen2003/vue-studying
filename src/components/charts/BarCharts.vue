<script>
// import ApexCharts from 'apexcharts';
// import apexcharts from 'public/libs/apexcharts/dist/apexcharts';
export default {
    data() {
        return {
            options: Object,
            series: []
        }
    },
    methods: {
        onCreateChart() {
            // var chart = {
            //     series: [
            //         { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
            //         { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
            //     ],

            //     chart: {
            //         type: "bar",
            //         height: 345,
            //         offsetX: -15,
            //         toolbar: { show: true },
            //         foreColor: "#adb0bb",
            //         fontFamily: 'inherit',
            //         sparkline: { enabled: false },
            //     },


            //     colors: ["#5D87FF", "#49BEFF"],


            //     plotOptions: {
            //         bar: {
            //             horizontal: false,
            //             columnWidth: "35%",
            //             borderRadius: [6],
            //             borderRadiusApplication: 'end',
            //             borderRadiusWhenStacked: 'all'
            //         },
            //     },
            //     markers: { size: 0 },

            //     dataLabels: {
            //         enabled: false,
            //     },


            //     legend: {
            //         show: false,
            //     },


            //     grid: {
            //         borderColor: "rgba(0,0,0,0.1)",
            //         strokeDashArray: 3,
            //         xaxis: {
            //             lines: {
            //             show: false,
            //             },
            //         },
            //     },

            //     xaxis: {
            //         type: "category",
            //         categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
            //         labels: {
            //             style: { cssClass: "grey--text lighten-2--text fill-color" },
            //         },
            //     },


            //     tooltip: { theme: "light" },

            //     responsive: [
            //         {
            //             breakpoint: 600,
            //             options: {
            //                 plotOptions: {
            //                     bar: {
            //                         borderRadius: 3,
            //                     }
            //                 },
            //             }
            //         }
            //     

            this.options = {
                chart: {
                    type: "bar",
                    height: 345,
                    offsetX: -15,
                    toolbar: { show: true },
                    foreColor: "#adb0bb",
                    fontFamily: 'inherit',
                    sparkline: { enabled: false },
                },
                colors: ["#5D87FF", "#49BEFF"],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "45%",
                        borderRadius: [6],
                        borderRadiusApplication: 'end',
                        borderRadiusWhenStacked: 'all'
                    },
                },
                markers: { size: 0 },

                dataLabels: {
                    enabled: false,
                },


                legend: {
                    show: false,
                },
                grid: {
                    borderColor: "rgba(0,0,0,0.1)",
                    strokeDashArray: 3,
                    xaxis: {
                        lines: {
                        show: false,
                        },
                    },
                },
                xaxis: {
                    type: "category",
                    categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
                    labels: {
                        style: { cssClass: "grey--text lighten-2--text fill-color" },
                    },
                },
                tooltip: { theme: "light" },

                responsive: [
                    {
                        breakpoint: 600,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 3,
                                }
                            },
                        }
                    }
                ]
            };
            this.series = [
                    { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
                    { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
                ];
        }
    },
    created() {
        this.onCreateChart();
    }
}
</script>

<template>
    <div class="col-lg-8 d-flex align-items-strech">
        <div class="card w-100">
            <div class="card-body">
                <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div class="mb-3 mb-sm-0">
                        <h5 class="card-title fw-semibold">Demo Chart</h5>
                    </div>
                    <div>
                        <select class="form-select">
                            <option value="1">March 2023</option>
                            <option value="2">April 2023</option>
                            <option value="3">May 2023</option>
                            <option value="4">June 2023</option>
                        </select>
                    </div>
                </div>
                <apexcharts type="bar" :options="options" :series="series"></apexcharts>            
            </div>
        </div>
    </div>
</template>