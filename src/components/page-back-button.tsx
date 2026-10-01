"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function PageBackButton() {
  const router = useRouter();

  function goBack() {
    const referrer = document.referrer;
    const cameFromThisSite = referrer && new URL(referrer).origin === window.location.origin;

    if (cameFromThisSite && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  }

  return (
    <button className="page-back-button" type="button" onClick={goBack}>
      <ArrowLeft size={15} aria-hidden="true" />
      <span>Back</span>
    </button>
  );
}
