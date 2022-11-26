import {
  ArrowsContainer,
  LeftArrowBtn,
  RightArrowBtn,
} from "../../styles/NavigatePages.styled";

const NavigatePages = ({ noPrevPage, noNextPage, setPage }) => {
  const handlePage = (e) => {
    if (e.target.id === "prev") {
      setPage((prevPage) => {
        return prevPage - 1;
      });
    } else if (e.target.id === "next") {
      setPage((prevPage) => {
        return prevPage + 1;
      });
    }
  };
  return (
    <ArrowsContainer>
      <LeftArrowBtn onClick={handlePage} id="prev" noPrevPage={noPrevPage}>
        {`<<`} Previous
      </LeftArrowBtn>
      <RightArrowBtn onClick={handlePage} id="next" noNextPage={noNextPage}>
        Next {`>>`}
      </RightArrowBtn>
    </ArrowsContainer>
  );
};

export default NavigatePages;
