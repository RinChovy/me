// import echarts from 'echarts'
import React from 'react';
// 模块化样式表
import Echarts from 'echarts/lib/echarts';
import '../../../public/map/App.css';
import ningxia from '../../../public/map/xinzuo.json';
import toolTipBg2 from '../../../public/map/tooltip-bg2.png';
class bizCharts5 extends React.Component {
  state = {
    index: 0, //循环用
    city: ['敦煌市', '玉门市', '金塔县', '玉门市', '自定义'],
    map: ['水资源利用中心', '双塔总干渠', '昌马管理处', '花海管理处', '电站管理处'],
    geoCoordMap: {
      水资源利用中心: [95.783438, 40.531269],
      双塔总干渠: [96.509645, 40.470549],
      昌马管理处: [96.786143, 39.861445],
      花海管理处: [97.743846, 40.309674],
      电站管理处: [97.021245, 40.308692],
    },
    chartOptions: [],
    dataList: [
      { name: '水资源利用中心', value: 5 },
      // { name: '双塔总干渠', value: 5 },
      // { name: '昌马管理处', value: 5 },
      // { name: '花海管理处', value: 5 },
      // { name: '电站管理处', value: 5 },
    ],
    selectMode: [{ name: '敦煌市', selected: true }],
  };
  componentDidMount() {
    setTimeout(() => {
      this.initalECharts();
    }, 200);
    console.log(this.convertData(this.state.dataList));
    setInterval(this.effectMap, 2000);
  }
  effectMap = () => {
    const { chartOptions, index, city, map } = this.state;
    chartOptions.series[0].data = [{ name: city[index], selected: true }];
    chartOptions.series[1].data = this.convertData([{ name: map[index], value: 5 }]);
    let myChart = Echarts.init(document.getElementById('map'));
    myChart?.setOption(chartOptions, true);

    let curIndex = index + 1;
    if (curIndex >= 5) {
      curIndex = 0;
    }

    this.setState({ chartOptions, index: curIndex });
  };
  //给每个地区赋值
  convertData = (data) => {
    const { geoCoordMap } = this.state;
    //定义一个数组
    var res = [];
    //循环遍历每个区域值
    for (var i = 0; i < data.length; i++) {
      //获取坐标
      var geoCoord = geoCoordMap[data[i].name];
      //判断是否有坐标
      if (geoCoord) {
        //往数组里设置值
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
          value2: '测试数据',
        });
      }
    }
    return res;
  };
  initalECharts = () => {
    const { dataList } = this.state;
    let myChart = Echarts.init(document.getElementById('map')); //echarts5.0以上会有bug

    let name = 'ningxia'; //地图名
    let data = ningxia; //地图的数据来自之前引入的json文件
    Echarts.registerMap(name, data); //此步不可省略，要想展示一个地图，先需要注册，巨坑（官方根本无文档，全靠瞎猜）
    let option = {
      backgroundColor: 'transparent', //背景色
      title: {
        top: 20,
        text: '甘肃水XX地图',
        subtext: '',
        x: 'center',
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: (p) => {
          let val = p.value;
          if (window.isNaN(val)) {
            val = 0;
          }
          let txtCon = `${p.name}<br><hr>总交易额 : ${val.toFixed(2)}`;
          return txtCon;
        },
      },
      geo: {
        type: 'map',
        map: name, //'jiangxi'
        roam: false,
        geoIndex: 1,
        zoom: 1, //地图的比例
        itemStyle: {
          normal: {
            borderColor: '#2ab8ff',
            borderWidth: 1,
            areaColor: {
              //地图色
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#50BFED', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: '#345ad6', // 70% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0A32B7', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },

            shadowColor: '#5DB4BE',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 1,
          },
          emphasis: {
            areaColor: '#3a7fd5',
            borderColor: '#2ab8ff',
            borderWidth: 1,
            shadowColor: 'rgba(0, 255, 255, 0.7)',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 1,
            label: {
              show: false,
            },
          },
        },
        // 标签样式
        label: {
          normal: {
            show: false, //显示标签
            textStyle: {
              color: 'rgb(249, 249, 249)', //城市标签字体颜色
              fontSize: 12,
            },
            position: [-70, '0%'],
            backgroundColor: {
              image: toolTipBg2,
            },
            padding: [10, 10, 25, 10],
            lineHeight: 30,
            color: '#f7fafb',
          },

          emphasis: {
            textStyle: {
              color: '#fff', //选中后的字体颜色
            },
          },
        },
      },
      series: [
        //数据系列
        {
          type: 'map', //地图类型
          selectedMode: 'multiple',
          tooltip: {
            show: false,
          },
          //地图上文字
          label: {
            normal: {
              show: true, //是否显示标签
              textStyle: {
                color: '#fff',
              },
            },
            emphasis: {
              textStyle: {
                color: '#fff',
              },
            },
          },
          //地图区域的多边形 图形样式
          itemStyle: {
            normal: {
              borderColor: '#2ab8ff',
              borderWidth: 1.5,
              areaColor: {
                //地图色
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#50BFED', // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: '#345ad6', // 70% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#0A32B7', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            emphasis: {
              areaColor: '#3f4547',
              borderWidth: 0,
            },
          },
          zoom: 1, //当前视角的缩放比例
          //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          roam: false,
          map: 'ningxia', //使用中国地图
          data: [],
          //选中
          select: {
            itemStyle: {
              areaColor: '#133CBA',
            },
            label: {
              show: false,
            },
          },
          emphasis: {
            show: true,
            label: {
              color: '#FFFFFF',
              fontSize: 16,
              fonWeight: 'bold',
            },
            itemStyle: {
              areaColor: '#FFAA06',
            },
          },
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          z: 5,
          data: this.convertData(dataList),
          // data: [],
          symbolSize: 14,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return '{fline|地点：' + params.data.name + '}\n{tline|' + params.data.value2 + '}';
              },
              position: 'top',
              backgroundColor: '#87d8cdcc',
              // backgroundColor: 'transparent',
              padding: [0, 0],
              borderRadius: 3,
              lineHeight: 32,
              color: '#f7fafb',
              rich: {
                fline: {
                  padding: [0, 10, 10, 10],
                  color: '#ffffff',
                },
                tline: {
                  padding: [10, 10, 0, 10],
                  color: '#ffffff',
                },
              },
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            color: '#feae21',
          },
        },
      ],
    };
    // const ops = this.dealBoxOption(options, this.state.index, this.needRepost);

    // this.myChart?.setOption(ops, true);
    myChart?.setOption(option, true);
    this.setState({ chartOptions: option });
  };
  render() {
    return (
      <>
        {/* <button onClick={handleClick}></button> */}
        <div id='map' style={{ height: '500px', width: '100%', background: '#a1e6b2' }}></div>
      </>
    );
  }
}

export default bizCharts5;
