(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1365034a"],{"1a74":function(t,e,n){},"23ed":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("2934"),c={"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},l={create:function(t){return o["a"].post("/api/v1/todo-all/todo/",t,{headers:c}).then((function(t){return t.data})).catch((function(t){return console.log(t.response)}))},delete:function(t){return o["a"].delete("/api/v1/todo-all/todo/".concat(t),{headers:c})},list:function(){return o["a"].get("/api/v1/todo-all/todo/").then((function(t){return t.data.results})).catch((function(t){return console.log(t)}))}}},7051:function(t,e,n){"use strict";n("1a74")},fa2d:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c=Object(o["h"])("h1",null,"Список заметок",-1),l=Object(o["h"])("button",{class:"btn btn-success"},"Создать",-1),u=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",null,"Проект"),Object(o["h"])("th",null,"Пользователь"),Object(o["h"])("th",null,"Сообщение"),Object(o["h"])("th",null,"Дата создания"),Object(o["h"])("th",null,"Дата обновления"),Object(o["h"])("th",null,"Активна"),Object(o["h"])("th")])],-1);function a(t,e,n,a,r,d){var b=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["d"])("div",null,[c,Object(o["h"])(b,{to:{name:"CreateTodo"}},{default:Object(o["D"])((function(){return[l]})),_:1}),Object(o["h"])("button",{class:"btn btn-primary",type:"button",name:"button",onClick:e[1]||(e[1]=function(){return d.getTodo&&d.getTodo.apply(d,arguments)})}," Обновить список заметок "),Object(o["h"])("table",null,[u,Object(o["h"])("tbody",null,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.todo_all,(function(t){return Object(o["q"])(),Object(o["d"])("tr",{key:t.id},[Object(o["h"])("td",null,Object(o["x"])(t.project),1),Object(o["h"])("td",null,Object(o["x"])(t.user),1),Object(o["h"])("td",null,Object(o["x"])(t.text),1),Object(o["h"])("td",null,Object(o["x"])(t.created),1),Object(o["h"])("td",null,Object(o["x"])(t.updated),1),Object(o["h"])("td",null,Object(o["x"])(t.isActive),1),Object(o["h"])("td",null,[Object(o["h"])("button",{class:"btn btn-danger",type:"button",name:"button",onClick:function(e){return d.delTodo(t.id)}}," Удалить ",8,["onClick"])])])})),128))])])])}var r=n("23ed"),d={name:"todo-list",data:function(){return{todo_all:[]}},mounted:function(){this.getTodo()},methods:{getTodo:function(){var t=this;r["a"].list().then((function(e){return t.todo_all=e}))},delTodo:function(t){r["a"].delete(t),this.getTodo()}}};n("7051");d.render=a;e["default"]=d}}]);
//# sourceMappingURL=chunk-1365034a.779de3df.js.map