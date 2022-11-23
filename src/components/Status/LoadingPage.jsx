import { MoonLoader } from "react-spinners";
import { LoadingContainer } from "../../styles/Loading.styled";

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <MoonLoader color="#36d7b7" />
    </LoadingContainer>
  );
};

export default LoadingPage;
