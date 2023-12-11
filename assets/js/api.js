/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright trdmonkkey 2023 All rights reserved
 * @author trdmonkey <trdmonkey218@gmail.com>
 */


 'use strict';

 const api_key = "5b9d30a395a52d7f947999c70791ffbd";


 /**
  * Fetch data from server 
  * @param {string} URL API url
  * @param {Function} callback callback
  * */ 
 export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`).then(res => res.json()).then(data => callback(data));
 }

 