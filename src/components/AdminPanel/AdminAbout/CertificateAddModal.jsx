import React from "react";

export default function CertificateAddModal({
  certificateText,
  setCertificateText,
  certificateStart,
  setCertificateStart,
  certificateEnd,
  setCertificateEnd,
}) {
  console.log(certificateText);
  console.log(certificateStart);
  console.log(certificateEnd);
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

      <div className="flex gap-10 mt-3">
        <input
          type="text"
          onChange={(e) => setCertificateStart(e.target.value)}
          value={certificateStart}
          className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-green-200"
          placeholder="Sertification Start Date:"
        />
        <input
          type="text"
          onChange={(e) => setCertificateEnd(e.target.value)}
          value={certificateEnd}
          className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-red-200"
          placeholder="Sertification End Date:"
        />
      </div>
    </div>
  );
}
