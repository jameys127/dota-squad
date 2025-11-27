import { Outlet } from "react-router-dom"
import Header from "./fixed/Header"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen relative bg-[radial-gradient(125%_125%_at_50%_100%,#000000_40%,#350136_100%)]">
      <Header />
      {/* apparently flex-1 makes it fill the remaining vertical space */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout


// <div className="min-h-screen w-full relative">
//         {/* Azure Depths */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
//           }}
//         />
//         {/* Your Content/Components */}

//       </div>