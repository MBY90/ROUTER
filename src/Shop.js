import React from 'react'
import Category from './Category'
import Home from './Home'
import Products from './Products'
import { Link, Route} from 'react-router-dom';
function Shop()
{
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/" >Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>


           <Route exact path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>

      </div>
    )
  }
export default Shop;
