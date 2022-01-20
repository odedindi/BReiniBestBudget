import * as S from './styles';
import { LoaderCircle } from '@styled-icons/boxicons-regular/LoaderCircle';

const Spinner = () => (
	<span title="Loading..." role="alert" aria-live="assertive">
		{/* <LoaderCircle size='36' /> */}
		<S.Spinner />
		<S.VisuallyHidden>Loading...</S.VisuallyHidden>
	</span>
);

export default Spinner;
