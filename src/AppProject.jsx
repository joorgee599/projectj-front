import AppRouter from "./routes/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Sidebar.css';
import { CartProvider } from "./contexts/CartProviders";


const AppProject = () => {
  return (
    <div>
      <CartProvider>
        <AppRouter/>
        </CartProvider>
    </div>
  )
}

export default AppProject