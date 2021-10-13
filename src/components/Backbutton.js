import { useHistory } from 'react-router-dom';

export const BackButton = () => {
    const history = useHistory();

    return <button id="back-button" onClick={history.goBack}>Back</button>
}