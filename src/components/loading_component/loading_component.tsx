import Confetti from 'react-confetti';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

const LoadingComponent = () => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
};

export default LoadingComponent;
