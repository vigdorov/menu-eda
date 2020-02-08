import React from 'react';
import productsAPI from './api/productsAPI';
import {Product} from './api/types';

interface State {
  products: Product[];
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    productsAPI.request().then(products => {
      this.setState({products});
    })
  }
  
  public render() {
    const {products} = this.state;
    return (
      <div>
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
