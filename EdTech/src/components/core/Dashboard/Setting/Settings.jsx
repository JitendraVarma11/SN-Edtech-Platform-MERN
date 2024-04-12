import {ChangeProfilePicture} from "./ChangeProfilePicture"
import {DeleteAccount} from "./DeleteAccount"
import {EditProfile} from "./EditProfile"
import {UpdatePassword} from "./UpdatePassword"

export const Settings=()=>{
  return (
    <>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}