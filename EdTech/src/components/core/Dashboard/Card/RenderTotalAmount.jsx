import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import {IconButton} from "../../../common/IconButton"
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI"

export const RenderTotalAmount=()=> {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
  }

  return (
    <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <IconButton
        onClick={handleBuyCourse}
      >

        <div className="rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">Buy Now</div>
      </IconButton>
    </div>
  )
}