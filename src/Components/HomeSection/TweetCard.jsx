import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyModal from "./ReplyModal";
import { useState } from "react";

function TweetCard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const[openReplyModal,setOpenReplyModal]=useState(false);

  const handleOpenReplyModel = () => setOpenReplyModal(true);
  
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleDeleteTweet = () => {
    console.log("Tweet Deleted");
    handleClose();
  };

  const handleCreateRetweet = () => {
    console.log("create retweet");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleLikeTweet = () => {
    console.log("handle like tweet");
  };

  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon/>
            <p>Your Retweet</p>
        </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => `/profile/{6}`}
          className="cursor-pointer"
          alt="username"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
        />

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer item-center space-x-2">
              <span className="font-semibold">Harsh R Raghamwar</span>
              <span className="text-gray-600">@harsh_raghamwar . 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"
                alt="verify"
              />
            </div>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                OnClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate(`/tweet/${3}`)} className="cursor-pointer">
              <p className="mb-2 p-0">All the best Harsh..!!</p>
              <img
                className="w-[28rem] border-gray-400 p-5 rounded-md"
                src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="tweetimage"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
            <div className="space-x-3 items-center text-gray-600">
            <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
              <p>43</p>
            </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRetweet}
                />
                <p>54</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="cursor-pointer"
                    onClick={handleLikeTweet}
                  />
                )}
                <p>54</p>
              </div>

              <div className="space-x-3 items-center text-gray-600">
                <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
                <p>430</p>
              </div>

              <div className="space-x-3 items-center text-gray-600">
                <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
      </section>
    </React.Fragment>
  );
}

export default TweetCard;
