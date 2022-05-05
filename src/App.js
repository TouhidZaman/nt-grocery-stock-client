import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AppRoutes from "./AppRoutes";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
