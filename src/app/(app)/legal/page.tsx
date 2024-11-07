
import LegalPageContents from "@/components/legal-page-component/LegalPageContents";
import { Suspense } from "react";

const LegalPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <LegalPageContents />
      </Suspense>
    </div>
    // <LegalPageComponent />

  );
};

export default LegalPage;