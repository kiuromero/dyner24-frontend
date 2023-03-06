import { Component } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-daily-reserve',
  templateUrl: './daily-reserve.component.html',
  styleUrls: ['./daily-reserve.component.scss']
})
export class DailyReserveComponent {

  ngOnInit() {
    this.crearGrafico();
  }

  crearGrafico() {
    var chartDom = document.getElementById('container')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];
    
    let data = [Math.random() * 300];
    
    for (let i = 1; i < 20000; i++) {
      var now = new Date((base += oneDay));
      date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    
    option = {
      tooltip: {
        trigger: 'axis',
        position: function (pt : any) {
          return [pt[0], '10%'];
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: '#9F8DF1'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#9F8DF1'
              },
              {
                offset: 1,
                color: '#9F8DF1'
              }
            ])
          },
          data: data
        }
      ]
    };
    
    option && myChart.setOption(option);
  }
}
