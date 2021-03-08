import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/user.actions";

function Data(props) {
  console.log(props);
  const getData = props.getData;
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <h1>Data dari redux</h1>
      {props.data.map === undefined ? (
        <h1>Lagi ambil data</h1>
      ) : (
        props.data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("mstp data", props);
  return {
    data: props.getData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
