import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = ({ onSearch, cartItemCount }) => {

    const [search, setSearch] = useState('');

    const handleSubmit = () => {
        if (search.trim().length) {
            onSearch(search.trim())
        }
        setSearch('')
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                      
                        <Link to="/" className="link">
                            <h1 className="brand">E-commerce</h1>
                        </Link>
                       
                       
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    Search
                                </button>
                            </form>
                        </div>
                        
                        
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }