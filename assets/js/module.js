/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright trdmonkkey 2023 All rights reserved
 * @author trdmonkey <trdmonkey218@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/** 
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. Formate: "Sunday 19, Jan"
*/
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/** 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
*/
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix, timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}


/** 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
*/
export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix, timezone) * 1000);
    const hours = date.getUTCHours();
    // const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/** 
 * @param {number} mps Metros por segundos
 * @returns {number} kilometros por hora
*/
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}


export const aqiText = {
    1: {
        level: "Good",
        message: "La calidad del aire se considera satisfactoria y la contaminación del aire representa poco o ningún riesgo."
    },
    2: {
        level: "Fair",
        message: "La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber un problema de salud moderado para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire."
    },
    3: {
        level: "Moderate",
        message: "Los miembros de grupos sensibles pueden experimentar efectos en la salud; no es probable que el público en general se vea afectado."
    },
    4: {
        level: "Poor",
        message: "Todo el mundo puede empezar a experimentar efectos sobre la salud; Los miembros de grupos sensibles pueden experimentar efectos más graves para la salud."
    },
    5: {
        level: "Very Poor",
        message: "Advertencias sanitarias de condiciones de emergencia. Es más probable que toda la población se vea afectada."
    }
}