import React from 'react';
import 'bulma/css/bulma.css';

function InputFile(props){
    return(
        <div class="file has-name is-fullwidth">
            <label class="file-label">
                <input class="file-input" type="file" accept="image/*" name={props.name} onChange={props.handleChange}/>
                <span class="file-cta">
                    <span class="file-icon"><i class="fas fa-upload"></i></span>
                    <span class="file-label">Choose a file…</span>
                </span>
                <span class="file-name">{props.nameFile}</span>
            </label>
        </div>
    );
}

export default InputFile;