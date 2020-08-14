"use strict";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const DELETE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const PENCIL = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';
const PRINT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 8H2v9h4v4h12v-4h4V8zm-6 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>';
const MENU = '<svg viewBox="1 1 128 128"><circle cx= "64" cy="64" r="14" fill="#ff4"></circle><circle cx= "64" cy="16" r="14" fill="#f44"></circle><circle cx="64" cy="112" r="14" fill="#48f"></circle></svg>';
const DOWNLOAD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>';
const UPLOAD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></svg>';
const FILE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>';

const ONLINE_SCHEDULE = {"blocks":[{"start":"9:00","end":"9:45","n":0},{"start":"9:55","end":"10:40","n":1},{"start":"10:50","end":"11:35","n":2},{"start":"1:00","end":"1:40","n":3},{"start":"1:50","end":"2:30","n":4},{"start":"2:35","end":"3:15","n":5},"",{"start":"1:40","end":"2:00","n":4},{"start":"10:40","end":"11:00","n":2},{"start":"2:40","end":"3:00","n":5},{"start":"1:30","end":"1:50","n":3}],"grades":[{"name":"No Class","abbr":"NA","defaultBlock":0,"color":[2,3],"teachers":["Teacher A"]},{"name":"Pre-Kindergarten","abbr":"Pre-K","defaultBlock":0,"color":[21,0],"teachers":["AM","PM"]},{"name":"Kindergarten","abbr":"K","defaultBlock":3,"color":[13,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"1st Grade","abbr":"1st","defaultBlock":5,"color":[14,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"2nd Grade","abbr":"2nd","defaultBlock":4,"color":[15,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F","Teacher G"]},{"name":"3rd Grade","abbr":"3rd","defaultBlock":0,"color":[17,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F","METS"]},{"name":"4th Grade","abbr":"4th","defaultBlock":1,"color":[19,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"5th Grade","abbr":"5th","defaultBlock":2,"color":[20,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D*","Teacher E"]}],"specials":[{"name":"No Special","abbr":"NS","specialist":"N/A","color":[2,3]},{"name":"Art","abbr":"A","specialist":"Fowler","color":[4,0]},{"name":"Art *","abbr":"A *","specialist":"McIntyre","color":[4,0]},{"name":"Music","abbr":"M","specialist":"Russell","color":[10,0]},{"name":"Music *","abbr":"M *","specialist":"Caramanica","color":[10,0]},{"name":"PE","abbr":"P","specialist":"Detzner","color":[11,0]},{"name":"PE *","abbr":"P *","specialist":"Harding","color":[11,0]},{"name":"STEM","abbr":"S","specialist":"Haskins","color":[8,0]},{"name":"STEM *","abbr":"S *","specialist":"Dickey","color":[8,0]}],"classes":[[3,0,2,0,1],[3,1,2,0,3],[3,3,2,0,6],[3,4,2,0,8],[3,0,2,1,3],[3,1,2,1,5],[3,3,2,1,7],[3,4,2,1,1],[3,0,2,2,5],[3,1,2,2,8],[3,3,2,2,2],[3,2,2,2,3],[3,0,2,3,8],[3,3,2,3,1],[3,2,2,3,4],[3,4,2,3,5],[3,1,2,4,2],[3,3,2,4,3],[3,4,2,4,6],[3,0,2,4,7],[3,4,2,5,2],[3,1,2,5,4],[3,3,2,5,5],[3,2,2,5,7],[5,0,3,0,1],[5,3,3,0,4],[5,4,3,0,6],[5,2,3,0,7],[5,0,3,1,3],[5,1,3,1,5],[5,3,3,1,7],[5,2,3,1,1],[5,0,3,2,5],[4,4,4,0,6],[5,3,3,2,2],[5,4,3,2,3],[5,0,3,3,7],[5,3,3,3,1],[5,2,3,3,3],[5,4,3,3,5],[5,1,3,4,1],[5,3,3,4,3],[5,3,3,5,6],[5,4,3,4,7],[5,4,3,5,1],[5,2,3,5,4],[5,2,3,4,6],[5,1,3,5,7],[4,0,4,0,1],[4,1,4,0,3],[5,2,3,2,8],[4,3,4,0,7],[4,0,4,1,3],[4,3,4,1,6],[4,2,4,1,7],[4,4,4,1,1],[4,0,4,2,5],[4,1,4,2,7],[4,3,4,2,1],[4,4,4,2,3],[4,0,4,3,7],[4,2,4,3,1],[4,3,4,3,3],[4,4,4,3,5],[4,1,4,4,1],[4,2,4,4,3],[4,3,4,4,5],[4,4,4,4,7],[4,1,4,5,2],[4,3,4,5,4],[4,2,4,5,6],[4,0,4,5,8],[4,2,4,6,4],[4,1,4,6,5],[4,4,4,6,8],[4,3,4,6,2],[0,0,5,0,1],[0,1,5,0,3],[0,4,5,0,6],[0,3,5,0,7],[0,0,5,2,3],[0,3,5,2,6],[0,4,5,2,1],[0,0,5,1,5],[0,1,5,1,7],[0,3,5,1,1],[0,4,5,1,3],[0,0,5,3,7],[0,4,5,3,2],[0,3,5,3,3],[0,1,5,3,5],[0,1,5,4,1],[0,3,5,4,4],[0,4,5,4,5],[0,0,5,4,8],[0,3,5,5,2],[0,1,5,5,4],[0,0,5,5,6],[0,4,5,5,8],[1,0,6,0,1],[1,3,6,0,3],[1,4,6,0,6],[1,1,6,0,8],[1,1,6,1,4],[1,3,6,1,6],[1,0,6,1,7],[1,4,6,1,2],[1,0,6,2,5],[1,1,6,2,7],[1,3,6,2,1],[1,4,6,2,3],[1,0,6,3,8],[1,1,6,3,1],[1,3,6,3,4],[1,4,6,3,5],[1,4,6,4,1],[1,1,6,4,3],[1,0,6,4,6],[1,3,6,4,7],[1,3,6,5,2],[1,0,6,5,3],[1,1,6,5,5],[1,4,6,5,8],[2,4,7,3,2],[2,1,7,2,3],[2,0,7,2,6],[2,3,7,2,7],[2,3,7,3,3],[2,1,7,3,5],[2,0,7,3,8],[2,4,7,2,1],[2,3,7,0,6],[2,1,7,0,7],[2,0,7,0,1],[2,4,7,0,3],[2,0,7,1,7],[2,3,7,1,1],[2,1,7,1,4],[2,4,7,1,5],[2,1,7,4,1],[2,0,7,4,3],[2,3,7,4,5],[2,4,7,4,7],[0,1,5,2,8],[8,3,1,0,4],[8,4,1,0,6],[10,3,1,1,4],[9,1,1,1,2],[10,2,1,1,6],[8,1,1,0,2]],"palette":["#000","#fff","#ddd","#999","#f66","#fc8","#fe8","#be8","#6d9","#9ee","#4ad","#a8e","#f9e","#f23","#fa0","#ff0","#bf0","#7c0","#8ff","#0bf","#a2c","#f4f"]};
const ORIGINAL_SCHEDULE = {"blocks":[{"start":"9:00","end":"9:45","n":0},{"start":"9:55","end":"10:40","n":1},{"start":"10:50","end":"11:35","n":2},{"start":"1:00","end":"1:40","n":3},{"start":"1:50","end":"2:30","n":4},{"start":"2:35","end":"3:15","n":5},"",{"start":"1:40","end":"2:00","n":4},{"start":"10:40","end":"11:00","n":2},{"start":"2:40","end":"3:00","n":5},{"start":"1:30","end":"1:50","n":3}],"grades":[{"name":"No Class","abbr":"NA","defaultBlock":0,"color":[2,3],"teachers":["Teacher A"]},{"name":"Pre-Kindergarten","abbr":"Pre-K","defaultBlock":0,"color":[21,0],"teachers":["AM","PM"]},{"name":"Kindergarten","abbr":"K","defaultBlock":3,"color":[13,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"1st Grade","abbr":"1st","defaultBlock":5,"color":[14,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"2nd Grade","abbr":"2nd","defaultBlock":4,"color":[15,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F","Teacher G"]},{"name":"3rd Grade","abbr":"3rd","defaultBlock":0,"color":[17,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F","METS"]},{"name":"4th Grade","abbr":"4th","defaultBlock":1,"color":[19,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D","Teacher E","Teacher F"]},{"name":"5th Grade","abbr":"5th","defaultBlock":2,"color":[20,0],"teachers":["Teacher A","Teacher B","Teacher C","Teacher D*","Teacher E"]}],"specials":[{"name":"No Special","abbr":"NS","specialist":"N/A","color":[2,3]},{"name":"Art","abbr":"A","specialist":"Fowler","color":[4,0]},{"name":"Art *","abbr":"A *","specialist":"McIntyre","color":[4,0]},{"name":"Music","abbr":"M","specialist":"Russell","color":[10,0]},{"name":"Music *","abbr":"M *","specialist":"Caramanica","color":[10,0]},{"name":"PE","abbr":"P","specialist":"Detzner","color":[11,0]},{"name":"PE *","abbr":"P *","specialist":"Harding","color":[11,0]},{"name":"STEM","abbr":"S","specialist":"Haskins","color":[8,0]},{"name":"STEM *","abbr":"S *","specialist":"Dickey","color":[8,0]}],"classes":[[3,0,2,0,1],[3,1,2,0,3],[3,3,2,0,6],[3,4,2,0,8],[3,0,2,1,3],[3,1,2,1,5],[3,3,2,1,7],[3,4,2,1,1],[3,0,2,2,5],[3,1,2,2,8],[3,3,2,2,2],[3,4,2,2,3],[3,0,2,3,8],[3,3,2,3,1],[3,2,2,3,4],[3,4,2,3,5],[3,1,2,4,1],[3,3,2,4,3],[3,4,2,4,6],[3,0,2,4,7],[3,4,2,5,2],[3,1,2,5,4],[3,3,2,5,5],[3,2,2,5,8],[5,0,3,0,1],[4,3,3,0,4],[5,4,3,0,6],[5,2,3,0,7],[5,0,3,1,3],[5,1,3,1,5],[4,3,3,1,7],[5,2,3,1,1],[5,0,3,2,5],[4,4,4,0,6],[4,3,3,2,2],[5,4,3,2,3],[5,0,3,3,7],[4,3,3,3,1],[5,2,3,3,3],[5,4,3,3,5],[5,1,3,4,1],[4,3,3,4,3],[4,3,3,5,5],[5,4,3,4,7],[5,4,3,5,1],[5,2,3,5,4],[5,2,3,4,6],[5,1,3,5,8],[4,0,4,0,1],[4,1,4,0,4],[5,2,3,2,8],[5,3,4,0,7],[4,0,4,1,3],[5,3,4,1,6],[4,2,4,1,7],[4,4,4,1,1],[4,0,4,2,5],[4,1,4,2,7],[5,3,4,2,1],[4,4,4,2,3],[4,0,4,3,7],[4,2,4,3,1],[5,3,4,3,3],[4,4,4,3,5],[4,1,4,4,1],[4,2,4,4,3],[5,3,4,4,5],[4,4,4,4,7],[4,4,4,5,2],[5,3,4,5,4],[4,2,4,5,6],[4,1,4,5,8],[4,2,4,6,4],[4,1,4,6,5],[4,4,4,6,8],[5,3,4,6,2],[0,0,5,0,1],[0,1,5,0,3],[0,4,5,0,6],[0,3,5,0,7],[0,0,5,2,3],[0,3,5,2,6],[1,2,5,2,2],[0,0,5,1,5],[0,1,5,1,7],[0,3,5,1,1],[0,4,5,1,3],[0,0,5,3,7],[1,2,5,3,1],[0,3,5,3,3],[0,1,5,3,5],[0,1,5,4,1],[1,2,5,4,3],[0,3,5,4,5],[0,0,5,4,8],[0,3,5,5,2],[0,1,5,5,4],[1,2,5,5,6],[0,4,5,5,8],[1,0,6,0,1],[1,1,6,0,3],[1,4,6,0,6],[0,2,6,0,8],[1,0,6,1,3],[1,3,6,1,6],[0,2,6,1,7],[1,4,6,1,2],[1,0,6,2,5],[1,1,6,2,7],[0,2,6,2,2],[1,4,6,2,3],[1,0,6,3,7],[0,2,6,3,1],[1,3,6,3,4],[1,4,6,3,5],[1,3,6,4,1],[0,2,6,4,3],[1,0,6,4,6],[1,4,6,4,7],[1,3,6,5,2],[1,1,6,5,4],[0,2,6,5,6],[1,4,6,5,8],[2,4,7,3,2],[2,1,7,2,3],[2,2,7,2,6],[2,3,7,2,7],[2,3,7,3,4],[2,1,7,3,5],[2,2,7,3,7],[2,4,7,2,1],[2,3,7,0,6],[2,1,7,0,7],[2,0,7,0,1],[2,4,7,0,3],[2,0,7,1,7],[2,2,7,1,1],[2,3,7,1,3],[2,4,7,1,5],[2,1,7,4,1],[2,2,7,4,3],[2,3,7,4,5],[2,4,7,4,7],[0,1,5,2,8],[8,1,1,0,4],[8,0,1,0,6],[10,3,1,1,4],[0,0,5,6,6],[1,2,5,6,7],[0,3,5,6,4],[0,4,5,6,2],[9,4,1,1,2],[10,2,1,1,6],[8,2,1,0,2]],"palette":["#000","#fff","#ddd","#999","#f66","#fc8","#fe8","#be8","#6d9","#9ee","#4ad","#a8e","#f9e","#f23","#fa0","#ff0","#bf0","#7c0","#8ff","#0bf","#a2c","#f4f"]};

$.fn.c = function() {
    return this.data("c");
}

function createStylesheet(id) {
    var stylesheet = document.createElement('style');
    stylesheet.type = 'text/css';
    stylesheet.id = id;
    document.head.appendChild(stylesheet);
    return stylesheet;
}

$.fn.showPanel = function(panel){
    let frame = this;
    frame.children().hide();
    frame.append(panel);
    panel.show();
}