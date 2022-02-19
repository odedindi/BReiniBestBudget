import * as S from './styles';
import { LoaderCircle } from '@styled-icons/boxicons-regular/LoaderCircle';

const Spinner = () => (
	<S.Container title="Loading..." role="alert" aria-live="assertive">
		<S.Spinner />
		<S.VisuallyHidden>Loading...</S.VisuallyHidden>
	</S.Container>
);

export default Spinner;
