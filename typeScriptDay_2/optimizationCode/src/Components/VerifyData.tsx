const VerifyData = ({ data }) => {
  const { title, body } = data;
  return (
    <div>
      {title}- {body}
    </div>
  );
};
export default VerifyData;
