// import echarts from 'echarts'
import { useEffect } from 'react';
import { Bar } from '@ant-design/charts';
// import echarts from 'echarts/lib/echarts'

function BizCharts2() {
  useEffect(() => {});
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
  ];
  const config: any = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    color: ['#2ca02c', '#000000'],
    marginRatio: 0,
    yAxis: {
      grid: {
        line: null,
        subTickLine: null,
        grid: null,
      },
    },
    xAxis: {
      grid: {
        line: null,
        subTickLine: null,
        grid: null,
      },
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'right',
      // 'left', 'middle', 'right'
      offset: 4,
    },
    tooltip: {
      formatter: (datum: any) => ({
        name: `${datum.value} ${datum.value === '男' ? '👦' : '👧'}`,
        value: datum.value,
      }),
    },
    barStyle: () => {
      return {
        radius: [20, 20, 0, 0],
        fill: 'l(200) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };
  return (
    <>
      <Bar {...config} />
    </>
  );
}

export default BizCharts2;
