import React from 'react';
import Button from 'react-uikit-button';
import Grid from 'react-uikit-grid';
import Overlay from 'react-uikit-overlay';
import Form from 'react-uikit-form/';
import FormInput from 'react-uikit-form/lib/form-input';
import { element } from 'react-uikit-base';

const Centered = element();


const Subscribe = (props) => (
  <Grid>
    <Form
      colSmall='4-5'
      colMedium='2-5'
      center
    >
      <Overlay
        background
        src='./subscribe.jpg'
      >
        <Centered vertical='middle' tall='parent'>
          <h2>{`Stop! {KOLAB}orate and listen!`}</h2>
          <p>Sign up to are great newsletter for all kinds of awesome things, suff.</p>
        </Centered>
      </Overlay>

      <Grid gutter='collapse'>
        <FormInput
          colSmall='3-5'
          wide
          icon='envelope'
          placeholder='Enter Your Email'
          onChange={props.onChange}
        />

        <Button
          colSmall='2-5'
          body='Sign Up'
          onClick={props.onSubmit}
        />
      </Grid>
    </Form>
  </Grid>
);


Subscribe.propTypes = {
  onChange  : React.PropTypes.func,
  onSubmit  : React.PropTypes.func
};

export default Subscribe;

export default Subscribe;
