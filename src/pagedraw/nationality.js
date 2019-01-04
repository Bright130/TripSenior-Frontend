import React from "react";
import { Dropdown } from "semantic-ui-react";

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

const nationOptions = () => {
  let ret = [];
  loadAPI(" http://127.0.0.1:5000/static/nationalities").then(result => {
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

const NationDrop = () => (
  <Dropdown
    placeholder="Nationality"
    fluid
    selection
    options={nationOptions()}
    className="borderless"
  />
);

export default NationDrop;
