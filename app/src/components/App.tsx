import * as React from 'react';
import * as Parse from "parse";
export class App extends React.Component<{
}, {
    }> {
    componentDidMount() {
        console.log("go");
        Parse.initialize("test", "test_JAVASCRIPT_KEY");

        (Parse as any).serverURL = "http://localhost:5010/parse";

        let user = Parse.User.current();
        console.log(user);
        if (!user) {
            Parse.User.logIn("aaa", "aaa", null).done(() => {
                console.log(Parse.User.current());
            }).fail(e => {
                console.log(e);
                console.log("signUp");
                
                Parse.User.signUp("aaa", "aaa", null).done(() => {
                    console.log(Parse.User.current()); 
                })
            })
        }
    }
    render() {
        let style = {
            height: "100%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#e6e6e6",
            position: "fixed",
            top: "0px",
            left: "0px",
            boxShadow: "0px 3px 3px 0px rgba(50, 50, 50, 0.5)"
        }

        return (
            <div style={style}>
                <a href="/" >home</a>
                <a href="/test" >test</a>
            </div>
        )
    }
}