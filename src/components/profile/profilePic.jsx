import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { React, useState } from 'react';
import userService from '../../services/user.service';


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
    // console.log(file);
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const uploadRequest = async (options) => {
    userService.uploadProfilePic(options.file, options.action).then((res) => {
        options.onSuccess(res.data, options.file)
    }).catch((err) => {
        console.log(err)
    })
  };

export default function ProfilePic({currentImg, id}) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(currentImg);
    console.log(id)

    const handleChange = (info) => { 
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imgUrl =>{
        setLoading(false); 
        setImageUrl(imgUrl);
        },
      );
    }
  };
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest = {uploadRequest}
        action = {id}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        
        {imageUrl ? <img className='editprofileImg' src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
