// import echarts from 'echarts'
import { useEffect, useState } from 'react';
// 模块化样式表
import Echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import '../../../public/map/App.css';
// import echarts from 'echarts';
import gansu from '../../../public/map/xinzuo.json';
import toolTipBg2 from '../../../public/map/tooltip-bg2.png';
import gansumap from '../../../public/map/map.jpg';
// import { geoCoordMap, provienceData } from '../../../public/map/geo';

// var geoCoordMap = {
//   酒泉市: [98.502981, 39.740244],
//   庆阳市: [107.632137, 35.708182],
// };
// var dataList = [
//   { name: '酒泉市', value: 1 },
//   { name: '庆阳市', value: 2 },
// ];
var domImg = document.createElement('img');
// domImg.style.height = domImg.height = domImg.width = domImg.style.width = '100px';
// domImg.src =

function BizCharts4() {
  const [chartOptions, setChartOptions] = useState([]);
  const city = ['酒泉市', '庆阳市', '嘉峪关市'];
  const [geoCoordMap, setGeoCoordMap] = useState({
    酒泉市: [98.502981, 39.740244],
    庆阳市: [107.638461, 35.715216],
    嘉峪关市: [98.294475, 39.77663],
    酒泉管理中心: [95.783438, 40.531269],
  });
  // const [index, setIndex] = useState(0);
  const [dataList, setDataList] = useState([{ name: '酒泉管理中心', value: 5 }]);
  useEffect(() => {
    initalECharts();
    // setInterval(effectMap, 3000);
  }, []);
  const effectMap = () => {
    // chartOptions.series[0].data = arrs;
  };
  const handleClick = () => {
    setDataList([
      { name: '庆阳市', value: 5 },
      { name: '嘉峪关市', value: 5 },
    ]);
    let myChart = Echarts.init(document.getElementById('map'));

    chartOptions.series[1].data = convertData([{ name: '庆阳市', value: 5 }]);
    console.log(domImg);
    myChart?.setOption(chartOptions, true);
    setChartOptions(chartOptions);
    // let myChart = Echarts.init(document.getElementById('map'));
    // myChart.setOption(option, true);
  };
  //给每个地区赋值
  const convertData = (data) => {
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
        });
      }
    }
    return res;
  };
  const initalECharts = () => {
    let myChart = Echarts.init(document.getElementById('map')); //echarts5.0以上会有bug

    let name = 'gansu'; //地图名
    let data = gansu; //地图的数据来自之前引入的json文件
    Echarts.registerMap(name, data); //此步不可省略，要想展示一个地图，先需要注册，巨坑（官方根本无文档，全靠瞎猜）
    let option = {
      backgroundColor: '#2957A2', //背景色
      title: {
        top: 20,
        text: '用户注册区域展示',
        subtext: '',
        x: 'center',
        textStyle: {
          color: '#fff',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: (p: any) => {
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
                  offset: 0.9,
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
                image: domImg,
                repeat: 'repeat', //可选值repeat、no-repeat、repeat-x、repeat-y
              },
              gansumap,
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
            },
          },
          zoom: 1, //当前视角的缩放比例
          //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          roam: false,
          map: 'gansu', //使用中国地图
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          z: 5,
          data: convertData(dataList),
          // data: [],
          symbolSize: 14,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return (
                  '{fline|地点：' +
                  params.data.name +
                  '}\n{tline|' +
                  (params.data.value || '出事了家人们') +
                  '}'
                );
              },
              position: 'top',
              backgroundColor: 'rgba(254,174,33,.8)',
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
        // {
        //   //设置为分散点
        //   type: 'scatter',
        //   //series坐标系类型
        //   coordinateSystem: 'geo',
        //   //设置图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        //   symbol: 'circle',
        //   // //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10
        //   symbolSize: [100, 100],
        //   //气泡字体设置
        //   label: {
        //     normal: {
        //       show: true, //是否显示
        //       textStyle: {
        //         color: '#fff', //字体颜色
        //         fontSize: 18, //字体大小
        //       },
        //       //返回气泡数据
        //       // formatter(value: any) {
        //       //   return value.data.value[2];
        //       // },
        //       formatter(value: any) {
        //         return (
        //           '{fline|客户：' +
        //           value.data.value[2] +
        //           '  ' +
        //           value.data.value[2] +
        //           '}\n{tline|' +
        //           value.data.value[2] +
        //           '}'
        //         );
        //       },
        //     },
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: '#1E90FF', //标志颜色
        //     },
        //   },
        //   //给区域赋值
        //   data: convertData(dataList),
        //   showEffectOn: 'render', //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
        //   rippleEffect: {
        //     //涟漪特效相关配置。
        //     brushType: 'stroke', //波纹的绘制方式，可选 'stroke' 和 'fill'
        //   },
        //   hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果。
        //   zlevel: 1, //所属图形的 zlevel 值
        // },
      ],
    };
    // const ops = this.dealBoxOption(options, this.state.index, this.needRepost);

    // this.myChart?.setOption(ops, true);
    myChart?.setOption(option, true);
    setChartOptions(option);
  };
  const abc = domImg.toString();
  return (
    <>
      {
        <div
          dangerouslySetInnerHTML={{
            __html: ``,
          }}
        ></div>
      }
      <button onClick={handleClick}>测试按钮</button>
      <div id='map' style={{ height: '500px', width: '800px' }}></div>
    </>
  );
}

export default BizCharts4;
