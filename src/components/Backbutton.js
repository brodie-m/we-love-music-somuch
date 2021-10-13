import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
export const BackButton = () => {
    const history = useHistory();

    return (<Button id="back-button" className = "btn-dark bg-dark text-muted" onClick={history.goBack}>
        

        <FontAwesomeIcon icon={faBackward}/>
        
    </Button>)
}