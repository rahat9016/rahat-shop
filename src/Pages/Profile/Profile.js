import React from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { profile } from "../../Data/Data";
const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout>
      <div>
        <MenuSection />
        <div className="bg-bgShop py-10">
          <div className="max-w-5xl  mx-auto py-5 flex flex-col justify-center">
            {/* User Information */}
            <div className="flex gap-4 items-center border-b-2 py-4 border-[#d8d8d8]   ">
              <CgProfile size={80} color="#C5C5C5" />
              <div>
                <p>Hello,</p>
                <h1 className="font-fira text-lg">
                  {user.firstName + " " + user.lastName}
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 px-4">
              {profile.length > 0
                ? profile.map((pro, index) => {
                    return (
                      <div
                        className="bg-white shadow-md w-full  flex flex-col items-center justify-center rounded-md p-5 hover:border-[#3749bb] hover:border-[1px] hover:text-orange cursor-pointer"
                        key={index}
                        onClick={() => navigate(`${pro.location}`)}
                      >
                        <span className="w-10 h-10 flex items-center justify-center rounded-full p-2 bg-[rgba(55,75,190,.1)] mb-1 ">
                          {<pro.icon className="text-2xl text-[#3749bb]" />}
                        </span>

                        <h1 className="font-fira">{pro.name}</h1>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
