﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function getComboA(selectObject) {
    var value = selectObject.value;
    //var pp = {"data":value}
    //$.ajax({
    //    type: "Get",
    //    url: "/",
    //    data: pp,
    //    datatype: "html",
    //    success: function() {
    //        console.log('Success');

    //    }
    //});

    window.location.href = "/?data=" + value;
}
