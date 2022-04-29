import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MyRoutes from "./components/MyRoutes";

function App() {
    return (
        <BrowserRouter>
            <Layout>
              <MyRoutes />
            </Layout>;
        </BrowserRouter>
    );
}

export default App;
