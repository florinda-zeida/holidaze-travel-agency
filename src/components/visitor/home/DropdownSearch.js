import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../../constants/Api';
import  Col  from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import Alert from 'react-bootstrap/Alert';







function DropdownSearch() {

    const [dropdownAccommodation, setDropdownAccommodation] = useState([]);
    const [serverError, setServerError] = useState(false);
    
    const history = useHistory();

    
    const url = BASE_URL + "/accommodations";


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(res => {
                if(res.error) {
                    setServerError(true);
                    
                }
                else {
                    const accommodations = res.map(function (accommodation) {
                        return { id: accommodation.id, label: accommodation.title };
                    });
                    setDropdownAccommodation(accommodations);
                }
            })
            .catch(error => {
                setServerError(error.message);
            })
                
        
    }, [url]);

    function goToAccommodation(accommodation) {
        console.log("accommodation", accommodation);
        
        history.push('/detail/' + accommodation[0].id);
    }

    if(serverError) {
        return <Alert variant="danger" className="error-alert">An Error occurred, please refresh the page and try again. <b className="error-b">Error description:</b> {serverError}</Alert>;
    }

    return (
        <>
        <Col className="col_typeahead">
                <Typeahead 
                    id="dropdown"
                    minLength={0}
                    options={dropdownAccommodation}
                    onChange={(selected) => {
                        goToAccommodation(selected);
                    }}
                    placeholder="Search accommodation..."
                />
              
       </Col>

        </>
    );
}

export default DropdownSearch;
