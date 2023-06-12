import React from "react";
import { increase} from "./action";
import { decrease} from "./action";
import { connect } from "react-redux";

const Inc=({Count,increase,decrease})=>{
    return(
        <>
        count form inc component :{Count} <br></br>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>decrement</button>
        </>
    )

}
const mapStateToProps=state=>({
    Count:state
  })
export default connect(mapStateToProps,{increase,decrease})(Inc);