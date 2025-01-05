import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./app/routes";
import DefaultLayout from "./app/layouts/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        {
          publicRoutes.map((r, index) => {
            let Layout = (r.layout === null) ? Fragment : DefaultLayout;
            if (r.layout) {
              Layout = r.layout;
            }

            var Page = r.component;
            return (
              <Route key={index} path={r.path} element={
                <Layout >
                  <Page />
                </Layout>}></Route>
            );
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
