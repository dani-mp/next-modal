"use client";

import { usePathname, useRouter } from "next/navigation";
import ReactModal from "react-modal";

export default function Modal({ value }: { value?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <ReactModal
      isOpen={value !== undefined}
      onRequestClose={() => {
        if (!pathname) return;
        router.push(pathname);
      }}
    >
      <h2>{`Selected: ${value}`}</h2>
    </ReactModal>
  );
}
