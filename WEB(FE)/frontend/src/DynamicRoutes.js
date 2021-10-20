import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function DynamicRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={({ history, location, match }) => {
            const Page = lazy(() =>
              import("./pages" + location.pathname).catch((e) => {
                if (/not find module/.test(e.message)) {
                  return import("./pages/NotFound.js");
                }

                if (/Loading chunk \d+ failed/.test(e.message)) {
                  window.location.reload();
                  return;
                }
                throw e;
              })
            );
            return (
              <Suspense fallback={<div>Loading..</div>}>
                <Page />
              </Suspense>
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
