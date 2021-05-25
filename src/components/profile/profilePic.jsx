import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { React, useState } from 'react';
import userService from '../../services/user.service';

/**
 *
 * Uploading Profile Picture Component
 * @component
 * @param {string} currentImg the url of the current profile pic if exists
 * @param {int} id the user id
 * @return  {Component}            Return the component to upload the user's profile picture
 */

const ProfilePic = ({ currentImg, id }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(currentImg);

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  /**
   *
   * Checks if image size and type are acceptable. Images must be JPG/PNG files and less than 2MB
   * @method
   * @param {file} file the picture user uploaded
   * @returns {boolean} if the image is accepatable or not
   */

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

  /**
   *
   * Function is called to send the picture profile to the profile picture service which sends it the backend
   * @method
   * @param {object} options contains information about the object such the file uploaded and other variables
   */

  const uploadRequest = async (options) => {
    userService
      .uploadProfilePic(options.file, options.action)
      .then((res) => {
        options.onSuccess(res.data, options.file);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   *
   * Function is called when a picture is uploaded. Also handles the loading part
   * @method
   * @param {object} info contains information about the object such the file uploaded and other variables
   */

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imgUrl) => {
        setLoading(false);
        setImageUrl(imgUrl);
      });
    }
  };

  /**
   *
   * Function renders the upload button
   * @method
   * @returns loading animation or Plus sign to uplaod
   */

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      customRequest={uploadRequest}
      action={id}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img className='editprofileImg' src={imageUrl} alt='avatar' style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
export default ProfilePic;
