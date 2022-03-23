// import echarts from 'echarts'
import React from 'react';
import Echarts from 'echarts/lib/echarts';
// import echarts from 'echarts/lib/echarts'

class BizCharts2 extends React.Component {
  state = {
    chartOptions: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.initalECharts();
    }, 200);
  }
  hanldHover = () => {
    const { chartOptions } = this.state;
    let myChart = Echarts.init(document.getElementById('echarts')); //echarts5.0以上会有bug
    let currentIndex = -1;

    setInterval(function () {
      var dataLen = chartOptions.series[0].data.length;
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % dataLen;
      // 高亮当前图形
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      // 显示 tooltip
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
    }, 1000);
  };
  initalECharts = () => {
    let myChart = Echarts.init(document.getElementById('echarts')); //echarts5.0以上会有bug
    const option = {
      color: [
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#56FEE8',
          },
          {
            offset: 0.7,
            color: '#14DC3E',
          },
        ]),
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#9c847a',
          },
          {
            offset: 0.7,
            color: '#c03a3a',
          },
        ]),
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#352CFE',
          },
          {
            offset: 0.7,
            color: '#8094d3',
          },
        ]),
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#D285FE',
          },
          {
            offset: 0.7,
            color: '#390341',
          },
        ]),
      ],
      title: {
        text: 'Nightingale Chart',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: (param) => {
          console.log(param);
          let str =
            param.data.name +
            '<br/>交易占比：' +
            param.data.value +
            '%<br/>交易额：' +
            param.data.value;

          return str;
          // ('{b} <br/>交易占比 :({d}%)<br/>交易额:{c} ');
        },
      },
      legend: {
        left: 'right',
        top: 'center',
        data: ['支付宝', '微信', '银联', '线下'],
        orient: 'vertical',
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          radius: [90, 140],
          center: ['50%', '50%'],
          // roseType: 'radius',
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            { value: 10, name: '支付宝', data: '1' },
            { value: 20, name: '微信', data: '1' },
            { value: 30, name: '银联', data: '1' },
            { value: 40, name: '线下', data: '1' },
          ],
          label: {
            alignTo: 'edge',
            formatter: '{time|{c} %}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 16,
                color: '#999',
              },
            },
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80,
          },
        },
      ],
    };
    myChart?.setOption(option, true);
    this.setState({ chartOptions: option });
  };

  render() {
    return (
      <>
        <button onClick={this.hanldHover}>测试按钮</button>
        <div id='echarts' style={{ height: '500px', width: '100%', background: '#a1e6b2' }}></div>
      </>
    );
  }
}

export default BizCharts2;
