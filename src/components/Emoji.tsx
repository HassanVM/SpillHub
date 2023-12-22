
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji