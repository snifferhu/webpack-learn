import _ from "lodash";
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());