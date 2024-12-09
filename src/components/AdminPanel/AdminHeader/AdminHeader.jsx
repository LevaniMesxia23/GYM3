import React from 'react';
import Muscle from "/Vector.svg";
import { useFetchAbout } from '../../../hooks/useFetchAbout';

function AdminHeader() {
  const { data: getAbout, isLoading, isError, error: aboutError } = useFetchAbout();

  if (isLoading) {
    return (
      <div className="flex justify-between items-center py-10 px-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="h-6 w-28 bg-[#202020] rounded animate-pulse"></div>
            <div className="h-6 w-28 bg-[#202020] rounded animate-pulse"></div>
          </div>
          <div className="w-12 h-12 bg-[#202020] rounded-full animate-pulse"></div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-[#202020] rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>{aboutError.message}</p>;
  }

  const AboutImage = getAbout.about[11]?.image;

  return (
    <div className="flex justify-between items-center py-8 px-6">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            TRANSFORM
          </span>
          <span className="bg-gradient-to-transparent bg-clip-text text-transparent text-[1.25rem] text-center">
            WITH TUNA
          </span>
        </div>
        <img src={Muscle} alt="Muscle logo" />
      </div>

      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-full">
          <img className="w-10 h-10 rounded-full" src={AboutImage} alt="About avatar" />
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
