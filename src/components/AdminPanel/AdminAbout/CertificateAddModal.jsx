import React from "react";

export default function CertificateAddModal({
  certificateText,
  setCertificateText,
}) {
  console.log(certificateText);
  return (
    <div>
      <input
        value={certificateText}
        onChange={(e) => setCertificateText(e.target.value)}
        placeholder="Add Your Certificate..."
        type="text"
        name="name"
        className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
      />
    </div>
  );
}
