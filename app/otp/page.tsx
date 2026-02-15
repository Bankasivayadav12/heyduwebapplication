import { Suspense } from "react";
import OtpClient from "./OtpClient";

export default function OtpPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <OtpClient />
    </Suspense>
  );
}
