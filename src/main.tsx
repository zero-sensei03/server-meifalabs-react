import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import "./assets/css/main.css";

import EducationLoading from "@/components/loading/PageLoading";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<EducationLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
);
