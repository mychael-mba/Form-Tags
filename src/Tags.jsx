import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Tags({tagName, deleteTag}) {
  return (
    <>
        <p>{tagName}</p>
        <button onClick={deleteTag}>
            <FontAwesomeIcon icon={faXmark}/>
        </button>
    </>

  )
}
