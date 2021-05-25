import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { React, useState } from 'react';
import eventsService from '../../../services/events.service';
import ImgCrop from 'antd-img-crop';

/**
 * Uploading Event Pictures Component
 * @component
 * @param {int} id the event id
 * @return  {Component}           Return the component to upload the event's pictures
 */

const EventPics = ({ id }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  /**
   * Checks if image size and type are acceptable. Images must be JPG/PNG files and less than 2MB
   * @method
   * @param {file} file the picture user uploaded
   * @returns {Base64} The Base64 version of image otherwise error
   */

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  /**
   * Function is called to send the picture profile to the profile picture service which sends it the backend
   * @method
   * @param {object} options contains information about the object such the file uploaded and other variables
   * @param {file} options.file image file
   * @param {int} options.action event id
   * @property send the parameters to the event service to send the image to the backend for uploading
   */

  const uploadRequest = async (options) => {
    eventsService
      .uploadEventPic(options.file, options.action)
      .then((res) => {
        options.onSuccess(res.data, options.file);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Hides the preview image
   * @method
   */
  const handleCancel = () => {
    setPreviewVisible(false);
  };

  /**
   * Enables the preview image to show and sets the preview image
   * @method
   * @param {file} file image file
   */

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      /* eslint-disable no-param-reassign */
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  /**
   * adds image to image array
   * @method
   * @param {object} options contains information about the object such the file uploaded and other variables
   * @param {array} options.fileList the array of images that have been uploaded by user
   */
  const handleChange = (options) => {
    // console.log(options.fileList);
    setFileList(options.fileList);
  };

  /**
   *
   * Function renders the upload button
   * @method
   * @returns Plus sign to uplaod
   */
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <ImgCrop grid aspect={100 / 60}>
        <Upload
          customRequest={uploadRequest}
          action={id}
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
      </ImgCrop>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};
export default EventPics;
