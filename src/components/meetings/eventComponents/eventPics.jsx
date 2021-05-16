import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { React, useState } from 'react';
import eventsService from '../../../services/events.service';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// function beforeUpload(file) {
//   // console.log(file);
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 5;
//   if (!isLt2M) {
//     message.error('Image must smaller than 5MB!');
//   }
//   return isJpgOrPng && isLt2M;
// //  }

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

export default function EventPics({ id }) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      /* eslint-disable no-param-reassign */
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = (options) => {
    // console.log(options.fileList);
    setFileList(options.fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
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
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}
