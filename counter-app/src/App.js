import { Component } from "react";
import Counters from "./Components/counters";
import Navbar from "./Components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  
  render(){
  return (
    <div>
      <Navbar 
      totalCounter={this.state.counters.filter(c => c.value >0).length}
      />
      <main className="container">
        <Counters
          onReset={this.handleReset}
          onAdd={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </main>
    </div>
  );
  }
}

export default App;
