import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_frozen from '@amcharts/amcharts4/themes/frozen';
import { graph_theme } from '../themes/theme_graph';

am4core.useTheme(graph_theme);

@Component({
  selector: 'piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  @Input() data = [];
  @Input() legendpos = 'right';
  @Input() title;
  @Input() id = 'piechart';
  @Input() midlabel = '';
  @ViewChild('legend') legend: ElementRef;

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
    this.chart = am4core.create(this.id, am4charts.PieChart);
    this.chart.logo.height = -15000;
    // Add data
    this.chart.data = this.data;

    // Create axes
    // Add label
    this.chart.innerRadius = 80;
    let label = this.chart.seriesContainer.createChild(am4core.Label);
    label.text = this.midlabel;
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    label.fontSize = 50;

    let pieSeries = this.chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'size';
    pieSeries.dataFields.category = 'sector';
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    // this.chart.legend = new am4charts.Legend();
    // this.chart.legend.position = this.legendpos;
    // this.chart.legend.labels.template.fontSize = 10;
    // this.chart.legend.valueLabels.template.fontSize = 9;
    // this.chart.legend.valueLabels.template.align = 'left';
    // this.chart.legend.valueLabels.template.textAlign = 'start';

    // var marker = this.chart.legend.markers.template.children.getIndex(0);
    // marker.cornerRadius(12, 12, 12, 12);
    // marker.strokeWidth = 2;
    // marker.strokeOpacity = 1;
    // marker.stroke = am4core.color('#ccc');

    // var legendContainer = am4core.create(this.id+'legend', am4core.Container);
    // legendContainer.width = am4core.percent(100);
    // legendContainer.height = am4core.percent(100);
    // this.chart.legend.parent = legendContainer;

    if (this.title) {
      let title = this.chart.titles.create();
      title.text = this.title;
      title.fontSize = 18;
      title.fill = '#03344c';
      title.marginTop = 12;
      title.marginBottom = 12;
    }

    this.chart.events.on(
      'ready',
      (event) => {
        // populate our custom legend when chart renders
        setTimeout(() => {
          this.chart.customLegend = document.getElementById('legend' + this.id);
          pieSeries.dataItems.each((row, i) => {
            var color = this.chart.colors.getIndex(i);
            var percent = Math.round(row.values.value.percent * 100) / 100;

            let legend = document.createElement('div');
            legend.classList.add('legend-item');
            legend.id = 'legend-item-' + i;
            legend.onmouseenter = () => {
              var slice = pieSeries.slices.getIndex(i);
              slice.isHover = true;
            };

            legend.onmouseleave = () => {
              var slice = pieSeries.slices.getIndex(i);
              slice.isHover = false;
            };
            legend.style.cssText = `
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                margin: 4px;
                cursor: pointer;
            `;
            let marker = document.createElement('div');
            marker.style.cssText = `
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: ${color};
            `;
            legend.appendChild(marker);

            let divvalue = document.createElement('div');
            divvalue.style.cssText = `
                margin-left: 12px;
            `;
            divvalue.innerHTML =
              row.category + ' : ' + percent + '% (' + row.value + ')';
            legend.appendChild(divvalue);

            this.chart.customLegend.appendChild(legend);
          });
        });
      },
      300
    );
  }
}
