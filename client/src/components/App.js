import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Item from "./Item";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const checkLoggedInUser = async () => {
      try {
        const response = await fetch("/me");
        if (response.ok) {
          const user = await response.json();
          setUser(user);
        }
      } catch (error) {
        console.error("Error checking logged in user:", error);
      }
    };

    checkLoggedInUser();
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/item" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
