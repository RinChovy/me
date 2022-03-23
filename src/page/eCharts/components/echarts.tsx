// import echarts from 'echarts' 
import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts/lib/echarts'


const getOption =()=> {
    let option = {
        title:{
          text:'用户骑行订单'
        },
        tooltip:{   //展示数据
          trigger:'axis'
        },
        xAxis:{
          data:['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis:{
          type:'value'
        },
        series:[
          {
            name:'订单量',
            type:'bar',
            data:[1000,2000,1500,3000,2000,1200,800]
          }
        ]
    }
    return option;
  }
function BizCharts2() {
    return (
        <ReactEcharts option={getOption()} />
    )
}




export default BizCharts2
