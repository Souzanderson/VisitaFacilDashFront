import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_frozen from "@amcharts/amcharts4/themes/frozen";
import {graph_theme} from '../themes/theme_graph'

am4core.useTheme(am4themes_frozen);

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements OnInit {
  @Input() data = [];
  @Input() id = 'barchart';
  @Input() xlabel = '';
  @Input() ylabel = '';
  @Input() title;

  public chart;

  constructor() {}

  ngOnDestroy() {
    this.chart.dispose();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart();
    }, 30);
  }

  public createChart() {
    this.chart = am4core.create(this.id, am4charts.XYChart);
    this.chart.logo.height = -15000;
    // Add data
    this.chart.data = this.data;

    // Create axes
    let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = this.xlabel;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fill = '#7c888e';
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.grid.template.strokeWidth = 0;
    categoryAxis.renderer.grid.template.color = 0;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    valueAxis.renderer.labels.template.fill = '#7c888e';
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.grid.template.strokeWidth = 0.5;
    valueAxis.renderer.grid.template.color = 0;

    // Create series
    this.createSeries();
    if (this.title) {
      let title = this.chart.titles.create();
      title.text = this.title;
      title.fontSize = 18;
      title.fill = "#03344c"
      title.marginTop = 12;
      title.marginBottom = 12;
    }
  }

  createSeries() {
    let series = this.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = this.xlabel;
    series.dataFields.valueY = this.ylabel;
    series.tooltipText = '{valueY.value}';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = 'bottom';
    labelBullet.label.fill = am4core.color('#01a3c4');
    labelBullet.label.fontSize = 12;
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

  }
}
