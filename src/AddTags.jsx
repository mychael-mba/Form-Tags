import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tags from './Tags';
import { useState } from 'react';


export default function AddTags() {

  const [inputValue, setInputValue] = useState('')
  const [addTags, setAddTags] = useState([])
  

  // Event handler for the input field
  const changeHandler = (e) => setInputValue(e.target.value)
  
  // Event handler for adding tags
  const addTagHandler = (e) => {
    e.preventDefault()
    if(inputValue.trim() !== ''){
      setAddTags(prevAddTags => [...prevAddTags, inputValue])
      setInputValue('')
    }
  };  
  
  // Event handler to delete a specific tag
  const deleteTagHandler = (index) => {
    const filteredTags = addTags.filter((_, i) => i !== index)
    setAddTags(prevAddTags => filteredTags)
  };

  return (
    <div className="parent-container">  
        <div className="add-tags-input-container">
          <form onSubmit={addTagHandler}>
            <div className="input-container">
              <label htmlFor="input">Add Tags {addTags.length >= 8 ? <span style={{color: 'red'}}>(max reached. Kindly delete a tag) </span> : <span>(max.8)</span>} 
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </label>
              <div className="input-field-container">
                <input type="text" name="add-tag" id="add-tag" value={inputValue} onChange={changeHandler} disabled={addTags.length >= 8}/>
                <button type='submit' className='add-tag-icon'><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </div>
          </form>

          {/* Display user inputted tags */}
          <div className="tags-container">
            {addTags.map((addTag, ind) => 
              <div className="tag" key={ind} >
                {/* Passed the delete handler to the Tag component */}
                <Tags tagName={addTag} deleteTag={() => deleteTagHandler(ind)} />
              </div>)
            }
          </div>

        </div>

        <div className="members-with-access-container">
          <div className="title-text-container">
            <h1>Members with access</h1>
          </div>

          <div className="checkbox-container">
            <label>
              <input type="checkbox" name="display-on-profile" id="display-on-profile" />
              Display on profile <span>NEW</span>
            </label>

            <label>
              <input type="checkbox" name="disable-commenting" id="disable-commenting" />
              Disable commenting
            </label>
          </div>
        </div>

        <div className="add-download-file-container">
          <div className="add-download-file-texts">
            <h1>Add Download File</h1>
            <p>Share your file and allow downloads.</p>
          </div>

          <div className="download-file-btn-container">
            <button>Add</button>
          </div>
        </div>
    </div>
  )
}
