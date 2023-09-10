import React, { useState } from "react";

const Phone = () => {
  const [phonelist, setphonelist] = useState(false);

  const closeHandler = () => {
    if (phonelist) {
      setphonelist(false);
      console.log(phonelist);
    } else {
      setphonelist(true);
      console.log(phonelist);
    }
  };

  return (
    <div>
      {!phonelist && (
        <div
          onClick={closeHandler}
          className="bg-[#5e6ab0] w-14 h-14 z-50 rounded-md justify-center items-center  hidden lg:block fixed bottom-14 right-14 cursor-pointer"
        >
          <div className="w-14 h-14 flex justify-center items-center">
            <img src="/phone.png" alt="phone" className="w-5 h-5" />
          </div>
        </div>
      )}

      {phonelist && (
        <div
          onClick={closeHandler}
          className="bg-[#5e6ab0] w-14 h-14 z-50 rounded-md flex justify-center items-center fixed bottom-14 right-14 cursor-pointer"
        >
          <img src="/close.png" alt="close button" className="w-5 h-5" />
        </div>
      )}

      {phonelist && (
        <div className="bg-[#5e6ab0] text-white w-[420px] h-[218px] z-50 rounded-md flex justify-center items-center fixed bottom-32 right-14">
          <div className="flex flex-row justify-between text-sm space-x-5">
            <div className="flex flex-col space-y-2">
              <div>SMS your grievance on</div>
              <div>Traffic Whatsapp Helpline</div>
              <div>Mumbai Police Elder Line</div>
              <div>Police Control Room</div>
              <div>Alert Citizen</div>
            </div>
            <div className="flex flex-col space-y-2">
              <div>7738133133 or 7738144144</div>
              <div>8454999999</div>
              <div>1090</div>
              <div>100</div>
              <div>103</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;
