import './shared.less';

const Divider = (props) => {
  const { height, color, width } = props;
  return (
    <div
      style={{
        height,
        backgroundColor: color,
        width,
      }}
    />
  );
};

// const ButtonLg = (props) => {
//   const {href, type, color, textColor, icon, text} = props
//   return (
//     <a href={href} alt='' type={type}>
//       <div className='round-button-lg' >
//         <Col>
//           <Space>
//             <div>{text}</div>
//             {icon}
//             {/* <AiOutlineArrowRight size={20} /> */}

//           </Space>
//         </Col>
//       </div>
//     </a>

//   )
// }

export default Divider;
// remove default once we add more reuseable components
