import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_timeline from '@amcharts/amcharts4/plugins/timeline';
import { points } from './charttheme';
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'timelinechart',
  templateUrl: './chartdistance.component.html',
  styleUrls: ['./chartdistance.component.scss'],
})
export class ChartdistanceComponent implements OnInit {
  @Input() id: any = 'timelinechart';
  @Input() data: any = [];
  @Input() space: number = 0.5;
  @Input() width: string = "auto";
  @Input() height: string = "80%";
  @Input() padding: string = "0";
  public colors = [];
  @Output() finish: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    let colorSet = new am4core.ColorSet();

    setTimeout(() => {
      let labels = [];
      let l = 0;

      for (
        let i = this.data[0] - 20;
        i < this.data[this.data.length - 1] + 20;
        i += this.space
      ) {
        let last = this.data.indexOf(i) == this.data.length - 1;
        let first = this.data.indexOf(i) == 0;
        let legend: any = String(l);
        if (first) legend = 'A';
        if (last) legend = 'F';
        if (this.data.indexOf(i) > -1) {
          let color = colorSet.next();
          this.colors.push({ color: color.hex, pos: i, legend: legend });
          labels.push({
            y: 0,
            x: i,
            color: color,
            disabled: false,
            label: legend,
          });
          l++;
        } else {
          labels.push({
            y: 0,
            x: i,
          });
        }
      }
      // console.log(this.colors);
      this.finish.emit(this.colors);
      this.init(labels);
    }, 300);
  }

  init(labels) {
    let chart: any = am4core.create(this.id, am4plugins_timeline.CurveChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    let interfaceColors = new am4core.InterfaceColorSet();

    // let colorSet = new am4core.ColorSet();
    // colorSet.step = this.space;
    chart.data = labels;
    chart.logo.height = -15000;

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;
    chart.bulletsContainer.zIndex = 200;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.baseGrid.disabled = true;
    yAxis.renderer.labels.template.disabled = true;
    yAxis.renderer.innerRadius = -15;
    yAxis.renderer.radius = 15;

    let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    // dateAxis.renderer.minGridDistance = 70;
    xAxis.renderer.step = this.space;
    xAxis.renderer.points = points;
    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.line.strokeDasharray = '4,2';
    xAxis.renderer.line.strokeWidth = 1;
    xAxis.renderer.line.stroke = interfaceColors.getFor('background');
    xAxis.renderer.grid.template.disabled = true;
    xAxis.zIndex = 100;

    xAxis.tooltip.background.fillOpacity = 0.2;
    xAxis.tooltip.background.cornerRadius = 5;
    xAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      'alternativeBackground'
    );
    xAxis.startLocation = -20;

    let labelTemplate = xAxis.renderer.labels.template;
    labelTemplate.disabled = true;

    let series1 = chart.series.push(
      new am4plugins_timeline.CurveStepLineSeries()
    );
    series1.strokeWidth = 11;
    series1.dataFields.valueY = 'y';
    series1.dataFields.valueX = 'x';
    series1.propertyFields.stroke = 'color';

    let bullet = new am4charts.CircleBullet();
    series1.bullets.push(bullet);
    bullet.circle.radius = 10;
    bullet.circle.strokeOpacity = 1;
    bullet.circle.stroke = interfaceColors.getFor('background');
    bullet.circle.strokeWidth = 1;
    bullet.disabled = true;
    bullet.propertyFields.disabled = 'disabled';
    bullet.propertyFields.fill = 'color';
    bullet.locationX = 1;

    let label = bullet.createChild(am4core.Label);
    label.fill = interfaceColors.getFor('background');
    label.propertyFields.text = 'label';
    label.strokeOpacity = 0;
    label.zIndex = 50;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    label.fontSize = 12;
    label.fontWeight = '200';
    label.dy = 1;
  }
}
