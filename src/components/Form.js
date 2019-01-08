import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City" className="form-control" />
            <input type="text" name="country" placeholder="Country" className="form-control" />

            <button>Get Weather</button>
        </form>
      );
}


export default Form;