"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactModal from "react-modal";

export default function Modal() {
  const modal = useSearchParams().get("modal");
  const router = useRouter();
  const pathname = usePathname();
  return (
    <ReactModal
      isOpen={!!modal}
      onRequestClose={() => {
        if (!pathname) return;
        router.push(pathname);
      }}
    >
      <h2>{`Selected: ${modal}`}</h2>
    </ReactModal>
  );
}
