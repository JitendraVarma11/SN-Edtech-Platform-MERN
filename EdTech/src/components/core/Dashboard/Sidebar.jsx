import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { SidebarLink } from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { ConfirmationModal } from "../../common/ConfirmationModal";

export const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return <div className="spinner mt-10"></div>;
  }

  return (
    <div>
      <div className="flex flex-col min-h-[200px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10 items-center">
        <div className="flex flex-col text-richblack-200 font-medium text-[16px]">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink link={link} iconName={link.icon} key={link.id} />
            );
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700"></div>

        <div className="flex flex-col items-start text-richblack-200 gap-2 w-full">
          <SidebarLink
            link={{ name: "Setting", path: "/dashboard/settings" }}
            iconName={"VscSettingsGear"}
          />

          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are You Sure ?",
                text2: "You will be logged out of your account",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => {
                  dispatch(logout(navigate));
                },
                btn2Handler: () => setConfirmationModal(null),
              })
            }
          >
            <div className="flex items-center gap-x-2 text-richblack-200 md:ml-8 sm:ml-4">
              <VscSignOut className="text-lg" />
              <span className="text-sm hidden md:block">Logout</span>
            </div>
          </button>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};
