const e = React.createElement;
const reactRoot = document.getElementById('root');
const info = [
  {
    "img": "./assets/demo1.png",
    "title": "scathcer",
    "message": "this is a message"
  },
  {
    "img": "./assets/demo2.jpg",
    "title": "cabalistically",
    "message": "this is a message"
  },
  {
    "img": "./assets/demo3.jpg",
    "title": "jorganium",
    "message": "this is a message"
  }
]
class Card extends React.Component {
  constructor (props){
    super(props);
  }
  render(){
    return (
      e('div', {className: 'card'},[
        e('img', {src: this.props.img}),
        e('h1', {className: 'cardHeader'}, this.props.title),
        e('p', {className: 'cardMessage'}, this.props.title),
        e('button', {className: 'cardBtn'}, 'Read More')
      ])
    )
  }
}

class CardContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      [
        e(Card, this.props[0]),
        e(Card, this.props[1]),
        e(Card, this.props[2])
      ]
    )
  }
}

ReactDOM.render(e(CardContainer, info), reactRoot)