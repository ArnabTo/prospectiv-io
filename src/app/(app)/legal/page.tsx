import LegalPageComponent from "@/components/legal-page-component/LegalPageComponent";
import { Suspense } from "react";

const LegalPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LegalPageComponent />
    </Suspense>
  );
};

export default LegalPage;