import React from "react";
import { Dropdown } from "semantic-ui-react";
import './nationality.css'

const loadAPI = uri => {
  return new Promise(function(resolve, reject) {
    fetch(uri)
      .then(result => {
        result
          .json()
          .then(json => {
            resolve(json);
          })
          .catch(error => {
            reject(error);
          });
      })

      .catch(error => {
        reject(error);
      });
  });
};

const provinceOptions = () => {
  let ret = [];
  loadAPI(" http://127.0.0.1:5000/provinces").then(result => {
    result.forEach(function(ele) {
      ret.push({
        text: ele,
        value: ele
      });
    });
  });
  // console.log(ret);
  return ret;
};

const DestinationDrop = () => (
  <Dropdown
    placeholder="Destination"
    search selection fluid
    options={provinceOptions()}
    className="borderless"
  />
);

export default DestinationDrop;
