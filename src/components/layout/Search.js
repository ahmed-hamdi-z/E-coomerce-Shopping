import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";


const Search = () => {

    const [keyword, setKeyword] = useState(' ')
    const history = useParams()
    
    const searchHandler = (e) => {
        e.preventDefault()
console.log(e)
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else{
            history.push('/')
        }
    }

  return (
    <form onSubmit={searchHandler} >
      <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            

            <div className="input-group-append">
              <button type="submit" id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>  
    </form>
  );
};
export default Search























 // <form onSubmit={searchHandler} >
    //   <div id="input-group" className="col-6 col-md-4 form-inline">
    //     <input
    //       id="search-field"
    //       className="form-control "
    //       type="text"
    //       placeholder="Search"
    //       onChange={(e) => setKeyword(e.target.value)}
    //       aria-label="Search"
    //     />

    //     <div className="input-group-append">

    //        <Link to={`/search/${keyword}`}>
    //        <button id='search_btn' className="btn"  >
    //         < FontAwesomeIcon icon={faSearch} />
    //         </button>
    //        </Link> 

    //     </div>
    //   </div>
    // </form>