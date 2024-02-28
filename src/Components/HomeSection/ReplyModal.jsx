import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from 'formik';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4,
};

export default function ReplyModal({ handleClose, open }) {

  const navigate = useNavigate();

  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSubmit=(values)=>{
    console.log("handle submit:",values)
  }

  const formik = useFormik({
    initialValues:{
        content:"",
        image:"",
        tweetId:4
    },
    onSubmit:handleSubmit
  })

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate(`/tweet/${3}`)} className="cursor-pointer">
              <p className="mb-2 p-0">All the best Harsh..!!</p>
              
            </div>
          </div>
        </div>
      </div>
      <section className={`py-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                            <img src=''/>
                        </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "18px",
                      bgcolor: "#1d9bf0",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
        </Box>
      </Modal>
    </div>
  );
}