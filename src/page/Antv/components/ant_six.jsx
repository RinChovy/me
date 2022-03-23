// import echarts from 'echarts'
import React from 'react';
import style from '../../../public/index.scss';
import { ScrollBoard } from '@jiaminghi/data-view-react';
import { ChannelTop as ChannelTopDiv } from '../cssJs/style.js';
// 模块化样式表
class ChannelTop extends React.Component {
  state = {
    listData: [
      { id: 1, name: '第一数据' },
      { id: 2, name: '第二数据' },
      { id: 3, name: '第三数据' },
      { id: 4, name: '第四数据' },
      { id: 5, name: '第五数据' },
      { id: 6, name: '第六数据' },
      { id: 7, name: '第七数据' },
      { id: 8, name: '第八数据' },
      { id: 9, name: '第九数据' },
    ],
    list: [
      { id: 1, name: '第一数据' },
      { id: 2, name: '第二数据' },
      { id: 3, name: '第三数据' },
      { id: 4, name: '第四数据' },
      { id: 5, name: '第五数据' },
      { id: 6, name: '第六数据' },
    ],
    box: 'boxN',
    index: 1,
  };
  componentDidMount() {}
  handleClick = () => {
    setInterval(this.setTime, 2000);
  };
  setTime = () => {
    const { listData, index } = this.state;
    let newList = listData.slice(index, index + 6);
    if (index > listData.length - 6) {
      newList = newList.concat(listData.slice(0, index - 3));
    } else {
      console.log(newList);
    }
    this.setState({
      box: 'boxN tableAnimation',
    });
    setTimeout(() => {
      index === listData.length
        ? this.setState({
            list: newList,
            box: 'boxN',
            index: 1,
          })
        : this.setState({
            list: newList,
            box: 'boxN',
            index: index + 1,
          });
    }, 1000);
  };
  render() {
    const { list, box } = this.state;
    const tableTr = list.map((v, k) => {
      return (
        <tr>
          <td>{v.id}</td>
          <td>{v.name}</td>
          <td>..</td>
          <td>..</td>
          <td>..</td>
        </tr>
      );
    });
    return (
      <>
        <button onClick={this.handleClick}>wocoa</button>
        <div className={style.IndexPageStyle}>
          <div className={style.title}>新进单位</div>
          <div className={style.leftBottomStyle}>
            {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
            <h3 className={style.h3Style} />
            <div style={{ background: '#09185d', width: '700px' }}>
              {/* <ChannelTopDiv>
                <ScrollBoard config={config} className={style.scrollboardstyle} />
              </ChannelTopDiv> */}
              <table className='tablePage'>
                <tbody>
                  <tr>
                    <th>序号</th>
                    <th>单位名称</th>
                    <th>类别</th>
                    <th>渠道</th>
                    <th>创建时间</th>
                  </tr>
                </tbody>
              </table>
              <table className='tablePage tablePage2'>
                <div className='boxW'>
                  <div className={box}>{tableTr}</div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChannelTop;
