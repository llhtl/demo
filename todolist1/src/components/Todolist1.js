import React from 'react';
import storage from '../modules/storage';
class Todolist1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      finishList: []
    };
  }
  componentDidMount() {
    let todoList = storage.get("TodoList");
    if (todoList) {
      this.setState({
        finishList: todoList
      })
    }
  }
  addData = (e) => {
    if (e.keyCode == 13) {
      let title = this.refs.title.value;
      let tempList = this.state.finishList;
      tempList.push({
        title: title,
        checked: false
      })
      this.setState({
        list: tempList
      });
      this.refs.title.value = "";
      storage.set("TodoList", tempList);
    }
  }

  changeState = (key) => {
    let templist = this.state.finishList;
    templist[key].checked = !templist[key].checked;
    this.setState({
      list: templist
    });
    storage.set("TodoList", templist);
  }
  deleteData = (key) => {
    let templist = this.state.finishList;
    templist.splice(key, 1);
    this.setState({
      list: templist
    })
    storage.set("TodoList", templist);
  }

  render() {
    return (
      <div>
        <h1>Todolist</h1>
        <input class="inp" ref="title" onKeyUp={this.addData} placeholder="输入待办事项" />
        <hr />
        <h2>正在进行</h2>
        <hr />
        {
          this.state.finishList.map((value, key) => {
            if (value.checked == false) {
              return (
                <li key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.changeState.bind(this, key)} />{value.title}
                    ---<button class="btn1" onClick={this.deleteData.bind(this, key)}>删除</button>
                      </li>
              )
            }
          })
        }
        <h2>已完成事项</h2>
        {
          this.state.finishList.map((value, key) => {
            if (value.checked == true) {
              return (
                <li key={key}>
                <input type="checkbox" checked={value.checked} onChange={this.changeState.bind(this, key)} />{value.title}
                  ---<button class="btn2" onClick={this.deleteData.bind(this, key)}>删除</button>
                </li>
              )
            }
          })
        }
        <hr />
      </div>
    )
  }
}
export default Todolist1;