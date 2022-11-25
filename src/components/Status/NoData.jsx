import {
  NoDataContainer,
  NoDataEmoji,
  NoDataText,
} from "../../styles/NoData.styled";

const NoData = () => {
  return (
    <NoDataContainer>
      <NoDataEmoji />
      <NoDataText>Something Went Wrong...</NoDataText>
    </NoDataContainer>
  );
};

export default NoData;
