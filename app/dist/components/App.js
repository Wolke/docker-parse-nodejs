"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Parse = require("parse");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        console.log("go");
        Parse.initialize("test", "test_JAVASCRIPT_KEY");
        Parse.serverURL = "http://localhost:5010/parse";
        var user = Parse.User.current();
        console.log(user);
        if (!user) {
            Parse.User.logIn("aaa", "aaa", null).done(function () {
                console.log(Parse.User.current());
            }).fail(function (e) {
                console.log(e);
                console.log("signUp");
                Parse.User.signUp("aaa", "aaa", null).done(function () {
                    console.log(Parse.User.current());
                });
            });
        }
    };
    App.prototype.render = function () {
        var style = {
            height: "100%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#e6e6e6",
            position: "fixed",
            top: "0px",
            left: "0px",
            boxShadow: "0px 3px 3px 0px rgba(50, 50, 50, 0.5)"
        };
        return (React.createElement("div", { style: style },
            React.createElement("a", { href: "/" }, "home"),
            React.createElement("a", { href: "/test" }, "test")));
    };
    return App;
}(React.Component));
exports.App = App;
