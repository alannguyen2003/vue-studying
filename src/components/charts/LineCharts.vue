<script>
export default {
    data() {
        return {
            options: Object,
            series: []
        }
    },
    methods: {
        onCreatedChart() {
            this.options = {
                chart: {
                    id: "sparkline3",
                    type: "area",
                    height: 60,
                    sparkline: {
                        enabled: true,
                    },
                    group: "sparklines",
                    fontFamily: "Plus Jakarta Sans', sans-serif",
                    foreColor: "#adb0bb",
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                fill: {
                    colors: ["#f3feff"],
                    type: "solid",
                    opacity: 0.05,
                },
                markers: {
                    size: 0,
                    },
                    tooltip: {
                        theme: "dark",
                        fixed: {
                            enabled: true,
                            position: "right",
                        },
                    x: {
                        show: false,
                    },
                },
            };
            this.series = [
                {
                    name: "Earnings",
                    color: "#49BEFF",
                    data: [25, 66, 20, 40, 12, 58, 20],
                },
            ];
        }
    },
    created() {
        this.onCreatedChart();
    }
}
</script>


<template>
    <div class="col-lg-12">
        <!-- Monthly Earnings -->   
        <div class="card">  
            <div class="card-body">
                <div class="row alig n-items-start">
                    <div class="col-8">
                        <h5 class="card-title mb-9 fw-semibold"> Monthly Earnings </h5>
                        <h4 class="fw-semibold mb-3">$6,820</h4>
                        <div class="d-flex align-items-center pb-1">
                            <span
                                class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                <i class="ti ti-arrow-down-right text-danger"></i>
                            </span>
                            <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                            <p class="fs-3 mb-0">last year</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="d-flex justify-content-end">
                            <div
                                class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                <i class="ti ti-currency-dollar fs-6"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <apexcharts height="60" type="area" :options="options" :series="series"/>
        </div>
    </div>
</template>