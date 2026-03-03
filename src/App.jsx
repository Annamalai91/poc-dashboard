import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";

import Dashboard from "@/pages/Dashboard";
import NewOptimization from "@/pages/NewOptimization";
// import ADK from "@/pages/ADK";
// import DSPyLab from "@/pages/DSPyLab";
// import DoubtsQueue from "@/pages/DoubtsQueue";
// import PromptLibrary from "@/pages/PromptLibrary";
// import Users from "@/pages/Users";
// import QCTicketProgress from "@/pages/QCTicketProgress";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-optimization" element={<NewOptimization />} />
          {/* <Route path="/adk" element={<ADK />} />
          <Route path="/dspy-lab" element={<DSPyLab />} />
          <Route path="/doubts-queue" element={<DoubtsQueue />} />
          <Route path="/prompt-library" element={<PromptLibrary />} />
          <Route path="/users" element={<Users />} />
          <Route path="/qc-ticket-progress" element={<QCTicketProgress />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
