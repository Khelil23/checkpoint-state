import React from "react"; 
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Khelil Ben Sassi',
        bio: "Master in mathematics.",
        imgSrc: '/image.jpg',
        profession: 'Futur developer'
      },
      bool: false,
      counter: 0
    };
  }

  handleClick = () => this.state.bool ? this.setState({ bool: false }) : this.setState({ bool: true });

  incrementCounter = () => {
    const { counter } = this.state;
    this.state.bool ?
      this.setState({ counter: counter + 1 }) : this.setState({ counter: 0 });
  };

  componentDidMount = () => {
    setInterval(this.incrementCounter, 1000);
  }


  render() {
    return (
      <>
        <div>           
          <button style={{
            background: '#0000FF',
            color: 'white', padding: 15, fontSize: 20,
            textAlign: 'center', borderRadius: 5,
            cursor: 'pointer', width: 150, height: 50
          }} onClick={this.handleClick} >{this.state.bool ? "Hide" : "Display"}</button>           
          <h2>{this.state.counter}</h2>
        </div>
        {this.state.bool && (
          <div>             
            <img  src={this.state.Person.imgSrc} />
            <div >
              <h2 style={{fontFamily: "Barlow Condensed",fontWeight: 400}} >{this.state.Person.fullName}</h2> 
              <h3 style={{fontFamily: "Barlow Condensed" ,fontWeight: 300}}>{this.state.Person.bio}</h3>
              <h4 style={{fontFamily: "Barlow Condensed", fontWeight: 300}}>{this.state.Person.profession}</h4>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default App;
