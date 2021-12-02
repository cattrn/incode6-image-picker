import ImageCard from "../ImageCard/ImageCard"
import { StyledContainer } from "./styles"

const FavouritesPage = ({ savedPhotos }) => {

  return (
    <StyledContainer>
      {savedPhotos.map((url) => (
        <ImageCard key={url} photo={url} small />
      ))}
    </StyledContainer>
  )
}

export default FavouritesPage