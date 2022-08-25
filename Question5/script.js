class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  
  handleAddCount(){
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      `<div>
        <h2>${this.state.count}</h2>
        <button onClick=${this.handleAddCount}>Add</button>
      </div>`
    );
  }
}

ReactDOM.render(
  <Count></Count>,
  document.getElementById('root')
);

/**
  setState 想成一個“非同步”的操作
  執行 setState 後不代表 component 的 state 立即被更新了
  所以原本應該 +3 變成只有+1
  如果要基於前面算完 state.count +1 的話，要用 updater 方式

  this.setState((state, props) => {
  return { ...一個新的物件 };
  });

  可將 handleAddCount  修改成

handleAddCount(){
  this.setState(state => ({ count: state.count + 1 }));
  this.setState(state => ({ count: state.count + 1 }));
  this.setState(state => ({ count: state.count + 1 }));
}
*/