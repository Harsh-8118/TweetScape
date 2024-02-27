import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab } from "@mui/material";
import { TabPanel,TabList,TabContext } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModel from "./ProfileModel";

const Profile = () => {

    const [tabValue, setTabvalue] = useState("1")
  const navigate = useNavigate();

  const[openProfileModal,setOpenProfileModal]=useState(false);

  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    console.log("Open follow user model");
  };

  const handleTabChange=(event, newValue)=>{
    setTabvalue(newValue)

    if(newValue===4){
        console.log("likes tweets");
    } else if(newValue === 1){
        console.log("users tweets")
    }
  }

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />

        <h1 className="py-5 text-xl font-bold opacity-95 ml-5">
          Harsh R Raghamwar
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="harsh"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Harsh R Raghamwar</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"
                alt="verify"
              />
            )}
          </div>
          <h1 className="text-gray-500">@harsh_raghamwar</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello, I'am Harsh R Raghamwar working as software developer at Aloha
            Technology.
          </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">India</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jan 2024</p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold">
                <span>190</span>
                <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
                <span>590</span>
                <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="TWEETS" value="1" />
            <Tab label="REPLIES" value="2" />
            <Tab label="MEDIA" value="3" />
            <Tab label="LIKES" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            {[1,1,1,1].map((item)=><TweetCard/>)}
        </TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>

      <section>
        <ProfileModel handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
};

export default Profile;
