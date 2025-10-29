import { Provider } from "react-redux";
import  "./index.css";
import Body from "./pages/Body";
import store from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
   <Body/>
   </Provider> 
  );
}

export default App;
