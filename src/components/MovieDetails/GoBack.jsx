import { useNavigate } from "react-router-dom";
import { GoBackButton, GoBackDiv } from "../../styles/Details.styled";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <GoBackDiv>
      <GoBackButton onClick={() => navigate(-1)}>{`<<`} Go Back</GoBackButton>
    </GoBackDiv>
  );
};

export default GoBack;
