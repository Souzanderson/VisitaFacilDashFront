import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { locale } from '../themes/locate';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements OnInit {
  @Input() data = [];
  @Input() id: any = 'linechart';
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

    // Set input format for the dates
    this.chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
    this.chart.language.locale = locale;
    // Create axes
    let dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey('day', 'dd/MM/yyyy');
    dateAxis.renderer.grid.template.strokeWidth = 0;
    dateAxis.renderer.grid.template.color = 0;
    dateAxis.renderer.labels.template.fill = '#7c888e';
    dateAxis.renderer.labels.template.fontSize = 12;

    let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.fill = '#7c888e';
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.grid.template.strokeWidth = 0.5;
    valueAxis.renderer.grid.template.color = 0;
    // Create series
    this.createSeries(dateAxis);

    // Create vertical scrollbar and place it before the value axis
    // this.chart.scrollbarY = new am4core.Scrollbar();
    // this.chart.scrollbarY.parent = this.chart.leftAxesContainer;
    // this.chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis

    // dateAxis.start = 0.79;
    dateAxis.keepSelection = true;
    if (this.title) {
      let title = this.chart.titles.create();
      title.text = this.title;
      title.fontSize = 18;
      title.fill = "#03344c"
      title.marginTop = 12;
      title.marginBottom = 12;
    }
  }

  createSeries(dateAxis) {
    let series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'visitas';
    series.dataFields.dateX = 'dtvisita';
    series.tooltipText = '{value}';
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = 'middle';
    series.tooltip.label.textValign = 'middle';
    series.tensionX = 0.95;

    series.fillOpacity = 1;
    var fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0];
    fillModifier.offsets = [0, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color('#fff');

    let bullethover = bullet.states.create('hover');
    bullethover.properties.scale = 1.3;

    this.chart.cursor = new am4charts.XYCursor();
    // this.chart.cursor.behavior = 'panXY';
    this.chart.cursor.xAxis = dateAxis;
    this.chart.cursor.snapToSeries = series;

    // this.chart.scrollbarX = new am4charts.XYChartScrollbar();
    // this.chart.scrollbarX.series.push(series);
    // this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
  }
}
