import { AuthenticatedApp } from "authenticated";
import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";
// import { ProjectListScreen } from "screens/project-lists";
// import { TsReactTest } from "TsReactTest";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
    </div>
  );
}

export default App;
